import React from 'react'
import {
  ButtonGroup,
  Center,
  Heading,
  Text,
  Button,
  Divider,
  Link,
  Flex,
  Stack
} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const ThankYouSection = () => {
  const { colorMode } = useColorMode()

  const bgColor = colorMode === 'light' ? '#0a0a0a' : 'white'
  const textColor = colorMode === 'light' ? 'white' : 'black'
  const hoverBgColor = colorMode === 'light' ? 'gray.800' : 'black'

  return (
    <>
      <Divider mt={10} borderColor='gray.300' w='100%' />
      <Center display='column' textAlign='center' py={16}>
        <Heading as='h2' letterSpacing='tight'>
          Thank you for visiting my website!
        </Heading>
        <Text as='p'>
          You can follow me on my social media below or you can buy me a coffee
          😉. See ya!👋
        </Text>
        <Flex align='center' justify='center'>
          <Stack
            spacing={4}
            direction={{ base: 'column', md: 'row' }}
            py={6}
            mb={-4}
          >
            <Link
              href='https://www.tiktok.com/@jorgecontrerasostos/'
              target='_blank'
            >
              <Button
                bg={bgColor}
                color={textColor}
                minW='150px'
                _hover={hoverBgColor}
              >
                TikTok
              </Button>
            </Link>

            <Link
              href='https://www.instagram.com/jorgecontrerasostos/'
              target='_blank'
            >
              <Button
                minW='150px'
                bgColor='#e1306c'
                color='white'
                _hover={{ bgColor: '#cc295f' }}
              >
                Instagram
              </Button>
            </Link>
            <Link
              href='https://www.buymeacoffee.com/jorgecontreras'
              target='_blank'
            >
              <Button
                minW='150px'
                bgColor='#e8cd41'
                color='white'
                _hover={{ bgColor: '#dbcb3b' }}
              >
                Buy me a coffee
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Center>
    </>
  )
}

export default ThankYouSection
