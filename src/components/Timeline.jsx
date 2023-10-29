import React from 'react'
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'

import { jobs } from '../data/jobs'

const Timeline = () => {
  return (
    <>
      <Container maxWidth='4xl' p={{ base: 2, sm: 10 }}>
        {jobs.map((job, index) => (
          <Flex key={index} mb='6px' mt='-4'>
            <LineWithDot />
            <Card {...job} />
          </Flex>
        ))}
      </Container>
    </>
  )
}

const Card = ({ title, description, icon, date, link }) => {
  return (
    <HStack
      my={4}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded='lg'
      alignItems='center'
      pos='relative'
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue(
          '#edf2f6',
          '#1a202c'
        )} transparent`,
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: 'block'
      }}
    >
      <Icon as={icon} w={10} h={10} />
      <Box>
        <VStack spacing={2} mb={3} textAlign='left'>
          <chakra.h1
            as={Link}
            _hover={{ color: 'teal.400' }}
            fontSize='xl'
            lineHeight={1.2}
            fontWeight='bold'
            w='100%'
            href={link}
            target='_blank'
          >
            {title}
          </chakra.h1>
          <Text fontSize='1em' noOfLines={0}>
            {description}
          </Text>
        </VStack>
        <Text fontSize='sm'>{date}</Text>
      </Box>
    </HStack>
  )
}

const LineWithDot = () => {
  return (
    <Flex
      pos='relative'
      alignItems='center'
      mr='40px'
      display={['none', 'none', 'flex']}
    >
      <chakra.span
        position='absolute'
        left='50%'
        height='calc(100% + 10px)'
        border='1px solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top='0px'
      ></chakra.span>
      <Box pos='relative' p='10px'>
        <Box
          pos='absolute'
          width='100%'
          height='100%'
          bottom='0'
          right='0'
          top='0'
          left='0'
          backgroundSize='cover'
          backgroundRepeat='no-repeat'
          backgroundPosition='center center'
          backgroundColor='rgb(255, 255, 255)'
          borderRadius='100px'
          border='3px solid rgb(51, 101, 138)'
          backgroundImage='none'
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  )
}

export default Timeline
