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
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
    constructor(props){
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
          }}/>
          <Route path="/apartmentshow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            console.log(this.state.apartments)
            return <ApartmentShow apartment={apartment} />
          }}/>
          <Route path="/apartmentnew" component={ApartmentNew} />
          <Route path="/apartmentedit" component={ApartmentEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App
