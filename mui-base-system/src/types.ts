import type {} from '@mui/material/themeCssVarsAugmentation';
import { SxProps, Theme } from '@mui/material/styles';

export interface ComponentProps {
  clsx?: string;
  sx?: SxProps<Theme>;
}
