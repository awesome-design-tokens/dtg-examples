import { useContext, useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

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

import { ThemeContext } from '../context/theme';
import { List } from '../components/list/List';

const themesList = Object.values(themes);

const App = () => {
  const [items, setItems] = useState<Weather[]>([]);
  const [uid, setUid] = useState(data[0].uid);
  const [loading, setLoading] = useState(true);

  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    setItems(data);
    setLoading(false);
  }, []);

  const current = items.find((item) => uid === item.uid)!;

  if (loading) return <div>Loading...</div>;

  return (
    <Box
      w={{ base: '100%', md: '60vw' }}
      minW="var(--min-width)"
      maxW="var(--max-width)"
      boxShadow="md"
    >
      <Header>
        <Select
          name="themes"
          items={themesList}
          value={theme}
          onSelectValue={(value) => {
            changeTheme(
              themes[themesList.indexOf(value as ThemeNames) as Themes]
            );
            console.log('Theme: ', value);
          }}
        />
      </Header>

      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex direction="column" flexBasis="40%" justifyContent="stretch">
          <Picture code={current.code} />
          <Report
            clsx={{
              flexGrow: 1,
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
            status={current.status}
            onReport={(data) => {
              console.log('Report: ', data);
            }}
          />
        </Flex>

        <Flex direction="column" flexBasis="60%" justifyContent="stretch">
          <Info city={current.city} code={current.code} temp={current.temp} />
          <List
            clsx={{
              flexGrow: 1,
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
            value={current.uid}
            name="cities"
            items={data}
            onSelectValue={(value) => {
              setUid(value);
              console.log('Selection: ', value);
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
