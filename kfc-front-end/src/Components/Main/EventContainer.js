import React from 'react'

class EventContainer extends React.Component {

    renderEvents = () => {
        return this.props.eventsfromBACKEND.eventsfromBACKEND.map((content) => {
        return (<li key={content} text-align="left">{content}</li>)
        }
        )
    }
    render() {
        

        return (
            <div>
            <div className="uk-child-width-1@s uk-text-left" uk-grid='true'>
                <dl className="uk-description-list uk-description-list-divider">
                <div className="uk-background-default uk-padding uk-panel">
                <span className="uk-label uk-label-success"> <h4><strong><strong><strong><strong>Events</strong></strong></strong></strong></h4> </span>


                    
                    <h4><ul>{this.renderEvents()}</ul></h4>

                    
                    </div>
                </dl>
                </div>
            </div>
        )
    }


}

export default EventContainer