import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';

export interface SelectProps {
  name: string;
  value: string;
  items: string[];
  onSelect: (v: string) => void;
}

const Select = (props: SelectProps) => {
  const { name, value, items, onSelect } = props;

  return (
    <div className="relative">
      <Listbox value={value} onChange={onSelect} name={name}>
        <Listbox.Button className="block w-full box-border p-3 h-form-base border-2 border-primary bg-primary hover:bg-primary-tint active:bg-primary-tone text-primary-contrast text-base leading-reset whitespace-nowrap uppercase cursor-pointer transition duration-instant">
          Current theme: {value.toLocaleUpperCase()}
        </Listbox.Button>
        <Listbox.Options className="absolute box-border w-full max-h-screen-60 p-1 mt-2 bg-primary-contrast text-primary text-base overflow-y-auto shadow-md">
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
                  className={`p-2 ${
                    selected
                      ? 'cursor-default bg-primary-shade text-primary-contrast'
                      : active
                      ? 'bg-primary-tint text-primary-contrast'
                      : 'cursor-pointer hover:bg-primary-tint text-primary hover:text-primary-contrast'
                  }
                  `}
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
