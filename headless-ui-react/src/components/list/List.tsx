import { Fragment } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Weather, weather } from '@dtg-examples/common-data';

import { ComponentProps } from '../../types';

import styles from './list.module.css';

export interface ListProps extends ComponentProps {
  name: string;
  value: string;
  items: Weather[];
  onSelectValue: (v: string) => void;
}

const List = (props: ListProps) => {
  const { clsx, name, value, items, onSelectValue } = props;

  return (
    <RadioGroup
      value={value}
      onChange={onSelectValue}
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
                {weather[code]}: {temp}°C
              </RadioGroup.Description>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export { List };
