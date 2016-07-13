import React from 'react'
import db from '../../data/db'
import BoardPreview from './BoardPreview'


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
    		<div className="container">
	    		{this.state.boards ? this.state.boards.map(function(item, key){return <BoardPreview {...item} key={key} />}) : <h3>No Boards Found</h3>}
	    	</div>
	    </div>
    )
  }
}

export default Boards