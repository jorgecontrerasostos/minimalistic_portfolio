import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <motion.div whileHover={{ scale: 1.08 }}>
      <IconButton
        aria-label='Toggle color mode'
        icon={
          colorMode === 'dark' ? (
            <SunIcon color='yellow.400' boxSize={6} />
          ) : (
            <MoonIcon color='blue.600' boxSize={6} />
          )
        }
        onClick={toggleColorMode}
        colorScheme='customSwitchColors'
        size='lg'
        isRound
        bg='transparent' // Transparent background
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
        _focus={{ bg: 'transparent' }}
      />
    </motion.div>
  )
}

export default SwitchColorMode
