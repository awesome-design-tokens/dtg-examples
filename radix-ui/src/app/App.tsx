import { useEffect, useState } from 'react';

import {
  Weather,
  data,
} from '@dtg-examples/common-data';

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
      <h1>{current.city}</h1>

      {items.map((item) => {
        return <div key={item.uid}>{item.city}</div>;
      })}
    </div>
  );
};

export default App;
