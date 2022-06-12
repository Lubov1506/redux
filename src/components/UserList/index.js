import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getUsersRequestAction } from '../../actions/actionCreators'

const UserList = props => {
  const { users, isFetching, error } = props

  useEffect(() => {
    props.getUsersRequestAction({
      limit: 5,
      offset: 0
    })
  }, [])

  const loadMore = () =>{
    props.getUsersRequestAction({
      offset: users.length
    })
  }
  return (
    <div>
      {isFetching && <p>Loading....</p>}
      {error && <p>Some error</p>}
      <button onClick={loadMore}>Load more Users</button>
      {users
        ? users.map(u => {
            return <li key={u.id}>{JSON.stringify(u)}</li>
          })
        : null}
    </div>
  )
}
const mapStateToProps = ({ user }) => user
const mapDispatchToProps = {
  getUsersRequestAction
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
