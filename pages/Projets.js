import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Box,
    SimpleGrid
} from '@chakra-ui/react';
import Footer from './footer';
import Nav from './Nav';


export default function Projet() {
    return (
        <>
            <Nav />
            <Container maxW={'5xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Decouvrez nos  {' '}
                        <Text as={'span'} color={'orange.400'}>
                            projets réalisées
                        </Text>
                    </Heading>

                    <Text color={'gray.500'} maxW={'xl'}>
                        Never miss a meeting. Never be late for one too. Keep track of your
                        meetings and receive smart reminders in appropriate times. Read your
                        smart “Daily Agenda” every morning.
                    </Text>

                    <Stack>
                    </Stack>
                </Stack>

            </Container>

            <SimpleGrid columns={4} spacing={10}>
                <Box bg='blue.100' height='auto'>
                    <Image src='projet1.jpg'
                        boxSize='full' />
                </Box>
                <Box bg='tomato' height='auto'>
                    <Image src='projet2.jpg'
                        boxSize='full' />
                </Box>
                <Box bg='tomato' height='auto'>
                    <Image src='projet3.jpg'
                        boxSize='full' />
                </Box>
                <Box bg='tomato' height='auto'>
                    <Image src='projet1.jpg'
                        boxSize='full' />
                </Box>

            </SimpleGrid>
            <SimpleGrid columns={4} spacing={10}>

                <Box bg='blue.100' height='auto'>
                    <Image src='projet1.jpg'
                        boxSize='full' />
                </Box>
                <Box bg='tomato' height='auto'>
                    <Image src='projet2.jpg'
                        boxSize='full' />
                </Box>
                <Box bg='tomato' height='auto'>
                    <Image src='projet3.jpg'
                        boxSize='full' />
                </Box>
                <Box bg='tomato' height='auto'>
                    <Image src='projet1.jpg'
                        boxSize='full' />
                </Box>
            </SimpleGrid>

            <Footer />
        </>
    );
}

