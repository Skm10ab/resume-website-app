import React, { useState, useEffect } from 'react';
import ResumeUploader from './components/ResumeUploader';
import Editor from './components/Editor';
import PreviewWebsite from './components/PreviewWebsite';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Resume to Website Generator</h1>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <ResumeUploader setResumeData={setResumeData} />
      {resumeData && (
        <>
          <Editor resumeData={resumeData} setResumeData={setResumeData} />
          <PreviewWebsite resumeData={resumeData} theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;
