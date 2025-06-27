import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import BlogPost from '../../components/BlogPost'

// Add the slugify function
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), '/src/posts')
  const filenames = fs.readdirSync(postsDirectory)

  const paths = filenames.map((filename) => {
    const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
    const { data } = matter(source)
    return {
      params: {
        slug: slugify(data.title)
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), '/src/posts')
  const files = fs.readdirSync(postsDirectory)

  // Find the file that matches the slug
  const postFile = files.find((file) => {
    const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8')
    const { data } = matter(source)
    return slugify(data.title) === params.slug
  })

  if (!postFile) {
    return {
      notFound: true
    }
  }

  const source = fs.readFileSync(path.join(postsDirectory, postFile), 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export default BlogPost
