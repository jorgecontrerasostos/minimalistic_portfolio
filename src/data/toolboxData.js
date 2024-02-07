import { Icon } from '@chakra-ui/react'
import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const uniqueID = crypto.randomUUID()

export const toolboxData = [
  {
    id: uniqueID,
    name: 'HTML',
    icon: <Icon as={DiHtml5} boxSize={16} color='#e34c26' />
  },
  {
    id: uniqueID,
    name: 'CSS',
    icon: <Icon as={DiCss3} boxSize={16} color='#264de4' />
  },
  {
    id: uniqueID,
    name: 'JavaScript',
    icon: <Icon as={DiJavascript1} boxSize={16} color='#f7df1e' />
  },
  {
    id: uniqueID,
    name: 'React',
    icon: <Icon as={FaReact} boxSize={16} color='#81d8f7' />
  },
  {
    id: uniqueID,
    name: 'Node',
    icon: <Icon as={FaNodeJs} boxSize={16} color='#3c873a' />
  },
  {
    id: uniqueID,
    name: 'Next JS',
    icon: <Icon as={SiNextdotjs} boxSize={16} />
  }
]
