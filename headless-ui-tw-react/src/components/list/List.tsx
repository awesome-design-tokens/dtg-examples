import { Fragment } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Weather, weather } from '@dtg-examples/common-data';

import { ComponentProps } from '../../types';

export interface ListProps extends ComponentProps {
  name: string;
  value: string;
  items: Weather[];
  onSelectValue: (e: any) => void;
}

const List = (props: ListProps) => {
  const { clsx, name, value, items, onSelectValue } = props;

  return (
    <RadioGroup
      value={value}
      onChange={onSelectValue}
      name={name}
      className={`p-4 flex flex-col justify-items-stretch justify-stretch bg-gamma-300 ${
        clsx ? ' ' + clsx : ''
      }`}
    >
      {items.map(({ uid, city, code, temp }) => (
        <RadioGroup.Option key={uid} value={uid} as={Fragment}>
          {({ checked }: { checked: boolean }) => (
            <div
              className={`group py-3 px-4 flex-auto focus-visible:outline-primary ${
                checked
                  ? 'bg-secondary-contrast text-secondary cursor-default z-10'
                  : 'bg-secondary text-secondary-contrast cursor-pointer hover:bg-secondary-tint'
              }`}
            >
              <RadioGroup.Label
                className={`block text-lg font-bold ${
                  !checked && 'group-hover:cursor-pointer'
                }`}
              >
                {city}
              </RadioGroup.Label>
              <RadioGroup.Description className="m-0 text-base">
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
