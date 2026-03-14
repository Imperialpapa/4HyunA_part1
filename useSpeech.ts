import { useState, useCallback, useEffect, useRef } from 'react';
import type { Language } from '../data/types';
import type { RefObject } from 'react';

export interface UseSpeechReturn {
  speak: (text: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
  isPaused: boolean;
  pause: () => void;
  resume: () => void;
}

interface UseSpeechOptions {
  language: Language;
  onNaturalEndRef?: RefObject<(() => void) | null>;
}

const PREFERRED_KO_VOICES = [
  'yuna', 'sua', 'jian', 'minsu',
  'google 한국의', 'google korean',
  'microsoft sunhi', 'microsoft heami',
  'ko-kr', 'korean',
];

const PREFERRED_EN_VOICES = [
  'samantha', 'karen', 'kate',
  'google us english female', 'google us english',
  'microsoft aria', 'microsoft jenny', 'microsoft zira',
  'en-us', 'english',
];

function findBestVoice(lang: Language): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  const langCode = lang === 'ko' ? 'ko' : 'en';
  const preferred = lang === 'ko' ? PREFERRED_KO_VOICES : PREFERRED_EN_VOICES;
  const langVoices = voices.filter((v) => v.lang.toLowerCase().startsWith(langCode));
  if (langVoices.length === 0) return null;
  for (const keyword of preferred) {
    const match = langVoices.find((v) => v.name.toLowerCase().includes(keyword));
    if (match) return match;
  }
  const premium = langVoices.find((v) => !v.localService);
  if (premium) return premium;
  return langVoices[0];
}

export function useSpeech({ language, onNaturalEndRef }: UseSpeechOptions): UseSpeechReturn {
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const cancelledRef = useRef(false);
  const [voicesReady, setVoicesReady] = useState(false);

  useEffect(() => {
    if (!isSupported) return;
    const handleVoicesChanged = () => setVoicesReady(true);
    if (window.speechSynthesis.getVoices().length > 0) setVoicesReady(true);
    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, [isSupported]);

  useEffect(() => {
    return () => {
      if (isSupported) window.speechSynthesis.cancel();
    };
  }, [isSupported]);

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
      setTimeout(() => {
        cancelledRef.current = false;
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = findBestVoice(language);
        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          utterance.lang = language === 'ko' ? 'ko-KR' : 'en-US';
        }
        if (language === 'ko') {
          utterance.rate = 0.82;
          utterance.pitch = 1.15;
          utterance.volume = 0.95;
        } else {
          utterance.rate = 0.88;
          utterance.pitch = 1.12;
          utterance.volume = 0.95;
        }
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
          setIsSpeaking(false);
          setIsPaused(false);
          if (!cancelledRef.current) onNaturalEndRef?.current?.();
        };
        utterance.onerror = () => setIsSpeaking(false);
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
    setIsPaused(false);
  }, [isSupported]);

  const pause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [isSupported]);

  return { speak, stop, isSpeaking, isSupported, isPaused, pause, resume };
}
