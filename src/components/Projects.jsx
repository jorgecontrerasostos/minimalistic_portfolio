import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs'
import { projects } from '../data/projects'

const Projects = () => {
  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'gray.800' : 'gray.300'

  return (
    <>
      <Box my={8}>
        <Heading
          fontSize='1.5em'
          as='h2'
          mb={-4}
          textAlign={['center', 'center', 'center', 'left', 'left', 'left']}
          letterSpacing='tight'
        >
          Projects
        </Heading>
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} mt={10}>
                  <Link href={project.link} target='_blank'>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Image
                        alt='NASA Photo of the Day Project'
                        objectFit={'cover'}
                        src={project.image}
                        borderRadius='lg'
                        shadow='lg'
                      />
                    </motion.div>
                  </Link>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading
                      fontSize='1.3em'
                      textAlign={[
                        'center',
                        'center',
                        'left',
                        'left',
                        'left',
                        'left'
                      ]}
                      letterSpacing='tight'
                    >
                      <Text>{project.name}</Text>
                    </Heading>

                    <Text fontSize='16px' color={textColor}>
                      {project.description}
                    </Text>
                    <Stack
                      direction={{ base: 'row', md: 'row' }}
                      spacing={4}
                      justifyContent={{ base: 'center', md: 'center' }}
                    >
                      <Link href={project.github} target='_blank'>
                        <motion.div whileHover={{ scale: 1.08 }}>
                          <Icon as={BsGithub} boxSize={7} />
                        </motion.div>
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <motion.div whileHover={{ scale: 1.08 }}>
                          <Icon as={BsArrowUpRightSquare} boxSize={7} />
                        </motion.div>
                      </Link>
                    </Stack>
                  </Stack>
                </Flex>
              </Stack>
            </div>
          )
        })}
        <Box textAlign='center' py={6}>
          <Text as='p' color={textColor}>
            More projects coming soon...
          </Text>
        </Box>
      </Box>
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default Projects
