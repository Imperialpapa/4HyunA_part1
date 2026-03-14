import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import { StoryViewer } from './pages/StoryViewer';
import './App.css';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language === 'ko' ? 'ko' : 'en';
  }, [language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:storyId" element={<StoryViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
