import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../actions'

const renderUsers = users => users.map(user => <li key={user.id}>{user.name}</li>)

const UsersList = () => {
  const dispatch = useDispatch()

  useEffect(() => { dispatch(fetchUsers()) }, [])

  const users = useSelector(state => state.users)

  return (
    <div>
      Here's a big list of users:
      <ul>{renderUsers(users)}</ul>
    </div>
  )
}

export const loadData = store => store.dispatch(fetchUsers())

export default UsersList
