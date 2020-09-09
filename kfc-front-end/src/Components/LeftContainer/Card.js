import React from 'react'


class Card extends React.Component {
    render() {
        // let { name, birthdate } = this.props.users
        console.log(this.props)
        return(
            <>
            <div className="uk-light uk-background-secondary uk-padding">
                        <h3>UserName</h3>
                        <p>user snippet has to be this long </p>
                        <button className="uk-button uk-button-default">Button</button>
                    </div>

            </>
        )
    }
}
export default Card