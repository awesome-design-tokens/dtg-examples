import { KeyboardEvent, useState } from 'react';

import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

import Button from '@mui/material/Button';
import MUIInput from '@mui/material/TextField';

import { theme } from '../../theme';

import { ComponentProps } from '../../types';

export interface ReportProps extends ComponentProps {
  status: string;
  onReport: (data: string) => void;
}

const Input = styled(MUIInput)({
  '& .MuiInputBase-input': {
    boxSizing: 'border-box',
    padding: theme.spacing(3),
    height: `calc(${theme.typography.button.fontSize} + 2 * ${theme.spacing(
      3
    )})`,
    border: `${theme.spacing(0.5)} solid`,
    borderColor: theme.vars.palette.gamma.A400,
    color: theme.vars.palette.gamma.A150,
  },

  '& .MuiInputBase-root': {
    backgroundColor: theme.vars.palette.gamma['850'],
    borderRadius: 0,
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.shortest,
    }),
  },

  '&:hover .MuiInputBase-root': {
    backgroundColor: theme.vars.palette.gamma['850'],
  },

  '.MuiInputBase-root.Mui-focused': {
    backgroundColor: theme.vars.palette.gamma['900'],
  },
});

const Report = (props: ReportProps) => {
  const { clsx, status, onReport } = props;

  const [value, setValue] = useState<string>('');

  const handleClick = () => {
    onReport(value);
    setValue('');
  };

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();

      onReport(value);
      setValue('');
    }
  };

  return (
    <Box
      component="section"
      sx={[
        {
          p: 4,
          bgcolor: theme.vars.palette.base.dark,
          color: theme.vars.palette.text.regular,
        },
        ...(Array.isArray(clsx) ? clsx : [clsx]),
      ]}
    >
      <Box
        component="h2"
        typography="h2"
        sx={{ m: 0, mb: 2, color: theme.vars.palette.text.strong }}
      >
        Anomaly Status
      </Box>
      <Box component="h3" typography="h3" sx={{ m: 0 }}>
        {status}
      </Box>

      <Box
        component="fieldset"
        sx={{
          m: 0,
          mt: 4,
          p: 4,
          bgcolor: theme.vars.palette.gamma.A300,
          border: `${theme.spacing(0.5)} solid`,
          borderColor: `rgba(${theme.vars.palette.primary.mainChannel}, 0.5)`,
        }}
      >
        <div>
          <Input
            type="text"
            variant="filled"
            value={value}
            placeholder="Describe situation"
            fullWidth
            onChange={(e) => setValue(e.target.value.trim())}
          />
        </div>
        <div>
          <Button
            variant="contained"
            fullWidth
            sx={{
              p: 3,
              mt: 4,
              height: `calc(${
                theme.typography.button.fontSize
              } + 2 * ${theme.spacing(3)})`,
              border: `${theme.spacing(0.5)} solid`,
              borderColor: theme.vars.palette.primary.main,
              borderRadius: 0,
              whiteSpace: 'nowrap',
              transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.shortest,
              }),
            }}
            onClick={handleClick}
            onKeyUp={handleKey}
          >
            Report Anomaly
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export { Report };
