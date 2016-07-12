import React from 'react'
import db from '../../data/db'


export class Boards extends React.Component {
	constructor (props) {
		super(props)
		
	}

  render() {
    return (
    	<div className="jumbotron">
    		<h2 className="board-title">{this.props.name}</h2>
    		<div className="row">
    		  <div className="col-md-6">
    		    <div className="board-image" id="board-image-{this.props.boardId}"></div>
    		  </div>
    		  <div className="col-md-3">
    		    <p> Board Length: {this.props.length}</p>
    		    <p> Created: {this.props.created}</p>
    		    <p> Created By: {this.props.owner}</p>
    		    <p> Some other info ...</p>
    		  </div>
    		  <div className="col-md-3">
    		    <p><a className="btn btn-default" href="#" role="button">Send to device</a></p>
    		    <p><a className="btn btn-default" href="#" role="button">Edit board</a></p>
    		  </div>
    		</div>
    	</div>
    )
  }
}

export default Boards