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
        py: 4,
        px: 2,
        background: theme.vars.palette.primary.main,
        color: theme.vars.palette.primary.contrastText,
      }}
    >
      <h1>Dystopian Weather</h1>
      <div>{children}</div>
    </Box>
  );
};

export { Header };
