import { KeyboardEvent, useContext, useState } from 'react';

import { ThemeContext } from '../../data/theme';
import { ComponentProps } from '../../types';

import styles from './report.module.css';

export interface ReportProps extends ComponentProps {
  status: string;
  onReport: (data: string) => void;
}

const Report = (props: ReportProps) => {
  const { clsx, status, onReport } = props;

  const [value, setValue] = useState<string>('');
  const { nextTheme } = useContext(ThemeContext);

  const handleClick = () => {
    onReport(value);
    setValue('');

    nextTheme();
  };

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();

      onReport(value);
      setValue('');
    }
  };

  return (
    <section className={`${styles.root}${clsx ? ' ' + clsx : ''}`}>
      <h2>Anomaly Status</h2>
      <h3>{status}</h3>

      <fieldset className={styles.status}>
        <div>
          <input
            type="text"
            placeholder="Describe situation"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
          />
        </div>
        <div>
          <button onClick={handleClick} onKeyUp={handleKey}>
            Report Anomaly
          </button>
        </div>
      </fieldset>
    </section>
  );
};

export { Report };
