import { Box, Heading } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

const BlogPost = ({ source, frontMatter }) => {
  return (
    <Box maxW='800px' mx='auto' px={4} py={8}>
      <Heading mb={4}>{frontMatter.title}</Heading>
      <MDXRemote {...source} />
    </Box>
  )
}

export default BlogPost
