import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { stories } from '../data/stories';
import { uiStrings } from '../data/uiStrings';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import './Home.css';

export function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div className="home">
      <header className="home-header">
        <div className="home-lang-toggle">
          <LanguageToggle />
        </div>
        <motion.div
          className="home-title-wrapper"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="home-title">
            <span className="title-emoji">🌲</span>
            {uiStrings.appTitle[language]}
            <span className="title-emoji">🌲</span>
          </h1>
          <p className="home-subtitle">{uiStrings.appSubtitle[language]}</p>
        </motion.div>
        {/* Floating decorations */}
        <div className="floating-deco">
          {['🦋', '🌸', '⭐', '🍃', '🌈'].map((emoji, i) => (
            <span
              key={i}
              className="float-item"
              style={{
                left: `${10 + i * 18}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </header>

      <div className="story-grid">
        {stories.map((story, index) => (
          <motion.button
            key={story.id}
            className="story-card"
            style={{ '--card-color': story.coverColor } as React.CSSProperties}
            onClick={() => navigate(`/story/${story.id}`)}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="card-emoji">{story.coverEmoji}</div>
            <h2 className="card-title">{story.title[language]}</h2>
            <p className="card-subtitle">{story.subtitle[language]}</p>
            <div className="card-pages">
              📖 {story.pages.length}{language === 'ko' ? '' : ' '}{uiStrings.pages[language]}
            </div>
          </motion.button>
        ))}
      </div>

      <footer className="home-footer">
        <div className="footer-grass"></div>
        <div className="footer-content">
          {['🌻', '🌷', '🌼', '🌻', '🌷', '🌼', '🌻'].map((f, i) => (
            <span key={i} className="footer-flower" style={{ animationDelay: `${i * 0.3}s` }}>
              {f}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}
