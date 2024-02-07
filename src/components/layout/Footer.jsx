import { Box, Center, Text, useColorMode } from '@chakra-ui/react'

const Footer = () => {
  const { colorMode } = useColorMode()

  const textColor = colorMode === 'light' ? 'gray.800' : 'gray.300'

  return (
    <Box as='footer'>
      <Center my={8}>
        <Text align='center' color={textColor} textAlign='center'>
          © {new Date().getFullYear()} Jorge Contreras &#x1F1F2;&#x1F1FD;.
        </Text>
      </Center>
    </Box>
  )
}

export default Footer
