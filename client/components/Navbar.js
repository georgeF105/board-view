import React from 'react'

export class Navbar extends React.Component {
	constructor (props) {
		super(props)
		this.state = {loggedIn: false, userName: 'Guest'}
	}
	login (event) {
		event.preventDefault()
		console.log('trying to login', document.getElementById("login-form"))
		this.setState({loggedIn: true})
		document.getElementById("login-form")
	}
	logOut (event) {
		console.log('trying to logout', event)
		event.preventDefault()
		this.setState({loggedIn: false})
	}
  render() {
    return (
    	<nav className="navbar navbar-inverse navbar-fixed-top">
    	  <div className="container">
    	    <div className="navbar-header">
    	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    	        <span className="sr-only">Toggle navigation</span>
    	        <span className="icon-bar"></span>
    	        <span className="icon-bar"></span>
    	        <span className="icon-bar"></span>
    	      </button>
    	      <a className="navbar-brand" href="/">{this.props.title}</a>
    	    </div>
    	    <div id="navbar" className="navbar-collapse collapse">

    	    {!this.state.loggedIn ? (
    	      <form id="login-form" className="navbar-form navbar-right">
    	        <a id="user-name" className="navbar-username" href="#">{this.state.userName}</a>
    	        	<div className="form-group">
	    	          <input type="text" placeholder="Email" name="email" className="form-control"/>
	    	        </div>
	    	        <div className="form-group">
	    	          <input type="password" placeholder="Password" name="password" className="form-control"/>
	    	        </div>
	    	        <button type="submit" className="btn" onClick={this.login.bind(this)}>Sign in</button>
    	      </form>
    	      ):(
    	      	<form id="login-form" className="navbar-form navbar-right">
    	        	<a id="user-name" className="navbar-username" href="#">{this.state.userName}</a>
    	      		<button className="btn" onClick={this.logOut.bind(this)}>Sign out</button>
    	      	</form>
    	      )
	      	}
    	    </div>
    	  </div>
    	</nav>
    )
  }
}

export default Navbar