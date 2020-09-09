import React from 'react'


class Card extends React.Component {
    render() {
        let { name, birthdate } = this.props.userObj
        // console.log("from card: ", this.props.userObj)
        return(
            <>
            <div className="uk-light uk-background-secondary uk-padding">
                        <h3>{name}</h3>
                        <p>{birthdate} </p>
                        <button className="uk-button uk-button-default">Button</button>
                    </div>

            </>
        )
    }
}
export default Card