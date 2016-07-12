import React from 'react'
import NavLink from './NavLink'
import Navbar from './Navbar'
import Footer from './Footer'
import routes from './routes'

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar title="Surfatron" userName="Guest" />
        <div id='main'>{routes}</div>
        <Footer />
      </div>
    )
  }
})