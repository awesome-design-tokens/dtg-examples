import { useEffect, useState } from 'react';

import { Weather, data } from '@dtg-examples/common-data';

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
    <div>
      <Header />

      <br />
      <span>{current.city}</span>
      {items.map((item) => {
        return <div key={item.uid}>{item.city}</div>;
      })}
    </div>
  );
};

export default App;
