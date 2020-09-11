import React from 'react'
import Card from './Card'
class UserCard extends React.Component {  
    //todo need help rendering USERS TO PAGE
    
    render() {
        
        // console.log(this.props.users.forEach(users => console.log("from map in Usercard", users)))
        // console.log(this.props.users)
        let allUsers = this.props.users.map(user => {
            return <Card userObj={user} key={user.id} handleClick={this.props.handleClick} handleDelete={this.props.handleDelete}/>
        })
        
        
        return (
            <div>
                {allUsers}
            </div>
        )
    }
}
export default UserCard