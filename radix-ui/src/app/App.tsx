import { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';

import {
  ThemeNames,
  Themes,
  Weather,
  data,
  themes,
} from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';
import { Picture } from '../components/picture/Picture';
import { Info } from '../components/info/Info';
import { Report } from '../components/report/Report';
import { List } from '../components/list/List';
import { Select } from '../components/select/Select';

import { ThemeContext } from '../context/theme';

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
    <div
      css={css`
        width: 100%;

        min-width: var(--min-width);
        max-width: var(--max-width);

        box-shadow: var(--awsm-shadow-medium);

        @media (min-width: 780px) {
          width: 60vw;
        }
      `}
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

      <main
        css={css`
          position: relative;
          z-index: 10;

          display: flex;
          flex-flow: column;
          align-items: stretch;

          @media (min-width: 780px) {
            flex-flow: row;
          }
        `}
      >
        <aside
          css={css`
            flex: 1 1 40%;

            display: flex;
            flex-direction: column;
            justify-content: stretch;
          `}
        >
          <Picture code={current.code} />
          <Report
            clsx={css`
              flex: 1 0 auto;

              display: flex;
              flex-flow: column;
              justify-content: center;
            `}
            status={current.status}
            onReport={(data) => {
              console.log('Report: ', data);
            }}
          />
        </aside>
        <div
          css={css`
            flex: 1 1 60%;

            display: flex;
            flex-direction: column;
            justify-content: stretch;
          `}
        >
          <Info city={current.city} code={current.code} temp={current.temp} />
          <List
            clsx={css`
              flex: 1 0 auto;

              display: flex;
              flex-flow: column;
              justify-content: center;
            `}
            value={current.uid}
            name="cities"
            items={data}
            onSelect={(value) => {
              setUid(value);
              console.log('Selection: ', value);
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
