import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { LuMoon, LuSun } from 'react-icons/lu'

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <motion.div whileHover={{ scale: 1.08, rotate: 180 }}>
      <IconButton
        aria-label='Toggle color mode'
        icon={
          colorMode === 'dark' ? (
            <Icon as={LuSun} boxSize={6} color='white' />
          ) : (
            <Icon as={LuMoon} boxSize={6} color='black' />
          )
        }
        onClick={toggleColorMode}
        colorScheme='customSwitchColors'
        size='lg'
        isRound
        bg='transparent'
        _hover={{ bg: 'transparent' }}
      />
    </motion.div>
  )
}

export default SwitchColorMode
