import '../styles/globals.css'
import themes from '../themes/themes'
import {ChakraProvider} from "@chakra-ui/react"
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  console.log(themes)
  return <ChakraProvider theme={themes}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default MyApp
