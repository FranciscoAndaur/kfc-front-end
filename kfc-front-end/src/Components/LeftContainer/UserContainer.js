import React from 'react'
import UserCard from './UserCard'

class UserContainer extends React.Component {
    state = {
        users: [],
        searchTerm: ""
        }

    componentDidMount() {
            fetch("http://localhost:3000/users")
            .then(r => r.json())
            .then((userData) => {
                this.setState({
                users: userData
                })
            })
        }   
        
    render() {
        let filteredUsers = this.state.users.filter(users => {
            return users.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          })
    return (
        <div>
                <UserCard users={filteredUsers} handleClick={this.props.handleClick}  />
        </div>
    )
    }
}

export default UserContainer