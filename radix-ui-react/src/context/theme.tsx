import { createContext, useState, ReactElement } from 'react';

import { ThemeNames, Themes, themes } from '@dtg-examples/common-data';

interface ThemeContextProps {
  theme: ThemeNames;
  changeTheme: (theme: ThemeNames) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes[Themes.Awsm],
  changeTheme: () => null,
});

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<ThemeNames>(themes[Themes.Awsm]);

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
