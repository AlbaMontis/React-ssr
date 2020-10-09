import Home from './screens/Home'
import UsersList from './screens/Users'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList
  }
]
