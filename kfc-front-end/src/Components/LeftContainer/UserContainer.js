import React from 'react'
import UserCard from './UserCard'
const backEndAPIUsers = ("http://localhost:3000/users")

class UserContainer extends React.Component {
    state = {
        users: [],
        searchTerm: ""
        }

    componentDidMount() {
            fetch(backEndAPIUsers)
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
        <>
                <UserCard users={filteredUsers} />
        </>
    )
    }
}

export default UserContainer