import React, { Component } from 'react'
import { Nav, NavLink } from 'reactstrap';
import aptlogo from '../assets/aptlogo.png'

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <header>
          <img className="logo"
            src={aptlogo}
            alt="skyline of buildings and home.co logo" />
          <ul>
            {logged_in &&
              <div>
                <Nav>
                  <NavLink href={sign_out_route}>Sign Out</NavLink>
                  <NavLink href="/">Home </NavLink>
                  <NavLink href="/apartmentindex">Listings</NavLink>
                  {/* <NavLink href="/apartmentnew">Create a listing</NavLink> */}
                </Nav>
              </div>
            }
            {!logged_in &&
              <div>
                <Nav>
                  <NavLink href={sign_in_route}>Sign In</NavLink>
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/apartmentindex">Listings</NavLink>
                </Nav>

              </div>
            }
          </ul>
          <div>
          </div>
        </header>
      </>
    );
  }
}

export default Header
