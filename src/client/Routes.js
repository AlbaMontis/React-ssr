import Home from './components/Home.jsx'
import UsersList, { loadData } from './components/UsersList.jsx'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
]
