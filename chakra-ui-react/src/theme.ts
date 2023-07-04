
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({ 
  colors: {
    primary: {
      default: 'var(--awsm-color-primary)',
      tint: 'var(--awsm-color-primary-tint)',
      shade: 'var(--awsm-color-primary-shade)',
      tone: 'var(--awsm-color-primary-tone)',
      contrast: 'var(--awsm-color-primary-contrast)'
    }
  }
 })

export { theme };
