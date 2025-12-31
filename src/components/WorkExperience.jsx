import { Link } from '@chakra-ui/next-js'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Code,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { jobs } from '../data/jobs'
const WorkExperience = () => {
  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'gray.800' : 'gray.300'
  const dateColor = colorMode === 'light' ? 'gray.600' : 'gray.400'
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
        <Accordion allowMultiple>
          {jobs.map((job) => {
            return (
              <AccordionItem key={job.id} border='none'>
                <AccordionButton
                  px={[2, 2, 0]}
                  py={4}
                  _hover={{ bg: 'none' }}
                  borderRadius='md'
                >
                  <Flex
                    alignItems='flex-start'
                    gap={2}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    width='100%'
                  >
                    <Flex gap={4} alignItems='center'>
                      <Text as='p' fontSize='lg' textAlign='left' letterSpacing='tight'>
                        {job.title}
                      </Text>
                      <Link
                        href={job.link}
                        target='_blank'
                        alignItems='flex-end'
                        letterSpacing='tight'
                      >
                        <Code
                          colorScheme={
                            job.company === 'Justia' ? 'blue' : 'red'
                          }
                          borderRadius='md'
                          px={2}
                        >
                          {job.company}
                        </Code>
                      </Link>
                    </Flex>
                    <Spacer />
                    <Flex alignItems='center' gap={2}>
                      <Text as='p' fontSize='sm' color={dateColor} letterSpacing='tight'>
                        {job.date}
                      </Text>
                      <AccordionIcon />
                    </Flex>
                  </Flex>
                </AccordionButton>
                <AccordionPanel px={[2, 2, 0]} pb={4}>
                  <Text color={textColor} lineHeight='1.6' letterSpacing='tight'>
                    {job.description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Stack>
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default WorkExperience
