import React from 'react'
import CommentForm from './CommentForm'
import CommentsComponent from './CommentsComponent'
import EventContainer from './EventContainer'
import SignUpForm from './SignUpForm'

const MainContainer = () => {
    return (
        <>
                <h1>MainContainer</h1>
                    <CommentsComponent />
                    <EventContainer/>
                    <SignUpForm />
                    <CommentForm />
        </>
    )
}

export default MainContainer