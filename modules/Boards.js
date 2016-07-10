import React from 'react'
import db from '../data/db'


export class Boards extends React.Component {
	constructor (props) {
		super(props)
		this.state = {userId:1,boards:[]}
  	this.getBoards.bind(this)()
	}

	getBoards(){
  	const t = this
		console.log('geting boards for id:',this.state.userId)
  	db.getUserBoards(this.state.userId)
  		.then(function(boards){
  			t.setState({boards:boards})
  			console.log('boards:',boards)
  		})
			.catch(function(err){
				console.log("error fetching boards Error:", err)
			})
	}

  render() {
    return (
    	<div>
	    	<div className="jumbotron">
	    		<div className="container">
	    			<h1>Boards</h1>
	    		</div>
	    	</div>
	    	
	    </div>
    )
  }
}

export default Boards