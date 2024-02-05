import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text
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
            <Heading as='h3' fontSize='2em' letterSpacing='tight' mb={-2}>
              Hello, I&apos;m Jorge
            </Heading>

            <Text pr={4}>
              Self thaught web developer and currently pursuing a master degree
              in Data Science. Baseball enthusiast and beer lover.
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
              <Link
                href='mailto:jorgecontrerasostos@gmail.com'
                textDecor='none'
              >
                <Button
                  bgColor='#EA526F'
                  color='#F7F7FF'
                  _hover={{ bgColor: '#b52d46' }}
                >
                  email me!
                </Button>
              </Link>
              <Link
                href='https://www.linkedin.com/in/jorge-contreras-ostos/'
                target='_blank'
                textDecor='none'
              >
                <Button
                  color='white'
                  bgColor='#279AF1'
                  _hover={{ bgColor: '#1d79bf' }}
                >
                  let&apos;s connect!
                </Button>
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
