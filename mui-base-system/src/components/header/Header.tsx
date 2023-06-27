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
        position: 'relative',
        zIndex: 20,
        py: 8,
        px: 4,
        bgcolor: theme.vars.palette.base.dark,
        color: theme.vars.palette.contrast.dark,
        borderBottom: `${theme.spacing(2)} solid`,
        borderColor: `rgba(${theme.vars.palette.primary.mainChannel}, 0.5)`
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
