import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

import MUIButton from '@mui/material/Button';

import MUISelect, { SelectProps as MUISelectProps } from '@mui/base/Select';
import MUIOption from '@mui/base/Option';
import MUIPopper from '@mui/base/Popper';

import { theme } from '../../theme';

export interface SelectProps extends MUISelectProps<string, false> {
  name: string;
  value: string;
  items: string[];
  onSelectValue: (v: string) => void;
}

const ListTrigger = styled(MUIButton)({
  padding: theme.spacing(3),
  height: `calc(${theme.typography.button.fontSize} + 2 * ${theme.spacing(3)})`,
  borderRadius: 0,
  border: `${theme.spacing(0.5)} solid`,
  borderColor: theme.vars.palette.primary.main,
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.shortest,
  }),

  [':focus-visible']: {
    outline: theme.focus.style,
    outlineOffset: theme.focus.offset,
  }
});

ListTrigger.defaultProps = {
  variant: 'contained',
};

const ListDropDown = styled(MUIPopper)({
  zIndex: 100,
  boxSizing: 'border-box',
  width: '100%',
  maxHeight: '60vh',
  backgroundColor: theme.vars.palette.primary.contrastText,
  color: theme.vars.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
  overflowY: 'auto',
  boxShadow: theme.shadow.medium,
});

ListDropDown.defaultProps = {
  disablePortal: true,
};

const ListBox = styled('ul')({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  padding: theme.spacing(1),
  margin: 0,
});

const ListOption = styled(MUIOption)({
  padding: theme.spacing(2),
  listStyle: 'none',
  userSelect: 'none',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.shortest,
  }),

  ['&.Mui-selected']: {
    background: theme.vars.palette.primary.dark,
    color: theme.vars.palette.primary.contrastText,
    cursor: 'default',
  },

  ['&.MuiOption-highlighted:not(.Mui-selected)']: {
    background: theme.vars.palette.primary.light,
    color: theme.vars.palette.primary.contrastText,
    cursor: 'default',
  },

  [':hover:not(.Mui-selected):not(.MuiOption-highlighted)']: {
    background: theme.vars.palette.primary.light,
    color: theme.vars.palette.primary.contrastText,
    cursor: 'pointer',
  },

  ['&.MuiOption-highlighted']: {
    outline: theme.focus.style,
    outlineOffset: theme.focus.offset,
  }
});

const Select = (props: SelectProps) => {
  const { name, value, items, onSelectValue } = props;

  const slots: MUISelectProps<string, false>['slots'] = {
    root: ListTrigger,
    popper: ListDropDown,
    listbox: ListBox,
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
          <ListOption value={value} key={value}>
            {value}
          </ListOption>
        ))}
      </MUISelect>
    </Box>
  );
};

export { Select };
