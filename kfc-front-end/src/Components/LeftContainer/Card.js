import React from 'react'
import EventContainer from '../Main/EventContainer'
class Card extends React.Component {

    deleteUser = (evt) => {
        this.props.handleDelete(this.props.userObj.name)
    }


    render() {
console.log("from CARD:",this.props)

        let { name, birthdate, bio, imageURL } = this.props.userObj

        return (

            <div>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
    <div className="uk-card-media-left uk-cover-container">
    <div onClick={this.deleteUser} className="uk-card-badge uk-label">DELETE</div>
        <img src={imageURL} alt="" uk-cover="true"/>
        <canvas width="600" height="400"></canvas>
        </div><h3><strong>{birthdate}</strong></h3>
    
    <div>
        <div className="uk-card-body">
        <h3 className="uk-card-title">{name}</h3>
        <p>Bio: {bio}</p>
        <div className="uk-card-footer">
        <a onClick={() => this.props.handleClick(birthdate)} className="uk-button uk-button-text">Generate Events</a>
    </div>
        </div>
    </div>
</div>


            </div>

        )
    }
}
export default Card