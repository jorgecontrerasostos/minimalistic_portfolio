import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'

import { education } from '../data/education'

const Education = () => {
  return (
    <>
      <Stack my={8}>
        <Box>
          <Heading
            as='h2'
            fontSize='1.5em'
            textAlign={['center', 'center', 'left', 'left', 'left', 'left']}
            letterSpacing='tight'
            mb={2}
          >
            Education
          </Heading>
        </Box>
        {education.map((e) => {
          return (
            <Stack key={e.id} py={2} direction='column'>
              <Flex
                alignItems='flex-start'
                gap={2}
                direction={['column', 'column', 'row', 'row', 'row', 'row']}
                px={[2, 2, 0]}
              >
                <Heading as='h2' fontSize='1.2em'>
                  {e.school}
                </Heading>
                <Spacer />
                <Text color='gray.600' mt={[-4, -4, -2, 0, 0, 0]}>
                  {e.date}
                </Text>
              </Flex>
              <Box px={[2, 2, 0]}>
                {' '}
                <Text as='p'>
                  {e.degree} - {e.fieldOfStudy}
                </Text>
                <Text as='p' color='gray.600'>
                  {e.status}
                </Text>
              </Box>
            </Stack>
          )
        })}
      </Stack>
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default Education
