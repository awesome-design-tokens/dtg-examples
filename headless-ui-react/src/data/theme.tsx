import { createContext, useState, ReactElement } from 'react';

import { THEME, ThemeNames, Themes } from './globals';

interface ThemeContextProps {
  theme: ThemeNames;
  changeTheme: (theme: ThemeNames) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME[Themes.Awsm],
  changeTheme: () => null,
});

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<ThemeNames>(THEME[Themes.Awsm]);

  const changeTheme = (t: ThemeNames) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
  };

  document.documentElement.dataset.theme = theme;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
