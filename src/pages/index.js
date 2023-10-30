import Head from 'next/head'
import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
import Toolbox from '@/components/Toolbox'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorge Contreras Ostos | Portfolio</title>
        <meta
          name='description'
          content='Jorge Contreras, selft taught web developer. Welcome to my corner of the internet!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />

      <WorkExperience />
      <Toolbox />
      <Projects />
    </>
  )
}
