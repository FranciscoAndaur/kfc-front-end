import React from 'react'
import CommentForm from './CommentForm'
import CommentsComponent from './CommentsComponent'
import EventContainer from './EventContainer'


class MainContainer extends React.Component {
    
    render() {
        return (
        <>
            <section>
                <h1>MainContainer</h1>
                    <CommentsComponent />
                    <EventContainer/>
                    <CommentForm />
            </section>
        </>
    )
    }
}

export default MainContainer