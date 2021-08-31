import React, { Component } from 'react'

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <h1>This is the header</h1>
        <header>
          <ul>
            {logged_in &&
              <div>
                <a href={sign_out_route}>Sign Out</a>
              </div>
            }
            {!logged_in &&
              <div>
                <a href={sign_in_route}>Sign In</a>
              </div>
            }
          </ul>
        </header>
      </>
    );
  }
}

export default Header
