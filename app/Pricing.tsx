import { Flex, Heading, Text, Box, Button, HStack, Icon, Stack, } from '@chakra-ui/react'
import React from 'react'
import CheckIcon from './icons/CheckIcon'


const Pricing = () => {
    return (
        <Box mx={{ base: '20px', md: '20px', lg: 'auto' }} maxW='960px' mt={"-180px"} borderRadius='17px' overflow={"hidden"} boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
            <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
                {/* Left Box */}
                <Box bg={'#F0EAFB'} textAlign='center' p='40px'>
                    <Text fontSize='24px' fontWeight={'bold'}>Premium PRO</Text>
                    <Heading fontWeight={'bold'} color={'#171923'} fontSize='70px'>$329</Heading>
                    <Text>billed just once</Text>
                    <Button mt={'20px'} w={'300px'} fontWeight='16px' width='282px' height='51px' colorScheme={'purple'}>Get Started</Button>
                </Box>
                {/* right Box */}
                <Box p='40px' fontWeight='18px' bg={"white"} >
                    <Text textAlign='left' mb={'20px'}>Access these features when you get this pricing package for your business.</Text>

                    <HStack mb={'20px'}>
                        <Icon as={CheckIcon}></Icon>
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb={'20px'}>
                        <Icon as={CheckIcon}></Icon>
                        <Text>Additional phone numbers</Text>
                    </HStack>

                    <HStack mb={'20px'}>
                        <Icon as={CheckIcon}></Icon>
                        <Text>Automated messages via Zapier</Text>
                    </HStack>

                    <HStack mb={'20px'}>
                        <Icon as={CheckIcon}></Icon>
                        <Text>24/7 support and consulting</Text>
                    </HStack>

                </Box>
            </Flex>

        </Box>
    )
}

export default Pricing