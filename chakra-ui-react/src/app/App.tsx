import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
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
      <Header>
        <span>Select</span>
      </Header>

      <section>
        <div>
        {current.city}: {current.temp}
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.uid}>
              {item.city}, {item.uid}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
