import { RadioGroup } from '@headlessui/react';

export interface SelectorProps {
  name: string;
  items: SelectorItemProps[];
  onSelect: (e:any) => void;
}

export interface SelectorItemProps {
  uid: string;
  value: string;
  dataPrimary: string;
  dataSecondary?: string;
}

const Selector = (props: SelectorProps) => {
  const { name, items, onSelect } = props;

  return (
    <RadioGroup value={'1'} onChange={onSelect} name={name}>
      {items.map(({ uid, value, dataPrimary, dataSecondary }) => (
        <RadioGroup.Option key={uid} value={value}>
          {dataPrimary}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export { Selector };
