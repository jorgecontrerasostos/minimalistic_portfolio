import {
  Box,
  ButtonGroup,
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
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'

const IMAGE_PATH = '/anime_profile_600.png'

const Hero = () => {
  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'gray.800' : 'gray.300'
  const iconColor = colorMode === 'light' ? 'gray.800' : 'gray.300'
  return (
    <>
      <Stack as='section' mb={6}>
        <Flex alignItems='center' direction={['column', 'column', 'row']}>
          <Box flex='1'>
            <Stack
              spacing={4}
              textAlign={['center', 'center', 'left', 'left', 'left', 'left']}
            >
              <Heading as='h3' fontSize='1.5em' letterSpacing='tight' mb={-2}>
                Jorge Contreras
              </Heading>
              <Text pr={4} color={textColor} as='p'>
                hi! i&apos;m jorge data analyst in progress with a passion for
                data, machine learning and baseball.
              </Text>
              <Text pr={4} color={textColor} as='p'>
                when i&apos;m not working, you can find me watching the Boston
                Red Sox.
              </Text>
              <Center>
                <ButtonGroup
                  as='div'
                  spacing={4}
                  justifyContent={[
                    'center',
                    'center',
                    'start',
                    'start',
                    'start',
                    'start'
                  ]}
                  pt={2}
                >
                  <Link
                    href='https://github.com/jorgecontrerasostos'
                    target='_blank'
                  >
                    <motion.div whileHover={{ scale: 1.08 }}>
                      <Icon as={LuGithub} boxSize={6} color={iconColor} />
                    </motion.div>
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/jorge-contreras-ostos/'
                    target='_blank'
                    textDecor='none'
                  >
                    <motion.div whileHover={{ scale: 1.08 }}>
                      <Icon as={LuLinkedin} boxSize={7} color={iconColor} />
                    </motion.div>
                  </Link>
                  <Link
                    href='mailto:jorgecontrerasostos@gmail.com'
                    textDecor='none'
                  >
                    <motion.div whileHover={{ scale: 1.08 }}>
                      <Icon as={LuMail} boxSize={7} color={iconColor} />
                    </motion.div>
                  </Link>
                </ButtonGroup>
              </Center>
            </Stack>
          </Box>
          <Box display={['flex', 'flex', 'flex']} mt={6} order={[1, 1, 0]}>
            <Image
              as='img'
              boxSize={['120px', '140px', '160px', '180px', '180px']}
              src={IMAGE_PATH}
              borderRadius='full'
              alt='Jorge Contreras Ostos'
              display='flex'
            />
          </Box>
        </Flex>
      </Stack>
      <Center>
        <Divider borderColor='gray.300' w='10%' />
      </Center>
    </>
  )
}

export default Hero
