export type Language = 'ko' | 'en';

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface StoryPage {
  text: LocalizedText;
  illustration: string;
  bgColor: string;
}

export interface Story {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  coverColor: string;
  coverEmoji: string;
  pages: StoryPage[];
}
