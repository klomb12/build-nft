import '../styles/globals.css'
import Link from 'next/link'
import { ChakraProvider } from '@chakra-ui/react'
//import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider>

      <Component {...pageProps} />

    </ChakraProvider>

  )
}

export default MyApp
