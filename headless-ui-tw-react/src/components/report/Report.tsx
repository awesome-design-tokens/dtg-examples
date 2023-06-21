import { KeyboardEvent, useState } from 'react';

import { ComponentProps } from '../../types';

export interface ReportProps extends ComponentProps {
  status: string;
  onReport: (data: string) => void;
}

const Report = (props: ReportProps) => {
  const { clsx, status, onReport } = props;

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
    <section
      className={`p-4 bg-base-dark text-text-regular ${clsx ? ' ' + clsx : ''}`}
    >
      <h2 className="m-0 mb-2 text-text-strong text-xl leading-tight">Anomaly Status</h2>
      <h3 className="m-0 text-lg leading-tight">{status}</h3>

      <fieldset className="mt-4 p-4 bg-gamma-300 border-2 border-primary-alpha/50">
        <div>
          <input
            className="h-form-base w-full block box-border p-3 border-2 border-gamma-400 bg-gamma-850 focus:bg-gamma-900 text-text-strong text-base leading-reset transition duration-instant"
            type="text"
            placeholder="Describe situation"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
          />
        </div>
        <div>
          <button
            className="border-2 border-primary h-form-base block w-full box-border mt-4 p-3 bg-primary hover:bg-primary-tint active:bg-primary-tone text-primary-contrast text-base leading-reset cursor-pointer transition duration-instant uppercase whitespace-nowrap"
            onClick={handleClick}
            onKeyUp={handleKey}
          >
            Report Anomaly
          </button>
        </div>
      </fieldset>
    </section>
  );
};

export { Report };
