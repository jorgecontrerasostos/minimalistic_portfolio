import { toolboxData } from '@/data/toolboxData'
import { Box, Grid, GridItem, Heading, VStack } from '@chakra-ui/react'

const Toolbox = () => {
  return (
    <Box mt={[-2, -2, -2, -4, -4, -4]}>
      <Heading
        as='h2'
        fontSize='1.8em'
        textAlign={['center', 'center', 'center', 'left', 'left', 'left']}
        letterSpacing='tight'
      >
        My Toolbox
      </Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} py={4}>
        {toolboxData.map((item) => {
          return (
            <GridItem key={item.id} borderRadius='xl'>
              <VStack alignItems='center' justify='center'>
                {item.icon}
              </VStack>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Toolbox
