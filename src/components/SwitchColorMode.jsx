import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { motion, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const scale = useSpring(1, { stiffness: 300, damping: 20 })

  useEffect(() => {
    scale.set(1.08)
    const timeout = setTimeout(() => scale.set(1), 300)
    return () => clearTimeout(timeout)
  }, [colorMode, scale])

  return (
    <motion.div style={{ scale }}>
      <IconButton
        aria-label='Toggle color mode'
        icon={
          colorMode === 'dark' ? (
            <SunIcon color='yellow.400' boxSize={6} />
          ) : (
            <MoonIcon color='gray.900' boxSize={6} />
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
