import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { Picture } from '../components/picture/Picture';
import { Report } from '../components/report/Report';
import { Selector } from '../components/selector/Selector';

import styles from './app.module.css';

const items = [
  {
    uid: '111',
    value: '1',
    dataPrimary: 'Mega City 11',
    dataSecondary: 'Snow, -15°C',
  },
  {
    uid: '222',
    value: '2',
    dataPrimary: 'Mega City 13',
    dataSecondary: 'Fog, 2°C',
  },
  {
    uid: '333',
    value: '3',
    dataPrimary: 'Severed Grounds',
    dataSecondary: 'Sun, 44°C',
  },
];

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <div className={styles.controls}>
          <Info city="Liberty Pods" sky="Heavy Rain" temp={7} />
          <Selector
            value="2"
            name="cities"
            items={items}
            onSelect={(value) => {
              console.log('Selection', value);
            }}
          />
        </div>
        <aside className={styles.data}>
          <Picture
            src={
              'https://res.cloudinary.com/wdybih/image/upload/v1686476354/weather/demo-rain_sfsdd0.png'
            }
          />
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
