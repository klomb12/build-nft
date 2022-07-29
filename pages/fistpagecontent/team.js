import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    VStack, h3
} from '@chakra-ui/react';

export default function Team() {

    return (
        <>
            <Heading bg={'pink.100'} textAlign='center' margin={'0'} paddingTop={'5'}
                _hover={{ bg: "", color: " white" }}

            >
                TEAM

            </Heading>

            <Center padding={0} bg='pink.100'>

                <SimpleGrid columns={5} spacing={5} alignItems={'baseline'} padding={4}>
                    <Box>
                        <Center py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Box
                                    rounded={'lg'}
                                    mt={-12}
                                    pos={'relative'}
                                    height={'230px'}
                                    _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `apropos2.jpeg`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                    }}
                                    _groupHover={{
                                        _after: {
                                            filter: 'blur(20px)',
                                        },
                                    }}>
                                    <Image
                                        rounded={'lg'}
                                        height={230}
                                        width={282}
                                        objectFit={'cover'}
                                        src={'apropos2.jpeg'}
                                    />
                                </Box>
                                <Stack pt={10} align={'center'}>
                                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                        Developpeur Blockchain
                                    </Text>
                                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                        Josias Sehi
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={800} fontSize={'xl'}>

                                        </Text>
                                        <Text textDecoration={'line-through'} color={'gray.600'}>

                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Box>
                    <Box>
                        <Center py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Box
                                    rounded={'lg'}
                                    mt={-12}
                                    pos={'relative'}
                                    height={'230px'}
                                    _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `apropos2.jpeg`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                    }}
                                    _groupHover={{
                                        _after: {
                                            filter: 'blur(20px)',
                                        },
                                    }}>
                                    <Image
                                        rounded={'lg'}
                                        height={230}
                                        width={282}
                                        objectFit={'cover'}
                                        src={'apropos2.jpeg'}
                                    />
                                </Box>
                                <Stack pt={10} align={'center'}>
                                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                        Blockchain developpeur
                                    </Text>
                                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                        Josias Sehi
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={800} fontSize={'xl'}>

                                        </Text>
                                        <Text textDecoration={'line-through'} color={'gray.600'}>

                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Box>
                    <Box>
                        <Center py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Box
                                    rounded={'lg'}
                                    mt={-12}
                                    pos={'relative'}
                                    height={'230px'}
                                    _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `apropos2.jpeg`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                    }}
                                    _groupHover={{
                                        _after: {
                                            filter: 'blur(20px)',
                                        },
                                    }}>
                                    <Image
                                        rounded={'lg'}
                                        height={230}
                                        width={282}
                                        objectFit={'cover'}
                                        src={'apropos2.jpeg'}
                                    />
                                </Box>
                                <Stack pt={10} align={'center'}>
                                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                        Blockchain developpeur
                                    </Text>
                                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                        Josias Sehi
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={800} fontSize={'xl'}>

                                        </Text>
                                        <Text textDecoration={'line-through'} color={'gray.600'}>

                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Box>
                    <Box>
                        <Center py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Box
                                    rounded={'lg'}
                                    mt={-12}
                                    pos={'relative'}
                                    height={'230px'}
                                    _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `apropos2.jpeg`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                    }}
                                    _groupHover={{
                                        _after: {
                                            filter: 'blur(20px)',
                                        },
                                    }}>
                                    <Image
                                        rounded={'lg'}
                                        height={230}
                                        width={282}
                                        objectFit={'cover'}
                                        src={'apropos2.jpeg'}
                                    />
                                </Box>
                                <Stack pt={10} align={'center'}>
                                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                        Blockchain developpeur
                                    </Text>
                                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                        Josias Sehi
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={800} fontSize={'xl'}>

                                        </Text>
                                        <Text textDecoration={'line-through'} color={'gray.600'}>

                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Box>
                    <Box>
                        <Center py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Box
                                    rounded={'lg'}
                                    mt={-12}
                                    pos={'relative'}
                                    height={'230px'}
                                    _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `apropos2.jpeg`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                    }}
                                    _groupHover={{
                                        _after: {
                                            filter: 'blur(20px)',
                                        },
                                    }}>
                                    <Image
                                        rounded={'lg'}
                                        height={230}
                                        width={282}
                                        objectFit={'cover'}
                                        src={'apropos2.jpeg'}
                                    />
                                </Box>
                                <Stack pt={10} align={'center'}>
                                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                        Blockchain developpeur
                                    </Text>
                                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                        Josias Sehi
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={800} fontSize={'xl'}>

                                        </Text>
                                        <Text textDecoration={'line-through'} color={'gray.600'}>

                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Box>
                </SimpleGrid>
            </Center>
        </>
    )
}