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
    lineHeight: { ...lineHeights },
    fontFamily: { ...fonts },
    extend: {
      padding: { ...space },
      margin: { ...space },
      colors: { ...colors },
      width: { ...space },
      height: { ...space },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
