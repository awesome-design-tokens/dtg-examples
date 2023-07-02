import * as RadioGroup from '@radix-ui/react-radio-group';
import { css } from '@emotion/react';
import { Weather, weather } from '@dtg-examples/common-data';

import { ComponentProps } from '../../types';

export interface ListProps extends ComponentProps {
  name: string;
  value: string;
  items: Weather[];
  onSelectValue: (v: string) => void;
}

const List = (props: ListProps) => {
  const { clsx, name, value, items, onSelectValue } = props;

  return (
    <RadioGroup.Root
      value={value}
      onValueChange={onSelectValue}
      name={name}
      css={[
        css`
          display: flex;
          flex-flow: column nowrap;
          justify-items: stretch;
          justify-content: stretch;

          padding: var(--awsm-space-100);

          background: var(--awsm-color-gamma-300);
        `,
        clsx,
      ]}
    >
      {items.map(({ uid, city, code, temp }) => (
        <RadioGroup.Item key={uid} value={uid} asChild>
          <div
            css={css`
              flex: 1 1 auto;

              padding: var(--awsm-space-075) var(--awsm-space-100);
              background: var(--awsm-color-secondary);

              color: var(--awsm-color-secondary-contrast);
              transition: all ease-out var(--awsm-duration-short);
              cursor: pointer;

              &[data-state='checked'] {
                z-index: 1;
                color: var(--awsm-color-secondary);
                background: var(--awsm-color-secondary-contrast);
                cursor: default;
              }

              @media (hover: hover) {
                &:not([data-state='checked']):hover {
                  background: var(--awsm-color-secondary-tint);
                }
              }

              &:focus-visible {
                --focus-color: var(--awsm-color-primary);
              }
            `}
          >
            <div
              css={css`
                display: block;

                font-size: var(--awsm-font-size-l);
                font-weight: bold;
                cursor: inherit;
              `}
            >
              {city}
            </div>
            <div
              css={css`
                margin: 0;

                font-size: var(--awsm-font-size-n);
              `}
            >
              {weather[code]}: {temp}°C
            </div>
          </div>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};

export { List };
