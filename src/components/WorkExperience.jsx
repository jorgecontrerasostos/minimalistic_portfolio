import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Center,
  Code,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { jobs } from '../data/jobs'
const WorkExperience = () => {
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
            Work Experience
          </Heading>
        </Box>
        {jobs.map((job) => {
          return (
            <Stack key={job.id} py={2} direction='column'>
              <Flex
                alignItems='flex-start'
                gap={2}
                direction={['column', 'column', 'row', 'row', 'row', 'row']}
                px={[2, 2, 0]}
              >
                <Flex gap={4}>
                  <Heading as='h2' fontSize='1.2em'>
                    {job.title}
                  </Heading>
                  <Link href={job.link} target='_blank' alignItems='flex-end'>
                    <Code
                      colorScheme={job.company === 'Justia' ? 'blue' : 'red'}
                      borderRadius='md'
                      px={2}
                    >
                      {job.company}
                    </Code>
                  </Link>
                </Flex>
                <Spacer />
                <Text color='gray.600' mt={[-4, -4, -2, 0, 0, 0]}>
                  {job.date}
                </Text>
              </Flex>

              <Text color='gray.700' px={[2, 2, 0]}>
                {job.description}
              </Text>
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

export default WorkExperience
