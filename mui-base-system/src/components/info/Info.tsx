import { WeatherCodes, weather } from '@dtg-examples/common-data';

import Box from '@mui/system/Box';

import { theme } from '../../theme';

export interface InfoProps {
  city: string;
  code: WeatherCodes;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, code, temp } = props;

  return (
    <Box
      component="section"
      sx={{
        zIndex: 10,
        p: 4,
        bgcolor: theme.vars.palette.secondary.main,
        color: theme.vars.palette.secondary.contrastText,
        boxShadow: theme.shadow.small
      }}
    >
      <Box component="h2" sx={{ m: 0, mb: 2, typography: 'h2' }}>
        {city}
      </Box>
      <Box component="h3" sx={{ m: 0, typography: 'h3' }}>
        {weather[code]}: {temp}°C
      </Box>
    </Box>
  );
};

export { Info };
