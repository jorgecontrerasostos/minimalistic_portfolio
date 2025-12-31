import JustiaIcon from '../components/JustiaIcon'

export const jobs = [
  {
    id: crypto.randomUUID(),
    title: 'Data Engineer',
    company: 'Arca Continental',
    icon: JustiaIcon,
    description: `I'm part of the DataOps Team ensuring that all the development process runs smoothly. From automating dbt builds and deploys using Pipelines in Azure DevOps, to migrating Databricks Projects to Snowflake.`,
    date: '2025 - Present',
    link: 'https://www.arcacontal.com/en'
  },
  {
    id: crypto.randomUUID(),

    title: 'Web Services Associate',
    company: 'Justia',
    icon: JustiaIcon,
    description: `When my internship wrapped up, they offered me a full-time position. Helped build and mantain an automation tool using Python. Its main goal was to quickly pull content from old websites and zap it over to new ones, all while keeping everything perfectly intact.`,
    date: '2021 - 2025',
    link: 'https://www.justia.com/'
  },
  {
    id: crypto.randomUUID(),

    title: 'Web Services Intern',
    company: 'Justia',
    icon: JustiaIcon,
    description: `I got my hands on a bunch of cool tasks, from tweaking websites and adding content to our CMS, to doing quality assurance and migrating content. It was a great learning experience and super fun!`,
    date: '2021',
    link: 'https://www.justia.com/'
  }
]
