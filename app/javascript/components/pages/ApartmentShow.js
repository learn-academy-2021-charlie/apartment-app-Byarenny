import React, { Component } from 'react'
import { Card, CardTitle, Col, Row } from 'reactstrap'
// import { Button } from 'reactstrap';
// import { Redirect } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

class ApartmentShow extends Component {


    render() {

        return (
            <>
                <h2>This is the ApartmentShow page</h2>
                <h1>🏠</h1>
                <h3>
                    {this.props.apartment.street} {this.props.apartment.city}, {this.props.apartment.state}
                </h3>
                <ul>
                    <li> Bed: {this.props.apartment.bedrooms} </li>
                    <li> Bath: {this.props.apartment.bathrooms}</li>
                    <li> Price: ${this.props.apartment.price} a month</li>
                    <li> Pet policy: {this.props.apartment.pets}</li>
                    <li> Contact {this.props.apartment.manager} at {this.props.apartment.email} for a showing! </li>
                </ul>
                
            </>
        )
    }
}

export default ApartmentShow