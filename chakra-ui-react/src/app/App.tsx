import { useEffect, useState } from 'react';

import { Weather, data } from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';

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
      <Header>
        <span>Select</span>
      </Header>

      <Info city={current.city} code={current.code} temp={current.temp} />

      <Picture code={current.code} />
      <Report
        status={current.status}
        onReport={(data) => {
          console.log('Report: ', data);
        }}
      />

      <ul>
        {items.map((item) => (
          <li key={item.uid}>
            {item.city}, {item.uid}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
