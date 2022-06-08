import '../styles/globals.css'
import Link from 'next/link'
import { ChakraProvider } from '@chakra-ui/react'
//import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider>

      <nav className="border-b p-6">
        <p className="text-4xl font-bold">RSCHAIN NFT MARKETPLACE</p>
        <div className="flex mt-4"></div>
        <Link href="/">
          <a className="mr-4 text-pink-500">Home</a>
        </Link>
        <Link href="/sellnft">
          <a className="mr-6 text-pink-500">Create NFT</a>
        </Link>
        <Link href="/">
          <a className="mr-6 text-pink-500">My NFT</a>
        </Link>
        <Link href="/">
          <a className="mr-6 text-pink-500">Dashboard</a>
        </Link>
      </nav>
      <Component {...pageProps} />

    </ChakraProvider>

  )
}

export default MyApp
