import { Box, Center, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as='footer'>
      <Center my={8}>
        <Text align='center' color='gray.700' textAlign='center'>
          © {new Date().getFullYear()} Jorge Contreras &#x1F1F2;&#x1F1FD;.
        </Text>
      </Center>
    </Box>
  )
}

export default Footer
