import {
  Badge,
  Box,
  Link as ChakraLink,
  Divider,
  Flex,
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
    <Box maxW='1200px' mx='auto'>
      <Flex justify='space-between' align='center' mb={8}>
        <Heading>Blog</Heading>
        {/* <TranslateButton />*/}
      </Flex>

      {/* Latest Post - Bigger Size */}
      <Box mb={4}>
        <ChakraLink
          as={Link}
          href={`/blog/${slugify(latestPost.title)}`}
          _hover={{ textDecoration: 'none' }}
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <Box>
              <Box p={[0, 0, 0, 0]} pb={4}>
                <Heading size='lg' mb={3}>
                  {latestPost.title}
                </Heading>
                <Box display='flex' alignItems='center' mb={2}>
                  <Text color='gray.600' fontSize='sm' mr={3}>
                    {new Date(latestPost.date).toLocaleDateString({
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Text>
                  {latestPost.category && (
                    <Badge
                      colorScheme={
                        latestPost.category === 'Personal'
                          ? 'green'
                          : latestPost.category === 'AI'
                          ? 'orange'
                          : 'blue'
                      }
                      fontSize='xs'
                    >
                      {latestPost.category}
                    </Badge>
                  )}
                </Box>
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
      <Grid templateColumns='repeat(1, 1fr)' gap={6} mt={4}>
        {remainingPosts.map((post) => (
          <ChakraLink
            as={Link}
            key={post.title}
            href={`/blog/${slugify(post.title)}`}
            _hover={{ textDecoration: 'none' }}
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <Box borderRadius='lg' overflow='hidden'>
                <Box p={0} pb={4}>
                  <Heading size='md' mb={2}>
                    {post.title}
                  </Heading>
                  <Box display='flex' alignItems='center'>
                    <Text color='gray.600' fontSize='sm' mr={3}>
                      {new Date(post.date).toLocaleDateString()}
                    </Text>
                    {post.category && (
                      <Badge colorScheme='blue' fontSize='xs'>
                        {post.category}
                      </Badge>
                    )}
                  </Box>
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
