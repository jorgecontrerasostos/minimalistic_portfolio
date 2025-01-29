import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { motion, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const scale = useSpring(1, { stiffness: 300, damping: 20 })

  useEffect(() => {
    scale.set(1.08)
    const timeout = setTimeout(() => scale.set(1), 300)
    return () => clearTimeout(timeout)
  }, [colorMode, scale])

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
