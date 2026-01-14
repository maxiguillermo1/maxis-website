// perf: self-host fonts to eliminate render-blocking external requests
import { M_PLUS_Rounded_1c } from 'next/font/google'

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['300', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-m-plus-rounded'
})

const Fonts = () => (
  <style jsx global>{`
    :root {
      --font-m-plus-rounded: ${mPlusRounded.style.fontFamily};
    }
  `}</style>
)
export default Fonts
export { mPlusRounded }