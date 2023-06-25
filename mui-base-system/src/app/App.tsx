import { useEffect, useState } from 'react';

import { Weather, data } from '@dtg-examples/common-data';

import styles from './app.module.css';
import { Header } from '../components/header/Header';

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
      <h1>{current.city}</h1>
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
