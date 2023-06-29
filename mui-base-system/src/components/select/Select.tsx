import Box from '@mui/system/Box';

import MUISelect, { SelectProps as MUISelectProps } from '@mui/base/Select';
import MUIOption from '@mui/base/Option';
import MUIButton from '@mui/material/Button';
import MUIPopper from '@mui/base/Popper';

import styled from '@mui/system/styled';

export interface SelectProps extends MUISelectProps<string, false> {
  name: string;
  value: string;
  items: string[];
  onSelectValue: (v: string) => void;
}

const ListBox = styled('ul')({
  position: 'relative',
});

const ListTrigger = styled(MUIButton)({
  p: 3,
});

ListTrigger.defaultProps = {
  variant: 'contained',
};

const ListOptions = styled(MUIPopper)({
  backgroundColor: 'grey',
  zIndex: 100,
});

const Select = (props: SelectProps) => {
  const { name, value, items, onSelectValue } = props;

  const slots: MUISelectProps<string, false>['slots'] = {
    listbox: ListBox,
    root: ListTrigger,
    popper: ListOptions,
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <MUISelect
        name={name}
        value={value}
        renderValue={() => (
          <span>Current theme: {value.toLocaleUpperCase()}</span>
        )}
        onChange={(_, value) => {
          onSelectValue(value as string);
        }}
        slots={slots}
      >
        {items.map((value) => (
          <MUIOption value={value} key={value}>
            {value}
          </MUIOption>
        ))}

        {/* <Listbox.Button className={styles.trigger}
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
        </Listbox.Options> */}
      </MUISelect>
    </Box>
  );
};

export { Select };
