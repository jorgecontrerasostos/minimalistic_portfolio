import {
  Box,
  Center,
  Code,
  Divider,
  Heading,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

const Toolbox = () => {
  return (
    <>
      <Box my={8}>
        <Heading
          as='h2'
          fontSize='1.5em'
          textAlign={['center', 'center', 'center', 'left', 'left', 'left']}
          letterSpacing='tight'
          mb={4}
        >
          My Toolbox & Soft Skills
        </Heading>
        <Wrap
          py={4}
          justify={[
            'center',
            'center',
            'center',
            'flex-start',
            'flex-start',
            'flex-start'
          ]}
        >
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#f7df1e' color='white'>
              javascript
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#2b5b84' color='white'>
              python
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#e97b00' color='white'>
              sql
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#7fdbca' color='white'>
              chakra-ui
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='black' color='white'>
              next-js
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#0987a0' color='white'>
              assertive communication
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#553c9a' color='white'>
              analytical thinking
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#9b2c2c' color='white'>
              time management
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#9c4221' color='white'>
              collaboration
            </Code>
          </WrapItem>
          <WrapItem>
            <Code p={2} borderRadius='lg' bg='#97266d' color='white'>
              adaptability
            </Code>
          </WrapItem>
        </Wrap>
      </Box>
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default Toolbox
