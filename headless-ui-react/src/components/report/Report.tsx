import { KeyboardEvent, useState } from 'react';

export interface ReportProps {
  status: string;
  onReport: (data: string) => void;
}

const Report = (props: ReportProps) => {
  const { status, onReport } = props;

  const [value, setValue] = useState<string>('');

  const handleClick = () => {
    onReport(value);
    setValue('');
  };

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();

      onReport(value);
      setValue('');
    }
  };

  return (
    <section>
      <h2>Anomaly Status</h2>
      <h3>{status}</h3>

      <fieldset>
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