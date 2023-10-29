import React from 'react'
import {
  Heading,
  Stack,
  Text,
  Flex,
  Box,
  Image,
  Divider,
  ButtonGroup,
  Button,
  Link
} from '@chakra-ui/react'

const IMAGE_PATH = '/profile.jpg'

const Hero = () => {
  return (
    <Stack as='section'>
      <Flex alignItems='center'>
        <Box flex='1'>
          <Stack
            spacing={4}
            textAlign={['center', 'center', 'left', 'left', 'left', 'left']}
          >
            <Heading as='h3' fontSize='2em' color='#63372C' mb='-6'>
              Hello I&apos;m Jorge
            </Heading>
            <Heading as='h2' fontSize='2.5em'>
              Self taught web developer
            </Heading>
            <Text>
              Welcome to my corner of the web! Take a look at my work in web
              development – where creativity meets technical know-how!
            </Text>
            <ButtonGroup
              spacing={4}
              justifyContent={[
                'center',
                'center',
                'start',
                'start',
                'start',
                'start'
              ]}
            >
              <Link href='mailto:jorgecontrerasostos@gmail.com'>
                <Button colorScheme='facebook'>email me!</Button>
              </Link>
              <Link
                href='https://www.linkedin.com/in/jorge-contreras-ostos/'
                target='_blank'
              >
                <Button colorScheme='linkedin'>let&apos;s connect!</Button>
              </Link>
            </ButtonGroup>
          </Stack>
        </Box>
        <Box>
          <Image
            as='img'
            boxSize={{ base: '120px', sm: '150px', md: '180px' }}
            src={IMAGE_PATH}
            borderRadius='full'
            alt='Jorge Contreras Ostos'
            display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
          />
        </Box>
      </Flex>
      <Divider my={4} borderColor='gray.300' w='100%' />
    </Stack>
  )
}

export default Hero
