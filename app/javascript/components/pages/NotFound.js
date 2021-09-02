import React, { Component } from 'react'
import dog from '../assets/dog.jpg'

class NotFound extends Component {
    render() {
        return (
            <>
            <h1 className="title">404 Page not found. Here's a cute dog!</h1>
            <img src={dog} alt="dog in moving box" className="dogpic"/>
            </>
        )
    }
}

export default NotFound