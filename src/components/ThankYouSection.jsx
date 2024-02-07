import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'

const ThankYouSection = () => {
  const { colorMode } = useColorMode()

  const bgColor = colorMode === 'light' ? '#0a0a0a' : 'white'
  const textColor = colorMode === 'light' ? 'white' : 'black'
  const hoverBgColor = colorMode === 'light' ? 'gray.800' : 'black'

  return (
    <>
      <Center display='column' textAlign='center' my={8}>
        <Heading as='h2' letterSpacing='tight' fontSize='1.5em'>
          Thank you for visiting my website!
        </Heading>
        <Text as='p' fontSize='16px' textColor='gray.700'>
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
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default ThankYouSection
