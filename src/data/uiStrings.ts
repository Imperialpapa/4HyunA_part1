import type { Language } from './types';

type UIStringKey =
  | 'appTitle'
  | 'appSubtitle'
  | 'back'
  | 'previous'
  | 'next'
  | 'finish'
  | 'storyNotFound'
  | 'pages'
  | 'readAloud'
  | 'pause'
  | 'stop';

export const uiStrings: Record<UIStringKey, Record<Language, string>> = {
  appTitle: {
    ko: '숲속 친구들',
    en: 'Forest Friends',
  },
  appSubtitle: {
    ko: '어떤 이야기를 들을까요?',
    en: 'Which story shall we hear?',
  },
  back: {
    ko: '돌아가기',
    en: 'Back',
  },
  previous: {
    ko: '이전',
    en: 'Prev',
  },
  next: {
    ko: '다음',
    en: 'Next',
  },
  finish: {
    ko: '끝!',
    en: 'Done!',
  },
  storyNotFound: {
    ko: '이야기를 찾을 수 없어요',
    en: 'Story not found',
  },
  pages: {
    ko: '페이지',
    en: 'pages',
  },
  readAloud: {
    ko: '읽어주기',
    en: 'Read aloud',
  },
  pause: {
    ko: '일시정지',
    en: 'Pause',
  },
  stop: {
    ko: '멈추기',
    en: 'Stop',
  },
};
