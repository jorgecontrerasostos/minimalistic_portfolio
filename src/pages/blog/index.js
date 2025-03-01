import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { getSortedPostsData } from '../../utils/mdx'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      posts: allPostsData
    }
  }
}

const Blog = ({ posts }) => {
  return (
    <Box maxW='1200px' mx='auto' px={4} py={8}>
      <Heading mb={8}>Blog Posts</Heading>
      <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={6}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            _hover={{ textDecoration: 'none' }}
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <Box borderRadius='lg' overflow='hidden' shadow='md'>
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    height='200px'
                    width='100%'
                    objectFit='cover'
                  />
                )}
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
          </Link>
        ))}
      </Grid>
    </Box>
  )
}

export default Blog
