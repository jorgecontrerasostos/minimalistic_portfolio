import { Link } from '@chakra-ui/next-js'
import { Box, ButtonGroup, Flex, HStack, Icon, Spacer } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaTerminal } from 'react-icons/fa'
import SwitchColorMode from '../SwitchColorMode'

const Navbar = () => {
  return (
    <Box w='100%'>
      <Flex
        as='nav'
        minWidth='max-content'
        alignItems='center'
        gap='2'
        justifyContent='space-between'
        py={4}
        px={[4, 2, 0, 0, 0, 0]}
      >
        <Box p='2' display='flex'>
          <Link href='/'>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon as={FaTerminal} boxSize={7} />
            </motion.div>
          </Link>
        </Box>
        <Spacer display={['none', 'none', 'none', 'flex', 'flex', 'flex']} />
        <HStack gap={10}>
          {' '}
          <ButtonGroup gap='10' display='flex'>
            <Link href='https://github.com/jorgecontrerasostos' target='_blank'>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Icon as={FaGithub} boxSize={6} />
              </motion.div>
            </Link>
            <SwitchColorMode />
          </ButtonGroup>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
