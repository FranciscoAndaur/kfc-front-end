import React from 'react'
import UserCard from './UserCard'

class UserContainer extends React.Component {
    state = {
        searchTerm: ""
    }
     
    render() {
        let filteredUsers = this.props.users.filter(users => {
            return users.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          })
    return (
        <div>
                <UserCard users={filteredUsers} handleClick={this.props.handleClick} handleDelete={this.props.handleDelete}  />
        </div>
    )
    }
}

export default UserContainer