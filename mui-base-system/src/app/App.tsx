import { useContext, useEffect, useState } from 'react';

import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';

import {
  ThemeNames,
  Themes,
  Weather,
  data,
  themes,
} from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';
import { Select } from '../components/select/Select';

import { theme } from '../theme';

import { ThemeContext } from '../context/theme';

const themesList = Object.values(themes);

const App = () => {
  const [items, setItems] = useState<Weather[]>([]);
  const [uid, setUid] = useState(data[0].uid);
  const [loading, setLoading] = useState(true);

  const { theme: appTheme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    setItems(data);
    setLoading(false);
  }, []);

  const current = items.find((item) => uid === item.uid)!;

  if (loading) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        width: '100%',
        minWidth: 'var(--min-width)',
        maxWidth: 'var(--max-width)',
        boxShadow: theme.shadow.medium,

        [theme.breakpoints.up('md')]: {
          width: '60vw',
        },
      }}
    >
      <Header>
        <Select
          name="themes"
          items={themesList}
          value={appTheme}
          onSelectValue={(value) => {
            changeTheme(
              themes[themesList.indexOf(value as ThemeNames) as Themes]
            );
            console.log('Theme: ', value);
          }}
        />
      </Header>

      <Stack
        direction="row"
        component="main"
        sx={{
          position: 'relative',
          zIndex: 10,

          [theme.breakpoints.down('md')]: {
            flexFlow: 'column',
            alignItems: 'stretch',
          },
        }}
      >
        <Stack
          component="aside"
          sx={{
            [theme.breakpoints.up('md')]: {
              flexBasis: '40%',
            },
          }}
        >
          <Picture code={current.code} />
          <Report
            status={current.status}
            onReport={(data) => {
              console.log('Report: ', data);
            }}
          />
        </Stack>
        <Stack
          sx={{
            [theme.breakpoints.up('md')]: {
              flexBasis: '60%',
            },
          }}
        >
          <Info city={current.city} code={current.code} temp={current.temp} />

          <ul>
            {items.map((item) => {
              return (
                <li key={item.uid}>
                  {item.city}: {item.temp}
                </li>
              );
            })}
          </ul>
        </Stack>
      </Stack>
    </Box>
  );
};

export default App;
