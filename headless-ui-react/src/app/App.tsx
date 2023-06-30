import { useContext, useEffect, useState } from 'react';

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
import { List } from '../components/list/List';
import { Select } from '../components/select/Select';

import { ThemeContext } from '../context/theme';

import styles from './app.module.css';

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
    <div className={styles.root}>
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

      <main className={styles.main}>
        <aside className={styles.data}>
          <Picture code={current.code} />
          <Report
            clsx={styles.report}
            status={current.status}
            onReport={(data) => {
              console.log('Report: ', data);
            }}
          />
        </aside>
        <div className={styles.controls}>
          <Info city={current.city} code={current.code} temp={current.temp} />
          <List
            clsx={styles.selector}
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
