import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import hussleShield from './icons/hussleShield'
import moneyBackGurantee from './icons/moneyBackGurantee'
import monthlySubscribtion from './icons/monthlySubscribtion'

const Features = () => {
    return (
        <Box maxW='1000px' m={'auto'} mt='70px' px='50px'>
            <Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
                <HStack spacing={'10px'} mb='20px' mr='20px'>
                    <Icon as={moneyBackGurantee}></Icon>
                    <Text fontWeight={'bold'}>30 days money back Guarantee</Text>
                </HStack>
                <HStack spacing={'10px'} mb='20px' mr='20px'>
                    <Icon as={hussleShield}></Icon>
                    <Text fontWeight={'bold'}>No setup fees
                        100% hassle-free</Text>
                </HStack>
                <HStack spacing={'10px'} mb='20px' mr='20px'>
                    <Icon as={monthlySubscribtion}></Icon>
                    <Text fontWeight={'bold'}>No monthly subscription
                        Pay once and for all</Text>
                </HStack>

            </Flex>
        </Box>
    )
}

export default Features