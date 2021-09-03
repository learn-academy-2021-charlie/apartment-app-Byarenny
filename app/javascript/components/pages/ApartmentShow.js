import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class ApartmentShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleted: false
        }
    }

    handleDeleteSubmit = () => {
        console.log(this.props.apartment.id)
        this.props.deleteApartment(this.props.apartment.id)
        this.setState({ deleted: true })
    }

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
                <Button onClick={this.handleDeleteSubmit}>
                    Delete
                </Button>
                {this.state.deleted && <Redirect to="/apartmentindex" />}
                <br />
                <NavLink to={`/apartmentedit/${this.props.apartment.id}`}>
                    <Button>Edit</Button>
                </NavLink> 
                <br />
                <br />
            </>
        )
    }
}

export default ApartmentShow