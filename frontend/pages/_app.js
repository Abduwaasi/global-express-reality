import '../styles/globals.css'
import themes from '../themes/themes'
import {ChakraProvider} from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  console.log(themes)
  return <ChakraProvider theme={themes}>
      <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
