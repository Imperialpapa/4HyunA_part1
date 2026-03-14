import { useLanguage } from '../contexts/LanguageContext';
import { uiStrings } from '../data/uiStrings';
import type { UseSpeechReturn } from '../hooks/useSpeech';
import './TTSControls.css';

interface TTSControlsProps {
  speech: UseSpeechReturn;
  text: string;
}

export function TTSControls({ speech, text }: TTSControlsProps) {
  const { language } = useLanguage();

  if (!speech.isSupported) return null;

  const handlePlayPause = () => {
    if (speech.isSpeaking && !speech.isPaused) {
      speech.pause();
    } else if (speech.isPaused) {
      speech.resume();
    } else {
      speech.speak(text);
    }
  };

  return (
    <div className="tts-controls">
      <button
        className={`tts-btn play-pause ${speech.isSpeaking ? 'active' : ''}`}
        onClick={handlePlayPause}
        aria-label={
          speech.isSpeaking && !speech.isPaused
            ? uiStrings.pause[language]
            : uiStrings.readAloud[language]
        }
      >
        <span className="tts-icon">
          {speech.isSpeaking && !speech.isPaused ? '⏸️' : '🔊'}
        </span>
        <span className="tts-label">
          {speech.isSpeaking && !speech.isPaused
            ? uiStrings.pause[language]
            : uiStrings.readAloud[language]}
        </span>
      </button>

      {speech.isSpeaking && (
        <button
          className="tts-btn stop"
          onClick={speech.stop}
          aria-label={uiStrings.stop[language]}
        >
          <span className="tts-icon">⏹️</span>
        </button>
      )}
    </div>
  );
}
