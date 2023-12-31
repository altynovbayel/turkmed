import { Pages } from "../pages"
import spec from '../images/spec.svg'
export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Main/>,
  },
  {
    id: 2,
    route: '/doctors/',
    page: <Pages.DoctorsPage />,
  },
  {
    id: 3,
    route: '/contacts/',
    page: <Pages.ContactsPage />,
  },
  {
    id: 4,
    route: '/doctor/:id/',
    page: <Pages.DoctorMore />,
  },
  {
    id: 5,
    route: '/news/',
    page: <Pages.NewsPage />,
  },
]

export const footerLinksList = [
  {
    id:1,
    text: 'Запись на прием',
    route: ''
  },
  {
    id: 2,
    text: 'Врачи',
    route: ''
  },
  {
    id: 3,
    text: 'Наши услуги',
    route: ''
  },
  {
    id: 4,
    text: 'О нас',
    route: ''
  },
]

export const footerContactList = [
  {
    id: 1,
    text: 'Телефон: (237) 681-812-255',
    route: ''
  },
  {
    id: 2,
    text: 'Эл. почта: fildineesoe@gmail.com',
    route: ''
  },
  {
    id: 3,
    text: 'Адрес: 0123 Some place',
    route: ''
  },
]

export const navList = [
  {
    id:1,
    title: 'Главная',
    route: '/',
  },
  {
    id: 2,
    title: 'Врачи',
    route: '/doctors',
  },
  {
    id: 3,
    title: 'Новости',
    route: '/news',
  },
  {
    id: 4,
    title: 'Галерея',
    route: '/gallery',
  },
  {
    id: 5,
    title: 'Контакты',
    route: '/contacts',
  },
]

export const all_spec = [
  {
    id:1,
    img: spec,
    text: 'Неврология'
  },
  {
    id: 2,
    img: spec,
    text: 'Кости'
  },
  {
    id: 3,
    img: spec,
    text: 'Онкология'
  },
  {
    id: 4,
    img: spec,
    text: 'Оториноларингология'
  },
  {
    id: 5,
    img: spec,
    text: 'Офтальмология'
  },
  {
    id: 6,
    img: spec,
    text: 'Сердечно-сосудистые'
  },
  {
    id: 7,
    img: spec,
    text: 'пульмонология'
  },
  {
    id: 8,
    img: spec,
    text: 'Почечная медицина'
  },
  {
    id: 9,
    img: spec,
    text: 'Гастроэнтерология'
  },
  {
    id: 10,
    img: spec,
    text: 'Урология'
  },
  {
    id: 11,
    img: spec,
    text: 'Дерматология'
  },
  {
    id: 12,
    img: spec,
    text: 'Гинекология'
  },
]

export const contactsInfo = [
  {
    id:1,
    img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="39" viewBox="0 0 32 39" fill="none">< path d="M1 15.4C1 29.8 16 37 16 37C16 37 31 29.8 31 15.4C31 7.45 24.2875 1 16 1C7.7125 1 1 7.45 1 15.4Z" stroke="#007E85" strokeWidth="2" /><path d="M16.0001 20.32C18.8499 20.32 21.1601 18.0098 21.1601 15.16C21.1601 12.3102 18.8499 10 16.0001 10C13.1503 10 10.8401 12.3102 10.8401 15.16C10.8401 18.0098 13.1503 20.32 16.0001 20.32Z" stroke="#007E85" strokeWidth="2" /></svg > ,
    text: 'адрес',
    span1: '0123 Some place',
    span2: '9876 Some country'
  },
  {
    id:2,
    img: <svg xmlns="http://www.w3.org/2000/svg" width="39" height="32" viewBox="0 0 39 32" fill="none">
      <path d="M1.7998 1H37.1998V30.5H1.7998V1Z" stroke="#007E85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37.1998 6.8999L19.4998 18.6999L1.7998 6.8999" stroke="#007E85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    text: 'эл. почта',
    span1: 'fildineeesoe@gmil.com',
    span2: 'myebstudios@gmail.com'
  },
  {
    id: 3,
    img: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <path d="M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z" stroke="#007E85" stroke-width="2" stroke-linecap="round" />
      <path d="M21.6777 23.5L16.6777 16V6" stroke="#007E85" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    text: 'график работы',
    span1: 'Mon-Sat 09:00-20:00',
    span2: 'Sunday Emergency only'
  }
]