import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    useColorModeValue,
    Link,
    Center,
    Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader,
    DrawerBody, InputGroup, DrawerFooter, FormLabel, Portal, PopoverArrow, PopoverBody,
    Input, Popover, PopoverTrigger, PopoverHeader, PopoverFooter, PopoverContent, PopoverCloseButton, Checkbox, FormControl, InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import Footer from '../footer';
import { AddIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';


export default function Nftplateform() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    const moovpage = () => {
        router.push('./sellnft/polygonplace')
    }


    return (
        <>
            <Image height={32}
                viewBox="0 0 120 28" src='Logo2.png' alt='Rschain' />
            <Popover>
                <PopoverTrigger>
                    <Text align={'right'}
                        paddingRight={'16'}
                        pb={10}
                        mt={-20}
                    > <Button as={'circle'}
                        rounded={'full'}
                        colorScheme={'gray'}
                        fontFamily='cursive'
                        color={'blackAlpha.800'}
                        fontSize='medium'
                    >
                            Connexion
                        </Button>
                    </Text>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Connectez vous !</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Box> <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </Box>
                            <Box>
                                <FormLabel>Mot de passe</FormLabel>
                                <Input type="password" />
                            </Box>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Se souvenir</Checkbox>
                                <Link color={'blue.500'}>Mot de passe oublié?</Link>
                            </Stack>
                        </PopoverBody>
                        <PopoverFooter>
                            <Button colorScheme={'green'} variant={'solid'} >
                                Connexion
                            </Button>
                        </PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover >

            <Center fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'} >  <Text borderTop={'2px'}>NFT {''}</Text>
                <Text as={'span'} color={'orange.400'}
                    borderBottom={'4px'}
                >
                    Marketplace

                </Text>
            </Center>
            <Text align={'right'}
                paddingRight={'16'}
            >
                <Button
                    _hover={{ bg: "", color: "orange.400" }}
                    rounded={'full'}
                    fontWeight={'bold'}
                    m={'7'}
                    leftIcon={<AddIcon color={'orange.400'}
                    />}
                    onClick={onOpen}
                >
                    Creer NFT
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    initialFocusRef={firstField}
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Creer votre compte
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>Nom</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>prenom</FormLabel>
                                        <Input type="text" />
                                    </FormControl>

                                </Box>
                                <Box>
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Adresse mail </FormLabel>
                                        <Input type="email" />
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl id="password" isRequired>
                                        <FormLabel>Mot de passe</FormLabel>
                                        <InputGroup>
                                            <Input type={showPassword ? 'text' : 'password'} />
                                            <InputRightElement h={'full'}>
                                                <Button
                                                    variant={'ghost'}
                                                    onClick={() =>
                                                        setShowPassword((showPassword) => !showPassword)
                                                    }>
                                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                </Box>

                                <Stack pt={6}>
                                    <Text align={'center'}>
                                        Déjà utilisateur? <Link color={'blue.400'}>Connexion</Link>
                                    </Text>
                                </Stack>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={'10'} onClick={onClose}
                                size="lg"
                            >
                                Retour
                            </Button>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    variant={'solid'}
                                    loadingText="En cours ..."
                                    size="lg"
                                    bg={'green.500'}

                                    borderColor={'green.300'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'green.500',
                                    }}>
                                    Envoyer
                                </Button>
                            </Stack>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                <Button
                    as={'a'} href={'../test'}
                    _hover={{ bg: "gray.100", color: "orange.400" }}
                    rounded={'full'}
                    fontWeight={'bold'}
                    color={'white'}
                    colorScheme={'cyan'}


                >
                    Acheter NFT
                </Button>


            </Text>

            <Container maxW={'7xl'} padding={'-20'}>


                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'orange.400',
                                    zIndex: -1,
                                }}>
                                C est Quoi,
                            </Text>
                            <br />
                            <Text as={'span'} color={'orange.300'} _hover={{ bg: "", color: "orange.400" }}>
                                Non-Fungible Token!
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            NFT are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. Tokenizing these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}>
                            <Button as={'a'}
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'red'}
                                bg={'orange.200'}
                                _hover={{ bg: 'green.400' }}
                                href={'../A_propos'}
                            >
                                Commencer
                            </Button>

                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Blob
                            w={'150%'}
                            h={'150%'}
                            position={'absolute'}
                            top={'-20%'}
                            left={0}
                            zIndex={-1}
                            color={useColorModeValue('red.50', 'red.400')}
                        />
                        <Box
                            position={'relative'}
                            height={'300px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}>
                            <IconButton
                                aria-label={'Play Button'}
                                variant={'ghost'}
                                _hover={{ bg: 'transparent' }}
                                icon={<PlayIcon w={12} h={12} />}
                                size={'lg'}
                                color={'white'}
                                position={'absolute'}
                                left={'50%'}
                                top={'50%'}
                                transform={'translateX(-50%) translateY(-50%)'}
                            />
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    'nft3.jpg'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
                <Stack spacing={'24'} isInline={'true'} justify={'center'}>
                    <Button as={'a'}

                        size={'sm'}
                        borderBottom={'2px'} borderColor={'orange.400'}
                        _hover={{ bg: "", color: "orange.400" }}

                        fontWeight={'bold'}
                        href='../sellnft/ethereumplace  '
                    >
                        Ethereum
                    </Button>
                    <Button as={'a'}
                        size={'sm'}
                        href='../sellnft/polygonplace '
                        borderBottom={'2px'} borderColor={'orange.400'}
                        _hover={{ bg: "", color: "orange.400" }}
                        fontWeight={'bold'}
                    >
                        Polygon
                    </Button>

                    <Button as={'a'}
                        size={'sm'}
                        href='../sellnft/bscplace '
                        borderBottom={'2px'} borderColor={'orange.400'}
                        _hover={{ bg: "", color: "orange.400" }}
                        fontWeight={'bold'}
                    >
                        BSC
                    </Button>
                </Stack>
                <Stack bg={'azure'} h='xs' borderBottom={'1px'} borderColor='ButtonFace'>

                </Stack>


            </Container>

            <Footer />

        </>
    );
}

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
        'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};

