import { Link } from '@chakra-ui/next-js'
import {
  Box,
  ButtonGroup,
  Link as ChakraLink,
  Flex,
  HStack,
  Icon,
  Spacer
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { LuTerminal } from 'react-icons/lu'

import SwitchColorMode from '../SwitchColorMode'

const Navbar = () => {
  return (
    <Box w='100%'>
      <Flex
        as='nav'
        w='100%'
        alignItems='center'
        gap='2'
        justifyContent='space-between'
        py={4}
        px={[8, 8, 0, 0, 0, 0]}
      >
        <Box p='2' display='flex'>
          <Link href='/'>
            <motion.div whileHover={{ scale: 1.08 }}>
              <Icon as={LuTerminal} boxSize={7} />
            </motion.div>
          </Link>
        </Box>
        <Spacer display={['none', 'none', 'none', 'flex', 'flex', 'flex']} />
        <HStack gap={10}>
          {' '}
          <ButtonGroup
            gap='10'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <ChakraLink _hover={{ textDecoration: 'none' }} href='/blog'>
              blog
            </ChakraLink>
            <SwitchColorMode />
          </ButtonGroup>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
