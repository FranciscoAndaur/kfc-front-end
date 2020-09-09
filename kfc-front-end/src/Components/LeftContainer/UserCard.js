import React from 'react'
import Card from './Card'


class UserCard extends React.Component {
    
    //todo need help rendering USERS TO PAGE
    
    render() {
        console.log(this.props.users.map(users => console.log("from map in Usercard", users)))
        let allUsers = this.props.users.map(users => {
            // return <Card userObj={users} key={users.id} />
            return <>
            <div className="uk-light uk-background-secondary uk-padding">
                        <h3>{console.log(users.name)}</h3>
                        <p>user snippet has to be this long </p>
                        <button className="uk-button uk-button-default">Button</button>
                    </div>

            </>
          })
        
        
        return (
            <>
                <Card>
                 {allUsers}
                </Card>
                
            </>
        )
    }
}
export default UserCard