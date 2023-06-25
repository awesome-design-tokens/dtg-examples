import { ReactElement } from 'react';

import { Box } from '@mui/system';

import { ComponentProps } from '../../types';
import { theme } from '../../theme';

export interface HeaderProps extends ComponentProps {
  children?: ReactElement;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <Box
      component="header"
      sx={{
        py: 8,
        px: 4,
        background: theme.vars.palette.base.dark,
        color: theme.vars.palette.contrast.dark,
      }}
    >
      <Box component="h1" sx={{ m: 0 }}>
        Dystopian Weather
      </Box>
      <div>{children}</div>
    </Box>
  );
};

export { Header };
