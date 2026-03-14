import { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { stories } from '../data/stories';
import { uiStrings } from '../data/uiStrings';
import { useLanguage } from '../contexts/LanguageContext';
import { useSpeech } from '../hooks/useSpeech';
import { SceneRenderer } from '../components/illustrations/SceneRenderer';
import { LanguageToggle } from '../components/LanguageToggle';
import './StoryViewer.css';

export function StoryViewer() {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const story = stories.find((s) => s.id === storyId);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Ref-based callback for natural TTS end
  const onNaturalEndRef = useRef<(() => void) | null>(null);
  const speech = useSpeech({ language, onNaturalEndRef });

  // Clear auto-advance timer helper
  const clearAutoAdvance = useCallback(() => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
  }, []);

  // Update the natural-end callback on every render (always has latest state)
  onNaturalEndRef.current = () => {
    if (paused || !story) return;

    const isLast = currentPage >= story.pages.length - 1;

    if (!isLast) {
      // Auto-advance to next page after 1 second
      autoAdvanceTimer.current = setTimeout(() => {
        setDirection(1);
        setCurrentPage((prev) => prev + 1);
      }, 1000);
    } else if (repeat) {
      // Last page + repeat: go back to first page
      autoAdvanceTimer.current = setTimeout(() => {
        setDirection(1);
        setCurrentPage(0);
      }, 1000);
    }
    // Last page + no repeat: do nothing (stop playback)
  };

  // Auto-speak when page or language changes
  useEffect(() => {
    clearAutoAdvance();
    if (!paused && story) {
      const page = story.pages[currentPage];
      const timer = setTimeout(() => {
        speech.speak(page.text[language]);
      }, 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, language, paused]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearAutoAdvance();
  }, [clearAutoAdvance]);

  const goToPage = useCallback(
    (next: number) => {
      if (!story) return;
      if (next < 0 || next >= story.pages.length) return;
      speech.stop();
      clearAutoAdvance();
      setDirection(next > currentPage ? 1 : -1);
      setCurrentPage(next);
    },
    [currentPage, story, speech, clearAutoAdvance]
  );

  const togglePause = useCallback(() => {
    setPaused((prev) => {
      if (!prev) {
        // Pausing: stop TTS + cancel auto-advance
        speech.stop();
        clearAutoAdvance();
      }
      // Unpausing: useEffect will trigger auto-read
      return !prev;
    });
  }, [speech, clearAutoAdvance]);

  if (!story) {
    return (
      <div className="story-not-found">
        <p>{uiStrings.storyNotFound[language]} 😢</p>
        <button onClick={() => navigate('/')}>{uiStrings.back[language]}</button>
      </div>
    );
  }

  const page = story.pages[currentPage];
  const isFirst = currentPage === 0;
  const otherLang = language === 'ko' ? 'en' : 'ko';

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="story-viewer" style={{ background: page.bgColor }}>
      {/* Top bar */}
      <div className="viewer-top-bar">
        <button className="back-btn" onClick={() => { speech.stop(); clearAutoAdvance(); navigate('/'); }}>
          <span className="back-arrow">←</span>
          <span className="back-text">{uiStrings.back[language]}</span>
        </button>
        <div className="page-indicator">
          {story.pages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentPage ? 'active' : ''} ${i < currentPage ? 'done' : ''}`}
              onClick={() => goToPage(i)}
            />
          ))}
        </div>
        <div className="top-bar-right">
          <div className="audio-controls">
            <button
              className={`audio-btn ${paused ? '' : 'is-active'}`}
              onClick={togglePause}
              aria-label={paused ? 'Play' : 'Pause'}
            >
              {paused ? '▶️' : '⏸️'}
            </button>
            <button
              className={`audio-btn ${repeat ? 'is-active' : ''}`}
              onClick={() => setRepeat((r) => !r)}
              aria-label={repeat ? 'Repeat off' : 'Repeat on'}
            >
              🔁
            </button>
          </div>
          <LanguageToggle />
        </div>
      </div>

      {/* Story title */}
      {isFirst && (
        <motion.div
          className="story-title-banner"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="banner-emoji">{story.coverEmoji}</span>
          <h1 lang={language}>{story.title[language]}</h1>
        </motion.div>
      )}

      {/* Content area */}
      <div className="content-area">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            className="page-content"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="illustration-wrapper">
              <SceneRenderer sceneKey={page.illustration} />
            </div>
            <div className="text-wrapper">
              <div className="text-dual">
                <motion.p
                  className={`story-text text-primary ${speech.isSpeaking ? 'is-speaking' : ''}`}
                  lang={language}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {page.text[language]}
                </motion.p>
                <motion.p
                  className="story-text text-secondary"
                  lang={otherLang}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {page.text[otherLang]}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page counter */}
      <div className="page-counter">
        {currentPage + 1} / {story.pages.length}
      </div>

      {/* End screen */}
      {currentPage === story.pages.length - 1 && (
        <motion.div
          className="end-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="end-stars">
            {['⭐', '🌟', '✨', '⭐', '🌟'].map((s, i) => (
              <span
                key={i}
                className="end-star"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
