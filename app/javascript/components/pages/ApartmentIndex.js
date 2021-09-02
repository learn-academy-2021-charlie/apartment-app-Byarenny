import React, { Component } from 'react'
import { Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class ApartmentIndex extends Component {

    render() {
        return (
            <>
                <h2 className="title">Homes for rent</h2>
                
                    {this.props.apartments && this.props.apartments.map(apartment => {
                        return (
                            <div className="body">
                            <Row key={apartment.id}>
                                <Col sm="6">
                                    <Card body key={apartment.id}>
                                        <CardTitle>
                                            <h1>🏠</h1>
                                            <h3> 
                                                <NavLink to={`/apartmentshow/${apartment.id}`}> {apartment.street} {apartment.city}, {apartment.state} 
                                                </NavLink>
                                            </h3>
                                            <p> 
                                                Bed: {apartment.bedrooms} | Bath: {apartment.bathrooms}
                                            </p>
                                        </CardTitle>
                                    </Card>
                                </Col>
                            </Row>
                            </div>
                        )

                    })}

               
            </>
        )
    }
}

export default ApartmentIndex