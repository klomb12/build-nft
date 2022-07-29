import Head from 'next/head';
import {
  Flex,
  Stack,
} from '@chakra-ui/react';

import Container from './Container';


export default function Index() {


  return (
    <Container>
      <Head>
        <title>Rschain website </title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
        </Flex>
      </Stack>
    </Container>
  )
}
