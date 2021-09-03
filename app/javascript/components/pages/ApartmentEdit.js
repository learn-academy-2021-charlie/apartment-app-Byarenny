import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
          form:{
            street: this.props.apartment ? this.props.apartment.street: "",
            city: this.props.apartment ? this.props.apartment.city: "",
            state: this.props.apartment ? this.props.apartment.state: "",
            manager: this.props.apartment ? this.props.apartment.manager: "",
            email: this.props.apartment ? this.props.apartment.email: "",
            price: this.props.apartment ? this.props.apartment.price: "",
            bedrooms: this.props.apartment ? this.props.apartment.bedrooms: "",
            bathrooms:this.props.apartment ? this.props.apartment.bathrooms: "",
            pets: this.props.apartment ? this.props.apartment.pets: ""
            },

            submitted: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ submitted: true })
    }

    render() {
        return (
            <>
                <h2 className="title">Edit your listing</h2>
                <Form className="form">
                    <FormGroup>
                        <Label for="street">Street</Label>
                        <Input
                            type="text"
                            name="street"
                            onChange={this.handleChange}
                            value={this.state.form.street}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            value={this.state.form.city}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input
                            type="text"
                            name="state"
                            onChange={this.handleChange}
                            value={this.state.form.state}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="manager">Manager</Label>
                        <Input
                            type="text"
                            name="manager"
                            onChange={this.handleChange}
                            value={this.state.form.manager}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.form.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input
                            type="text"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.form.price}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bedrooms">Bedrooms</Label>
                        <Input
                            type="text"
                            name="bedrooms"
                            onChange={this.handleChange}
                            value={this.state.form.bedrooms}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bathrooms">Bathrooms</Label>
                        <Input
                            type="text"
                            name="bathrooms"
                            onChange={this.handleChange}
                            value={this.state.form.bathrooms}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pets">Pets</Label>
                        <Input
                            type="text"
                            name="pets"
                            onChange={this.handleChange}
                            value={this.state.form.pets}
                        />
                    </FormGroup>
                    <br />
                    <Button onClick={this.handleSubmit}>Submit Changes</Button>
                </Form>
                {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />}
                <br />
                <br />
                <br />
                <br />
            </>
        )
    }
}

export default ApartmentEdit