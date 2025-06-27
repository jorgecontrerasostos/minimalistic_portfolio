import JustiaIcon from '../components/JustiaIcon'

export const jobs = [
  {
    id: crypto.randomUUID(),

    title: 'Web Services Associate',
    company: 'Justia',
    icon: JustiaIcon,
    description: `I was offered a full time position when my internship ended. I'm continuously working on an automation tool to extract the content from old websites and migrate it to newer version as fast as possible preserving the integrity of the content. This tool uses Python as its main language.`,
    date: 'June 2021 - Present',
    link: 'https://www.justia.com/'
  },
  {
    id: crypto.randomUUID(),

    title: 'Web Services Intern',
    company: 'Justia',
    icon: JustiaIcon,
    description: `This was the first IT related job I ever got. During my internship I worked on different tasks such as tweaking websites, adding content on our CMS, Quality Assurance and migrating content from one website to another.`,
    date: 'January 2021 - June 2021',
    link: 'https://www.justia.com/'
  }
]
