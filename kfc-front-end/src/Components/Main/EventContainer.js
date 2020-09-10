import React from 'react'

class EventContainer extends React.Component {
    renderEvents = () => {
        return this.props.eventsfromBACKEND.eventsfromBACKEND.map((content) => {
        return (<dd key={content}>{content}</dd>)
        }
        )
    }
    render() {

        return (
            <div>
            <div className="uk-child-width-1@s uk-text-center" uk-grid='true'>
                <dl className="uk-description-list uk-description-list-divider">
                <div className="uk-background-default uk-padding uk-panel">
                    <dt>Description term</dt>


                    {this.renderEvents()}
                    
                    </div>
                </dl>
                </div>
            </div>
        )
    }


}

export default EventContainer