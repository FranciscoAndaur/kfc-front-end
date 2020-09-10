import React from 'react'
import EventContainer from '../Main/EventContainer'
class Card extends React.Component {



    render() {
    
        let { name, birthdate } = this.props.userObj
        
        return(
            <div>
            <div className="uk-light uk-background-secondary uk-padding">
                        <h3>{name}</h3>
                        <p>{birthdate} </p>
                        <button onClick={() => this.props.handleClick(birthdate) } className="uk-button uk-button-default">Render Events</button>
                    </div>
​
            </div>
        )
    }
}
export default Card