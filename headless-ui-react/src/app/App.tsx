import { useContext, useEffect, useState } from 'react';
import { data, Weather } from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';
import { Selector } from '../components/selector/Selector';

import { ThemeContext } from '../data/theme';
import { THEME, Themes } from '../data/globals';

import styles from './app.module.css';

const App = () => {
  const [items, setItems] = useState<Weather[]>([]);
  const [uid, setUid] = useState(data[0].uid);
  const [loading, setLoading] = useState(true);

  const { changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    setItems(data);
    setLoading(false);
  }, []);

  const current = items.find((item) => uid === item.uid)!;

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.root}>
      <Header />

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
          <Selector
            clsx={styles.selector}
            value={current.uid}
            name="cities"
            items={data}
            onSelect={(value) => {
              setUid(value);
              changeTheme(THEME[items.findIndex((item) => value === item.uid) as Themes]);
              console.log('Selection: ', value);
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
