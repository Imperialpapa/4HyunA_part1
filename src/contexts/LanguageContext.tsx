import { createContext, useContext, useState, useCallback } from 'react';
import type { Language } from '../data/types';
import type { ReactNode } from 'react';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'ko',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('storyLang');
    return stored === 'en' ? 'en' : 'ko';
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko';
      localStorage.setItem('storyLang', next);
      return next;
    });
  }, []);

  return (
    <LanguageContext value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
