import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import BlogPost from '../../components/BlogPost'

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), '/src/posts')
  const filenames = fs.readdirSync(postsDirectory)

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx$/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), '/src/posts')
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath)
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
