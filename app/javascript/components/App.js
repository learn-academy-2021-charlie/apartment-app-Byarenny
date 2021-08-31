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
          <Route path="/apartmentindex" component={ApartmentIndex} />
          <Route path="/apartmentshow" component={ApartmentShow} />
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
