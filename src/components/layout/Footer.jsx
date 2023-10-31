import React from 'react'
import { Box, Text, Stack, Icon, Spacer, Divider, Flex } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from '@chakra-ui/next-js'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <Box as='footer'>
      <Divider borderColor='gray.300' w='100%' />
      <Flex
        as={Stack}
        py={4}
        direction={['column', 'column', 'row', 'row', 'row', 'row']}
        align='center'
        spacing={4}
      >
        <Text align='center'>
          © 2023 Jorge Contreras. Made with ❤️ all the way from
          &#x1F1F2;&#x1F1FD;.
        </Text>
        <Spacer />
        <Stack direction={'row'} spacing={6} mt={{ base: -4, md: 0 }}>
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
        </Stack>
      </Flex>
    </Box>
  )
}

export default Footer
