import Home from './screens/Home'
import UsersList, { loadData } from './screens/Users'

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
