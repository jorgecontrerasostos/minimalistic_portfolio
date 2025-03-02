import {
  Box,
  Code,
  Heading,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

const components = {
  h1: (props) => <Heading as='h1' size='2xl' my={4} {...props} />,
  h2: (props) => <Heading as='h2' size='xl' my={4} {...props} />,
  h3: (props) => <Heading as='h3' size='lg' my={3} {...props} />,
  p: (props) => <Text my={2} lineHeight='tall' {...props} />,
  ul: (props) => <UnorderedList my={2} {...props} />,
  li: (props) => <ListItem {...props} />,
  code: (props) => (
    <Code
      p={2}
      borderRadius='md'
      bg='gray.50'
      _dark={{ bg: 'gray.800', color: 'white' }}
      colorPalette='green'
      {...props}
    />
  ),
  pre: (props) => (
    <Code
      as='pre'
      p={4}
      borderRadius='md'
      bg='gray.50'
      _dark={{ bg: 'gray.800' }}
      overflowX='auto'
      my={4}
      variant='subtle'
      w='100%'
      {...props}
    />
  )
}

const BlogPost = ({ source, frontMatter }) => {
  return (
    <Box maxW='800px' mx='auto' px={4} py={8}>
      <Heading mb={4}>{frontMatter.title}</Heading>
      <Text color='gray.600' mb={8}>
        {new Date(frontMatter.date).toLocaleDateString()}
      </Text>
      <MDXRemote {...source} components={components} />
    </Box>
  )
}

export default BlogPost
