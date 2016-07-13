import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
        <div>
        	<div className="jumbotron">
        	  <div className="container">
        	    <h1>Surfboard Jig</h1>
        	    <p>A website for... a quick desctription about what the website is all about.. and some other marketing words...</p>
        	    <p><Link className="btn btn-primary btn-lg" to="/boards/examples" role="button">Checkout examples &raquo;</Link></p>
        	  </div>
        	</div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Create new board</h2>
                  <p>Create new board CAM info</p>
                  <p><Link className="btn btn-default" to="/boards/new" role="button">Create board from CAD file</Link></p>
                  <p><Link className="btn btn-default" to="/boards/new" role="button">Manually create board</Link></p>
                </div>
                <div className="col-md-6">
                  <h2>Existing boards</h2>
                  <p>Open existing board CAM info</p>
                  <p><Link className="btn btn-default" to="/boards" role="button">Open my boards</Link></p>
                  <p><Link className="btn btn-default" to="/boards/examples" role="button">Checkout examples</Link></p>
                </div>
              </div>
            </div>
        </div>
    )
  }
})