import { useEffect, useState } from 'react';

import { Weather, data } from '@dtg-examples/common-data';
import { Box } from '@chakra-ui/react';

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
      <Box px={4} py={2} as="header" bg="primary.default">
        <h1>
          {current.city}: {current.temp}
        </h1>
      </Box>

      <section>
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
