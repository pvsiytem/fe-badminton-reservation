'use client';
import { useEffect, useState } from 'react';
import ThemeContext from '@/app/context/themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('badminton-theme');
    if (stored) {
      setDarkTheme(JSON.parse(stored));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('badminton-theme', JSON.stringify(darkTheme));
    }
  }, [darkTheme, mounted]);

  if (!mounted) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;