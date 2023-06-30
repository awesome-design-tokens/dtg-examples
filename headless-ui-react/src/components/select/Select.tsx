import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';

import styles from './select.module.css';

export interface SelectProps {
  name: string;
  value: string;
  items: string[];
  onSelectValue: (v: string) => void;
}

const Select = (props: SelectProps) => {
  const { name, value, items, onSelectValue } = props;

  return (
    <div className={styles.root}>
      <Listbox value={value} onChange={onSelectValue} name={name}>
        <Listbox.Button className={styles.trigger}>
          Current theme: {value.toLocaleUpperCase()}
        </Listbox.Button>
        <Listbox.Options className={styles.list}>
          {items.map((value) => (
            <Listbox.Option key={value} value={value} as={Fragment}>
              {({
                active,
                selected,
              }: {
                active: boolean;
                selected: boolean;
              }) => (
                <li
                  className={`${styles.item} ${
                    selected ? styles.__selected : active ? styles.__active : ''
                  }`}
                >
                  {value}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export { Select };
