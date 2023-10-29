import React from 'react'
import {
  Box,
  Text,
  Stack,
  Icon,
  Container,
  Divider,
  Flex
} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from '@chakra-ui/next-js'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <Box as='footer'>
      <Divider mt={4} borderColor='gray.300' w='100%' />
      <Flex as={Stack} py={4} direction='column' align='center' spacing={4}>
        <Text align='center'>
          © 2023 Jorge Contreras. Made with &#x2764; all the way from
          &#x1F1F2;&#x1F1FD;
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Link
            href='https://www.linkedin.com/in/jorge-contreras-ostos/'
            target='_blank'
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon as={FaLinkedin} boxSize={7} color='#0072b1' />
            </motion.div>
          </Link>
          <Link href='https://twitter.com/jorgecontreras' target='_blank'>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon as={FaXTwitter} boxSize={7} />
            </motion.div>
          </Link>
          <Link
            href='https://www.buymeacoffee.com/jorgecontreras'
            target='_blank'
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon as={SiBuymeacoffee} boxSize={7} color='#f9dd4a' />
            </motion.div>
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Footer
