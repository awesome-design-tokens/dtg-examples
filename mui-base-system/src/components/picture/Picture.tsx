import { WeatherCodes, images, weather } from '@dtg-examples/common-data';

import { Box } from '@mui/system';

import { theme } from '../../theme';

export interface PictureProps {
  code: WeatherCodes;
}

const Picture = (props: PictureProps) => {
  const { code } = props;

  return (
    <Box
      component="figure"
      sx={{
        m: 0,
        p: 0,
        bgcolor: theme.vars.palette.base.dark,
        color: theme.vars.palette.contrast.dark,
        lineHeight: 0,
      }}
    >
      <Box
        component="img"
        sx={{ width: '100%', objectFit: 'cover' }}
        src={images[code]}
        alt={`Weather illustration: ${weather[code]}`}
      />
    </Box>
  );
};

export { Picture };