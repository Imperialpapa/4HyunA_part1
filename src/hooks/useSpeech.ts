import { useState, useCallback, useEffect, useRef } from 'react';
import type { Language } from '../data/types';
import type { RefObject } from 'react';

export interface UseSpeechReturn {
  speak: (text: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

interface UseSpeechOptions {
  language: Language;
  onNaturalEndRef?: RefObject<(() => void) | null>;
}

// Preferred voice keywords by language (ordered by priority)
// These help select the most natural-sounding voice available on the device
const PREFERRED_KO_VOICES = [
  'yuna',        // macOS Korean (very natural)
  'sua',         // macOS Korean
  'jian',        // macOS Korean
  'minsu',       // macOS Korean
  'google 한국의', // Chrome Korean
  'google korean',
  'microsoft sunhi',   // Windows Korean
  'microsoft heami',   // Windows Korean
  'ko-kr',
  'korean',
];

const PREFERRED_EN_VOICES = [
  'samantha',    // macOS (warm, friendly)
  'karen',       // macOS Australian (soft)
  'kate',        // macOS
  'google us english female',
  'google us english',
  'microsoft aria',    // Windows (natural)
  'microsoft jenny',   // Windows (natural)
  'microsoft zira',    // Windows
  'en-us',
  'english',
];

/**
 * Find the best available voice for the given language.
 * Prioritizes natural / premium voices over robotic ones.
 */
function findBestVoice(lang: Language): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  const langCode = lang === 'ko' ? 'ko' : 'en';
  const preferred = lang === 'ko' ? PREFERRED_KO_VOICES : PREFERRED_EN_VOICES;

  // Filter voices that match the language
  const langVoices = voices.filter((v) =>
    v.lang.toLowerCase().startsWith(langCode)
  );

  if (langVoices.length === 0) return null;

  // Try to find a preferred voice (by keyword match)
  for (const keyword of preferred) {
    const match = langVoices.find(
      (v) => v.name.toLowerCase().includes(keyword)
    );
    if (match) return match;
  }

  // Fallback: prefer non-local (network/premium) voices, then local
  const premium = langVoices.find((v) => !v.localService);
  if (premium) return premium;

  return langVoices[0];
}

export function useSpeech({ language, onNaturalEndRef }: UseSpeechOptions): UseSpeechReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const cancelledRef = useRef(false);
  const [voicesReady, setVoicesReady] = useState(false);

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Listen for voices to become available (async on some browsers)
  useEffect(() => {
    if (!isSupported) return;

    const handleVoicesChanged = () => setVoicesReady(true);

    // Some browsers populate voices synchronously
    if (window.speechSynthesis.getVoices().length > 0) {
      setVoicesReady(true);
    }

    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, [isSupported]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  // Stop speech when language changes
  useEffect(() => {
    if (isSupported) {
      cancelledRef.current = true;
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [language, isSupported]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported) return;

      cancelledRef.current = true;
      window.speechSynthesis.cancel();

      // Small delay to let cancel settle
      setTimeout(() => {
        cancelledRef.current = false;

        const utterance = new SpeechSynthesisUtterance(text);

        // Select the best available voice
        const voice = findBestVoice(language);
        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          utterance.lang = language === 'ko' ? 'ko-KR' : 'en-US';
        }

        // Storytelling-optimized parameters
        if (language === 'ko') {
          utterance.rate = 0.82;   // Slightly slower for Korean (more deliberate)
          utterance.pitch = 1.15;  // Warm, slightly higher pitch
          utterance.volume = 0.95;
        } else {
          utterance.rate = 0.88;   // Natural English pace
          utterance.pitch = 1.12;  // Friendly tone
          utterance.volume = 0.95;
        }

        utterance.onstart = () => {
          setIsSpeaking(true);
        };
        utterance.onend = () => {
          setIsSpeaking(false);
          if (!cancelledRef.current) {
            onNaturalEndRef?.current?.();
          }
        };
        utterance.onerror = () => {
          setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
      }, 50);
    },
    [isSupported, language, onNaturalEndRef, voicesReady],
  );

  const stop = useCallback(() => {
    if (!isSupported) return;
    cancelledRef.current = true;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isSupported]);

  return { speak, stop, isSpeaking, isSupported };
}
