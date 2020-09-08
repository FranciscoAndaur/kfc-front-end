import React from 'react'

class EventContainer extends React.Component {
    render() {

        return (
            <>
            <div className="uk-child-width-1@s uk-text-center" uk-grid='true'>
                <dl className="uk-description-list uk-description-list-divider">
                <div className="uk-background-default uk-padding uk-panel">
                    <dt>Description term</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd><button className="uk-button uk-button-primary">Comment</button>
                    </div>
                </dl>
                </div>
            </>
        )
    }


}

export default EventContainer