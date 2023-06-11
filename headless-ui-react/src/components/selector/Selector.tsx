import { RadioGroup } from '@headlessui/react';

import WEATHER, { WeatherCodes } from '../../data/codes';

export interface SelectorProps {
  name: string;
  value: string;
  items: SelectorItemProps[];
  onSelect: (e:any) => void;
}

export interface SelectorItemProps {
  uid: string;
  city: string;
  code: WeatherCodes;
  temp: number;
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
