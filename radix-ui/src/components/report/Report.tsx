import { KeyboardEvent, useState } from 'react';
import { css } from '@emotion/react';

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
      css={[
        css`
          padding: var(--awsm-space-100);

          background-color: var(--awsm-color-base-dark);
          color: var(--awsm-color-text-regular);
        `,
        clsx,
      ]}
    >
      <h2
        css={css`
          margin: 0;
          margin-bottom: var(--awsm-space-050);

          color: var(--awsm-color-text-strong);
        `}
      >
        Anomaly Status
      </h2>
      <h3
        css={css`
          margin: 0;
        `}
      >
        {status}
      </h3>

      <fieldset
        css={css`
          margin-top: var(--awsm-space-100);
          padding: var(--awsm-space-100);

          border: var(--awsm-space-012) solid
            rgba(var(--awsm-color-primary-rgb), 0.5);

          background: var(--awsm-color-gamma-300);
        `}
      >
        <div>
          <input
            css={css`
              display: block;
              width: 100%;

              box-sizing: border-box;
              padding: var(--awsm-space-075);
              height: calc(var(--awsm-font-size-n) + 2 * var(--awsm-space-075));

              border: var(--awsm-space-012) solid var(--awsm-color-gamma-400);
              background: var(--awsm-color-gamma-850);
              color: var(--awsm-color-gamma-150);

              font-size: var(--awsm-font-size-n);
              line-height: 0;

              transition: all ease-out var(--awsm-duration-instant);

              &:focus {
                background: var(--awsm-color-gamma-900);
              }
            `}
            type="text"
            placeholder="Describe situation"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
          />
        </div>
        <div>
          <button
            css={css`
              display: block;
              width: 100%;
              margin-top: var(--awsm-space-100);

              box-sizing: border-box;
              padding: var(--awsm-space-075);
              height: calc(var(--awsm-font-size-n) + 2 * var(--awsm-space-075));

              border: var(--awsm-space-012) solid var(--awsm-color-primary);
              background: var(--awsm-color-primary);

              color: var(--awsm-color-primary-contrast);
              font-size: var(--awsm-font-size-n);
              line-height: 0;
              text-transform: uppercase;
              white-space: nowrap;

              cursor: pointer;
              transition: all ease-out var(--awsm-duration-instant);

              @media (hover: hover) {
                &:hover {
                  background: var(--awsm-color-primary-tint);
                }
              }

              &:active {
                background: var(--awsm-color-primary-tone);
              }
            `}
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
