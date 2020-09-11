import React from 'react'
import EventContainer from '../Main/EventContainer'
class Card extends React.Component {

    deleteUser = (evt) => {console.log(this.props)
        fetch(`http://localhost:3000/users/${this.props.userObj.id}`, {
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(deleted => {
            console.log(deleted)
        })
        this.props.handleDelete(this.props.userObj.name)
    }


    render() {

        let { name, birthdate, bio, imageURL } = this.props.userObj

        return (

            

<div className="uk-animation-toggle" tabindex="0">
<div className="uk-card uk-card-default uk-card-body uk-animation-slide-left-small">
    <p cslassName="uk-text-center"><div>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
    <div className="uk-card-media-left uk-cover-container">
    <div onClick={this.deleteUser} className="uk-card-badge uk-label"><span uk-icon="icon: trash; ratio: 1.5"></span></div>
        <img src={imageURL} alt={name} uk-cover="true"/>
        <canvas width="600" height="400"></canvas>
        </div><h3><strong>{birthdate}</strong></h3>
    
    <div>
        <div className="uk-card-body">
        <h3 className="uk-card-title">{name}</h3>
        <p>Bio: {bio}</p>
        <div clasName="uk-card-footer">
        <a onClick={() => this.props.handleClick(birthdate)} className="uk-button uk-button-text">Generate Events</a>
    </div>
        </div>
    </div>
</div>


            </div></p>
</div>
</div>

        )
    }
}
export default Card