import { RadioGroup } from '@headlessui/react';

import { WEATHER } from '../../data/globals';
import { Weather } from '../../types';

export interface SelectorProps {
  name: string;
  value: string;
  items: Weather[];
  onSelect: (e:any) => void;
}

const Selector = (props: SelectorProps) => {
  const { name, value, items, onSelect } = props;

  return (
    <RadioGroup value={value} onChange={onSelect} name={name}>
      {items.map(({ uid, city, code, temp }) => (
        <RadioGroup.Option key={uid} value={uid}>
          {city}, {WEATHER[code]}: {temp}°C
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export { Selector };
