import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#d0d0d0', '#1c1c1c')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 23,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 5
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c', sans-serif"
}

const colors = {
  grassTeal: '#202023',
  viridian: '#40826D',
  jade: '#00A86B',
  tealGreen: '#00827F',
  caribbeanGreen: '#00CC99',
  mountainMeadow: '#30BA8F',
  skyBlue: '#87CEFA',
  powderBlue: '#B0E0E6',
  aliceBlue: '#F0F8FF',
  cornflowerBlue: '#6495ED',
  cadetBlue: '#5F9EA0',
  lightSteelBlue: '#B0C4DE',
  deepBlue: '#001F3F',
  secondaryBlue: '#003366',
  platinum: '#E5E5E5',
  goldCrayola: '#E6B800',
  steelTeal: '#5F8A8B',
  moonstoneBlue: '#73A8AF'
};


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
