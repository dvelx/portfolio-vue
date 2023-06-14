import moire from '../assets/images/moire.png'
import portfolio from '../assets/images/portfolio.png'
import email from '../assets/images/adaptive-mail.png'
import crm from '../assets/images/crm-main.png'

interface IWorks {
  id: number
  src: string
  title: string
  text: string
  github: string
  ghPages?: string
}

const works: IWorks[] = [
  {
    id: 1,
    src: moire,
    title: 'MOIRE STORE',
    text: 'Мой первый проект на Vue',
    github: 'https://github.com/dvelx/moire-store',
    ghPages: 'https://dvelx.github.io/moire-store/#/'
  },
  {
    id: 2,
    src: portfolio,
    title: '@dvelx portfolio',
    text: 'Проект моего портфолио на Vue3 + Vite + TS',
    github: 'https://github.com/dvelx/portfolio-vue',
    ghPages: 'https://dvelx.github.io/portfolio-vue/'
  },
  {
    id: 3,
    src: email,
    title: 'Adaptive Email',
    text: 'Адаптивное email письмо',
    github: 'https://github.com/dvelx/mail-blanchard',
    ghPages: ''
  },
  {
    id: 4,
    src: crm,
    title: 'CRM System',
    text: 'CRM система учета клиентов',
    github: 'https://github.com/dvelx/Mini-CRM',
    ghPages: ''
  }
]

export default works
