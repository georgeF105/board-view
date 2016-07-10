import React from 'react'
import db from '../data/db'


export class Boards extends React.Component {
	constructor (props) {
		super(props)
		
	}

  render() {
    return (
    	<div className="jumbotron">
    		<div className="container">
    			<h1>Boards</h1>
    		</div>
    	</div>
    )
  }
}

export default Boards