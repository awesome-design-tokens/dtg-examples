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
  grow?: boolean;
}

// NOTE: workaround, not sustainable solution for demo purposes only
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

  // NOTE: workaround, not sustainable solution for demo purposes only
  ['.Mui-focusVisible:not([aria-activedescendant]) + .MuiSelect-popper &']: {
    outline: theme.focus.style,
    outlineOffset: theme.focus.offset,
    ['--focus-color']: theme.vars.palette.primary.main,
  },
});

const ListOption = styled(MUIOption)({
  flex: '1 1 auto',
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  listStyle: 'none',
  background: theme.vars.palette.secondary.main,
  color: theme.vars.palette.secondary.contrastText,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.short,
  }),

  ['&.Mui-selected']: {
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

  ['&.MuiOption-highlighted']: {
    zIndex: '1',
    outline: theme.focus.style,
    outlineOffset: theme.focus.offset,
    ['--focus-color']: theme.vars.palette.primary.main,
  },
});

const SelectRoot = styled(MUISelect, {
  shouldForwardProp: (prop) => prop !== 'grow',
})(({ grow }) => ({
  ['~ .MuiSelect-popper']: {
    flex: grow && '1 0 auto',
    display: grow && 'flex',
    flexFlow: grow && 'column',
    justifyContent: grow && 'center',
  },
})) as (
  props: MUISelectProps<string, false> & Pick<ListProps, 'grow'>
) => JSX.Element;

const List = (props: ListProps) => {
  const { name, value, items, onSelectValue, grow } = props;

  const slots: MUISelectProps<string, false>['slots'] = {
    root: ListTrigger,
    popper: ListDropDown,
    listbox: ListBox,
  };

  return (
    <SelectRoot
      grow={grow}
      name={name}
      value={value}
      onChange={(_, value) => {
        onSelectValue(value as string);
      }}
      slots={slots}
      listboxOpen
    >
      {items.map(({ uid, city, code, temp }) => (
        <ListOption value={uid} key={uid}>
          <Box
            typography="h3"
            sx={{ lineHeight: theme.typography.body1.lineHeight }}
          >
            {city}
          </Box>
          <Box typography="body1">
            {weather[code]}: {temp}°C
          </Box>
        </ListOption>
      ))}
    </SelectRoot>
  );
};

export { List };
