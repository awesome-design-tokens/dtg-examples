import { RadioGroup } from '@headlessui/react';

import { WEATHER } from '../../data/globals';
import { Weather } from '../../types';

import styles from './selector.module.css';
import { Fragment } from 'react';

export interface SelectorProps {
  clsx: string;
  name: string;
  value: string;
  items: Weather[];
  onSelect: (e: any) => void;
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
              {city}, {WEATHER[code]}: {temp}°C
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export { Selector };
