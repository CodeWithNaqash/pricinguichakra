import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <Box textAlign={{ base: "left", md: "left", lg: "center" }} pl='10px' bg='#6B46C1' pt={'90px'} pb={'250px'} color='#F7FAFC'>
            <Heading> Simple pricing for your business(Naqash Younas PIAIC99900 KHI:B)</Heading>
            <Text pt={'10px'}>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}

export default Header