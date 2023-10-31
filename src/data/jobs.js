import JustiaIcon from '../components/JustiaIcon'
import CostcoIcon from '../components/CostcoIcon'

export const jobs = [
  {
    id: crypto.randomUUID(),

    title: 'Web Services Associate - Justia',
    icon: JustiaIcon,
    description: `In this position I handle different tasks but primarly migrating client's websites to our new platform.`,
    date: 'June 2021 - Present',
    link: 'https://www.justia.com/'
  },
  {
    id: crypto.randomUUID(),

    title: 'Web Services Intern - Justia',
    icon: JustiaIcon,
    description: `During my internship I was part of the Help Desk Team performing tasks such as small tweaks for client sites, among others.`,
    date: 'January 2021 - June 2021',
    link: 'https://www.justia.com/'
  },
  {
    id: crypto.randomUUID(),

    title: 'Checkout Line Supervisor - Costco',
    icon: CostcoIcon,
    description: `I was in charge of the check out line at Costco. It really enjoyed working there.`,
    date: 'June 2018 - June 2021',
    link: 'https://www.costco.com/'
  }
]
