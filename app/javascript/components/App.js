import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApartment()
  }

  readApartment = () => {
    fetch("/apartments")
      .then(response => response.json())
      .then(apartmentArray => this.setState({ apartments: apartmentArray }))
      .catch(errors => console.log("apartment read errors:", errors))
  }

  createApartment = (newApartment) => {
    console.log(newApartment)
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(() => this.readApartment())
      .catch(errors => console.log("apartment create errors:", errors))
  }

  updateApartment = (editApartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(editApartment),
      headers: {
        "content-type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(() => this.readApartment())
      .catch(errors => console.log("apartment update errors: ", errors))
  }

  deleteApartment = (id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(id),
      headers: {
        "content-type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => this.readApartment())
      .catch(errors => console.log("apartment delete errors: ", errors))
  }


  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentindex" render={(props) => {
            return <ApartmentIndex apartments={this.state.apartments} />
          }} />
          <Route path="/apartmentshow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow
              apartment={apartment}
              current_user={this.props.current_user}
              deleteApartment={this.deleteApartment} />
          }} />
          <Route path="/apartmentnew" render={(props) => {
            return <ApartmentNew createApartment={this.createApartment} current_user={this.props.current_user} />
          }} />
          <Route path="/apartmentedit/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentEdit apartment={apartment} updateApartment={this.updateApartment} />
          }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App
