import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';
import { Selector } from '../components/selector/Selector';

import styles from './app.module.css';

import data from '../data/data';

const App = () => {
  const current = data[1];

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
              console.log('Selection', value);
            }}
          />
        </div>
        <aside className={styles.data}>
          <Picture code={current.code} />
          <Report
            status="No issues detected. Caution advised."
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
