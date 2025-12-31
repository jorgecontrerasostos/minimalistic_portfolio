import { Link } from '@chakra-ui/next-js'
import { Box, Link as ChakraLink, Flex, HStack, Icon } from '@chakra-ui/react'
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
        justifyContent={[
          'space-between',
          'space-between',
          'space-between',
          'flex-start'
        ]}
        py={4}
        px={[8, 8, 0, 0, 0, 0]}
      >
        {/* Logo */}
        <Box>
          <Link href='/'>
            <motion.div whileHover={{ scale: 1.08 }}>
              <Icon as={LuTerminal} boxSize={7} />
            </motion.div>
          </Link>
        </Box>

        {/* Mobile Blog Link (centered) */}
        <Box
          display={['block', 'block', 'block', 'none']}
          position='absolute'
          left='50%'
          transform='translateX(-50%)'
        >
          <ChakraLink
            _hover={{ textDecoration: 'none' }}
            href='/blog'
            as={Link}
            letterSpacing='tight'
          >
            blog
          </ChakraLink>
        </Box>

        {/* Desktop Nav Items */}
        <HStack
          spacing={8}
          ml={[0, 0, 0, 'auto']}
          display={['none', 'none', 'none', 'flex']}
        >
          <ChakraLink
            _hover={{ textDecoration: 'none' }}
            href='/blog'
            as={Link}
          >
            blog
          </ChakraLink>

          <Box>
            <SwitchColorMode />
          </Box>
        </HStack>

        {/* Mobile Color Switch */}
        <Box display={['block', 'block', 'block', 'none']}>
          <SwitchColorMode />
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
