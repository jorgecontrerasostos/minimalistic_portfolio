import {
  Box,
  Link as ChakraLink,
  Divider,
  Grid,
  Heading,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getSortedPostsData } from '../../utils/mdx'

// Add the slugify function
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      posts: allPostsData
    }
  }
}

const Blog = ({ posts }) => {
  // Get the latest post
  const latestPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <Box maxW='1200px' mx='auto' px={4} py={8}>
      <Heading mb={8}>Blog Posts</Heading>

      {/* Latest Post - Bigger Size */}
      <Box mb={4}>
        <ChakraLink
          as={Link}
          href={`/blog/${slugify(latestPost.title)}`}
          _hover={{ textDecoration: 'none' }}
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <Box>
              <Box p={6}>
                <Heading size='lg' mb={3}>
                  {latestPost.title}
                </Heading>
                <Text color='gray.600' fontSize='sm' mb={2}>
                  {new Date(latestPost.date).toLocaleDateString()}
                </Text>
                <Text fontSize='md' mt={2}>
                  {latestPost.description}
                </Text>
              </Box>
            </Box>
          </motion.div>
        </ChakraLink>
      </Box>
      <Divider />
      {/* Remaining Posts Grid */}
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        {remainingPosts.map((post) => (
          <ChakraLink
            as={Link}
            key={post.title}
            href={`/blog/${slugify(post.title)}`}
            _hover={{ textDecoration: 'none' }}
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <Box borderRadius='lg' overflow='hidden'>
                <Box p={4}>
                  <Heading size='md' mb={2}>
                    {post.title}
                  </Heading>
                  <Text color='gray.600' fontSize='sm'>
                    {new Date(post.date).toLocaleDateString()}
                  </Text>
                  <Text mt={2}>{post.description}</Text>
                </Box>
              </Box>
            </motion.div>
            <Divider />
          </ChakraLink>
        ))}
      </Grid>
    </Box>
  )
}

export default Blog
