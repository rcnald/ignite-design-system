import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,ts*}'],
  theme: {
    colors: { ...colors },
    borderRadius: { ...radii },
    fontSize: { ...fontSizes },
    fontWeight: { ...fontWeights },
    padding: { ...space },
    margin: { ...space },
    width: { ...space },
    height: { ...space },
    lineHeight: { ...lineHeights },
    fontFamily: { ...fonts },
  },
  plugins: [],
}

export default config
