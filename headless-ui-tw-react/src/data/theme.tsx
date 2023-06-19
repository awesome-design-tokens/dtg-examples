import { createContext, useState, ReactElement, useEffect } from 'react';
import { THEME, Themes } from './globals';

type ThemeNames = (typeof THEME)[Themes];

interface ThemeContextProps {
  theme: ThemeNames;
  nextTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME[Themes.Cyber],
  nextTheme: () => null,
});

const themes = Object.values(THEME);

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<ThemeNames>(THEME[Themes.Cyber]);
  const [index, setIndex] = useState(0);

  const nextTheme = () => {
    setIndex(index >= themes.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setTheme(themes[index]);
  }, [index]);

  document.documentElement.dataset.theme = theme;

  return (
    <ThemeContext.Provider value={{ theme, nextTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
