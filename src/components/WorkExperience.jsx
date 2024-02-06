import { Link } from '@chakra-ui/next-js'
import { Box, Code, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { jobs } from '../data/jobs'
const WorkExperience = () => {
  return (
    <Box my={8}>
      <Box>
        <Heading
          as='h2'
          fontSize='1.5em'
          textAlign={['center', 'center', 'center', 'left', 'left', 'left']}
          letterSpacing='tight'
          mb={4}
        >
          Work Experience
        </Heading>
      </Box>
      {jobs.map((job) => {
        return (
          <Box key={job.id} py={2}>
            <Flex alignItems='center' gap={2}>
              <Heading as='h2' fontSize='1.2em'>
                {job.title} -
              </Heading>
              <Link href={job.link} target='_blank'>
                <Code
                  colorScheme={job.company === 'Justia' ? 'blue' : 'red'}
                  borderRadius='md'
                  px={2}
                >
                  {job.company}
                </Code>
              </Link>
              <Spacer />
              <Text color='gray.600'>{job.date}</Text>
            </Flex>

            <Text color='gray.700'>{job.description}</Text>
          </Box>
        )
      })}
    </Box>
  )
}

export default WorkExperience
