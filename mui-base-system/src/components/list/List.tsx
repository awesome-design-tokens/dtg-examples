import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

import MUIButton from '@mui/material/Button';

import MUISelect, { SelectProps as MUISelectProps } from '@mui/base/Select';
import MUIOption from '@mui/base/Option';
import MUIPopper from '@mui/base/Popper';

import { Weather, weather } from '@dtg-examples/common-data';

import { theme } from '../../theme';

import { ComponentProps } from '../../types';

export interface ListProps extends ComponentProps {
  name: string;
  value: string;
  items: Weather[];
  onSelectValue: (v: string) => void;
}

// workaround to hide the trigger element
const ListTrigger = styled(MUIButton)({
  position: 'absolute',
  width: '100%',
  height: 0,
  padding: 0,
  margin: 0,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
  whiteSpace: 'nowrap',
});

// overriding inline styles with !important
const ListDropDown = styled(MUIPopper)({
  // @ts-ignore
  position: 'relative !important',
  transform: 'none !important',
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  flexFlow: 'column',

  // temporary
  flex: '1 1 auto',
});

ListDropDown.defaultProps = {
  disablePortal: true,
};

const ListBox = styled('ul')({
  flex: '1 1 100%',
  display: 'flex',
  flexFlow: 'column',
  justifyItems: 'stretch',
  justifyContent: 'stretch',
  boxSizing: 'border-box',
  width: '100%',
  padding: theme.spacing(4),
  margin: 0,
  backgroundColor: theme.vars.palette.gamma.A300,
});

const ListOption = styled(MUIOption)({
  flex: '1 1 auto',
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  listStyle: 'none',
  background: theme.vars.palette.secondary.main,
  color: theme.vars.palette.secondary.contrastText,

  ['&.Mui-selected']: {
    zIndex: '1',
    background: theme.vars.palette.secondary.contrastText,
    color: theme.vars.palette.secondary.main,
    cursor: 'default',
  },

  ['&.MuiOption-highlighted:not(.Mui-selected)']: {
    background: theme.vars.palette.secondary.light,
    color: theme.vars.palette.secondary.contrastText,
    cursor: 'default',
  },

  [':hover:not(.Mui-selected):not(.MuiOption-highlighted)']: {
    background: theme.vars.palette.secondary.light,
    color: theme.vars.palette.secondary.contrastText,
    cursor: 'pointer',
  },
});

const List = (props: ListProps) => {
  const { clsx, name, value, items, onSelectValue } = props;

  const slots: MUISelectProps<string, false>['slots'] = {
    root: ListTrigger,
    popper: ListDropDown,
    listbox: ListBox,
  };

  return (
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
      listboxOpen
    >
      {items.map(({ uid, city, code, temp }) => (
        <ListOption value={uid} key={uid}>
          <Box typography="h3" sx={{ lineHeight: theme.typography.body1.lineHeight }}>{city}</Box>
          <Box typography="body1">
            {weather[code]}: {temp}°C
          </Box>
        </ListOption>
      ))}
    </MUISelect>
  );
};

export { List };
