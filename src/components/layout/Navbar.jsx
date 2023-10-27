import React from 'react'
import SwitchColorMode from '../SwitchColorMode'
import {
  Box,
  Flex,
  Link,
  Icon,
  Spacer,
  HStack,
  ButtonGroup
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaTerminal } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Box w='100%'>
      <Flex
        as='nav'
        minWidth='max-content'
        alignItems='center'
        gap='2'
        justifyContent='space-between'
      >
        <Box p='2' display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}>
          <Link href='/'>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon as={FaTerminal} boxSize={8} />
            </motion.div>
          </Link>
        </Box>
        <Spacer />
        <HStack gap={10}>
          {' '}
          <ButtonGroup
            gap='4'
            display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
          >
            <Link href='https://github.com/jorgecontrerasostos' target='_blank'>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Icon as={FaGithub} boxSize={8} />
              </motion.div>
            </Link>
          </ButtonGroup>
          <SwitchColorMode />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
