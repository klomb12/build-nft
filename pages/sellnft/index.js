import React from 'react';
import { Wrap, WrapItem, Center, Text, Button, Box } from '@chakra-ui/react'
import NextLink from 'next/link';

const Index = () => {
    return (
        <div>
            <Text fontSize={80} textAlign='center' fontFamily='cursive'>
                Choose Blockchain
            </Text>
            <Text fontSize={30} textAlign='center' fontFamily='sans-serif'>
                Choose the most suitable blockchain for your needs.

            </Text>
            <Wrap spacing='30px' justify='center' align='center' mt={100} >

                <WrapItem >

                    <Center w='20vh' h='32vh' bg={'blue.50'}>
                        <NextLink href='/create-item/ethereum-item' >
                            <Button bg='whiteAlpha.1' _hover={'blue.50'}>
                                Ethereum
                            </Button>


                        </NextLink>

                    </Center>




                </WrapItem>

                <WrapItem>

                    <NextLink href='/create-item/bsc-item' >
                        <Center w='180px' h='300px' bg='yellow.200'>
                            <Button bg='whiteAlpha.1' _hover={'yellow'}>

                                Binance Smart Chain</Button>

                        </Center>
                    </NextLink>

                </WrapItem>


                <WrapItem>
                    <NextLink href='/create-item/polygon-item' >
                        <Center w='180px' h='300px' bg='purple.200'>
                            <Button bg='whiteAlpha.1' _hover={'purple.200'}>       Polygon</Button>

                        </Center>
                    </NextLink>
                </WrapItem>

            </Wrap>
        </div >
    );
}

export default Index;
