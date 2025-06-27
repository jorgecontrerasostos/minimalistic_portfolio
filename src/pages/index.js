import Education from '@/components/Education'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ThankYouSection from '@/components/ThankYouSection'
import Toolbox from '@/components/Toolbox'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorge Contreras Ostos | Portfolio</title>
        <meta
          name='description'
          content="Hi, I'm Jorge, baseball nerd and AI/ML enthusiast"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <WorkExperience />
      <Education />
      <Toolbox />
      <Projects />
      <ThankYouSection />
    </>
  )
}
