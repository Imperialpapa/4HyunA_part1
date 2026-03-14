import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'ko' ? 'Switch to English' : '한국어로 바꾸기'}
    >
      <span className="lang-flag">
        {language === 'ko' ? '🇰🇷' : '🇺🇸'}
      </span>
      <span className="lang-label">
        {language === 'ko' ? '한국어' : 'EN'}
      </span>
    </button>
  );
}
