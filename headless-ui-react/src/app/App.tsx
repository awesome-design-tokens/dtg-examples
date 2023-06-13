import { useEffect, useState } from 'react';

import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';
import { Selector } from '../components/selector/Selector';

import data from '../data/data';
import { Weather } from '../types';

import styles from './app.module.css';

const App = () => {
  const [items, setItems] = useState<Weather[]>([]);
  const [uid, setUid] = useState(data[0].uid);
  const [loading, setLoading] = useState(true);

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
        <div className={styles.controls}>
          <Info city={current.city} code={current.code} temp={current.temp} />
          <Selector
            value={current.uid}
            name="cities"
            items={data}
            onSelect={(value) => {
              setUid(value);
              console.log('Selection', value);
            }}
          />
        </div>
        <aside className={styles.data}>
          <Picture code={current.code} />
          <Report
            status={current.status}
            onReport={(data) => {
              console.log('Report', data);
            }}
          />
        </aside>
      </main>
    </div>
  );
};

export default App;
