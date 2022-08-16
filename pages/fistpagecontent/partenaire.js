import React from 'react'
import {
    Center, Image, Box
} from '@chakra-ui/react'

export default function Partenaire() {
    return (
        <>
            <Center bg='' h='100px' color='black' flexDirection={'row'}>
                <Box m={'3'}>
                    <Image src='Logo.png' alt='' />
                </Box>
                <Box>
                    <Image src='Logo.png' alt='' />
                </Box>
                <Box>
                    <Image src='Logo.png' alt='' />
                </Box>
            </Center>

        </>
    )
}
