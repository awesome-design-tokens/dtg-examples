import { useEffect, useState } from 'react';

import { Weather, data } from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';

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
      <Info city={current.city} code={current.code} temp={current.temp} />
      <Picture code={current.code} />

      <ul>
        {items.map((item) => {
          return (
            <li key={item.uid}>
              {item.city}: {item.temp}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
