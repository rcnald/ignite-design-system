import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui-rcnald/tokens'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,ts*}'],
  theme: {
    borderRadius: { ...radii },
    fontSize: { ...fontSizes },
    fontWeight: { ...fontWeights },
    padding: { ...space },
    margin: { ...space },
    lineHeight: { ...lineHeights },
    fontFamily: { ...fonts },
    extend: {
      colors: { ...colors },
      width: { ...space },
      height: { ...space },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
