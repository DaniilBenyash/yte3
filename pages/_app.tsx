import '../styles/globals.scss'
import '../styles/glow.scss'
import '../styles/header.scss'
import '../styles/main.scss'
import '../styles/flag.scss'
import '../styles/about.scss'
import '../styles/card_about.scss'
import '../styles/price.scss'
import '../styles/title.scss'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  
  return <Component {...pageProps} />
}

export default App
