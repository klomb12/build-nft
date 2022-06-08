
import { Wrap, WrapItem, Center, Text, Button, Image, Stack, Box, _hover, _active } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function Home() {



  return (
    <div>
      <Wrap align='center' justify='right'>
        <WrapItem>
          <NextLink href='/wallet-connect'>
            <Center marginRight={10}>
              <Button colorScheme='pink' size='sm'>
                Connect wallet
              </Button>
            </Center>
          </NextLink>
        </WrapItem>
      </Wrap>

      <Text fontSize={80} textAlign='center' fontFamily='cursive'>
        welcom to rschain marketplace  <span> 😀 </span>
      </Text>
      <Text fontSize={30} textAlign='center' fontFamily='sans-serif'>
        take your opportunity today ,create and sell your NFT

      </Text>
      <Wrap spacing='30px' justify='center' align='center' mt={100} paddingBottom='70px'>

        <WrapItem >
          <NextLink href='/sellnft/ethereumform' >
            <Center w='80px' h='30px'>
              <Button _hover={{
                bg: 'pink.100'
              }}
              >
                Ethereum
              </Button>


            </Center>

          </NextLink >


        </WrapItem>
        <WrapItem >
          <NextLink href='/sellnft/bscform' >
            <Center w='80px' h='30px'>

              <Button _hover={{
                bg: 'pink.100'
              }}>
                BSC
              </Button>
            </Center>

          </NextLink >
        </WrapItem>
        <WrapItem >
          <NextLink href='/sellnft/polygonform' >
            <Center w='80px' h='30px' >

              <Button _hover={{
                bg: 'pink.100'
              }}>
                Polygon
              </Button>
            </Center>

          </NextLink >
        </WrapItem>
      </Wrap>
      <Wrap align='center' justify='center'>


        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box boxSize='sm'>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>


      </Wrap>
    </div >
  )
}
