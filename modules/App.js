import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})