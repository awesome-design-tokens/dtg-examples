import { useEffect, useState } from 'react';

import { data, Weather } from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';
// import { Selector } from '../components/selector/Selector';

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
    <div className="w-full min-w max-w shadow-md md:w-screen-60">
      <Header />

      <main className="flex flex-col items-stretch md:flex-row">
        <aside className="grow shrink basis-2/5 flex flex-col justify-stretch">
          <Picture code={current.code} />
          <Report
            status={current.status}
            onReport={(data) => {
              console.log('Report', data);
            }}
          />
        </aside>
        <div className="grow shrink basis-3/5 flex flex-col justify-stretch">
          <Info city={current.city} code={current.code} temp={current.temp} />
          {/* <Selector
            clsx={styles.selector}
            value={current.uid}
            name="cities"
            items={data}
            onSelect={(value) => {
              setUid(value);
              console.log('Selection', value);
            }}
          /> */}
        </div>
      </main>
    </div>
  );
};

export default App;
