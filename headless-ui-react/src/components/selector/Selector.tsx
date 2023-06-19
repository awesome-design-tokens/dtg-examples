import { Fragment } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Weather } from '@dtg-examples/common-data';

import { WEATHER } from '../../data/globals';
import { ComponentProps } from '../../types';

import styles from './selector.module.css';

export interface SelectorProps extends ComponentProps {
  name: string;
  value: string;
  items: Weather[];
  onSelect: (v: string) => void;
}

const Selector = (props: SelectorProps) => {
  const { clsx, name, value, items, onSelect } = props;

  return (
    <RadioGroup
      value={value}
      onChange={onSelect}
      name={name}
      className={`${styles.root}${clsx ? ' ' + clsx : ''}`}
    >
      {items.map(({ uid, city, code, temp }) => (
        <RadioGroup.Option key={uid} value={uid} as={Fragment}>
          {({ checked }: { checked: boolean }) => (
            <div
              className={
                checked ? `${styles.item} ${styles.__checked}` : styles.item
              }
            >
              <RadioGroup.Label className={styles.label}>
                {city}
              </RadioGroup.Label>
              <RadioGroup.Description className={styles.description}>
                {WEATHER[code]}: {temp}°C
              </RadioGroup.Description>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export { Selector };
