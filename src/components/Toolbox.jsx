import { toolboxData } from '@/data/toolboxData'
import {
  Box,
  Center,
  Code,
  Divider,
  Heading,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

const borderRadius = 'lg'
const textColor = 'white'
const padding = 2

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
          {toolboxData.map((e) => {
            return (
              <WrapItem key={e.id}>
                <Code
                  borderRadius={borderRadius}
                  p={padding}
                  color={textColor}
                  bg={e.bg}
                >
                  {e.name}
                </Code>
              </WrapItem>
            )
          })}
        </Wrap>
      </Box>
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default Toolbox
