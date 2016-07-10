import React from 'react'

export default React.createClass({
  render() {
    return (
        <div>
        	<div className="jumbotron">
        	  <div className="container">
        	    <h1>Surfboard Jig</h1>
        	    <p>A website for... a quick desctription about what the website is all about.. and some other marketing words...</p>
        	    <p><a className="btn btn-primary btn-lg" href="/boards" role="button">Checkout examples &raquo;</a></p>
        	  </div>
        	</div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Create new board</h2>
                  <p>Create new board CAM info</p>
                  <p><a className="btn btn-default" href="/boards/new" role="button">Create board from CAD file</a></p>
                  <p><a className="btn btn-default" href="#" role="button">Manually create board</a></p>
                </div>
                <div className="col-md-6">
                  <h2>Existing boards</h2>
                  <p>Open existing board CAM info</p>
                  <p><a className="btn btn-default" href="/boards" role="button">Open my boards</a></p>
                  <p><a className="btn btn-default" href="/boards/examples" role="button">Checkout examples</a></p>
                </div>
              </div>
            </div>
        </div>
    )
  }
})