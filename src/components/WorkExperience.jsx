import React from 'react'
import { Box, Heading, Stack, Divider, Text } from '@chakra-ui/react'
import Timeline from './Timeline'

const WorkExperience = () => {
  return (
    <Box>
      <Heading as='h2' fontSize='1.8em'>
        Work Experience
      </Heading>
      <Timeline />
    </Box>
  )
}

export default WorkExperience
