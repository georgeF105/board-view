import React, {Component} from 'react'

class BoardView extends Component {
  render() {
  	const id = this.props.params.id
  	const board = this.props.Boards.find(board => board.id == id)
  	console.log('Board:', board)
  	console.log('id:', id)
	  return (
	  	<div>
	    	<div className="jumbotron">
	    		<div className="container">
	    			<h2>{board ? board.name : 'Board Not Found'}</h2>
	    		</div>
	    	</div>
	  		<div className="container">
	    		<div className="jumbotron">
	    			<div className="row">
	    				<div className="col-md-8">
	    					<div className="board-image"></div>
	    				</div>
	    				<div className="col-md-4">
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	  )
	}
}

export default BoardView