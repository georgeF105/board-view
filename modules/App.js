import React from 'react'
import NavLink from './NavLink'
import Navbar from './Navbar'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar title="Surfatron" userName="Guest" />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})