import moire from '../assets/images/moire.png'
import portfolio from '../assets/images/portfolio.png'
import email from '../assets/images/adaptive-mail.png'
import crm from '../assets/images/crm-main.png'
import aromeshop from '../assets/images/aromashop.png'
import cocktail from '../assets/images/cocktail.png'
import qtimTesting from '../assets/images/testingQTIM.png'
import rltTesting from  '../assets/images/testingRLT.png'

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
  },
  {
    id: 5,
    src: aromeshop,
    title: 'Онлайн магазин AromeShop',
    text: 'Онлайн магазин ароматов для дома и автомобиля',
    github: 'https://github.com/dvelx/Aromeshop',
    ghPages: ''
  },
  {
    id: 6,
    src: cocktail,
    title: 'Get Cocktail Random',
    text: 'Генератор случайных коктейлей',
    github: 'https://github.com/dvelx/getCocktailVueJS',
    ghPages: 'https://dvelx.github.io/getCocktailVueJS/#/'
  },
  {
    id: 7,
    src: rltTesting,
    title: 'Тестовое задание от компании RLT',
    text: 'Ивентарь с возможность менять позицию объекта, удаление объекта',
    github: 'https://github.com/dvelx/RLT_Testing',
    ghPages: ''
  },
  {
    id: 8,
    src: qtimTesting,
    title: 'Тестовое задание компании QTIM',
    text: 'Список постов с fakeAPI, технология Nuxt 3',
    github: 'https://github.com/dvelx/testQTIM',
    ghPages: ''
  }
]

export default works