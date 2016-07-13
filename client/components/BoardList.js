import React from 'react'
import db from '../../data/db'
import BoardPreview from './BoardPreview'


export default (props) => {
	console.log('boards',props.Boards)
  return (
  	<div>
    	<div className="jumbotron">
    		<div className="container">
    			<h1>{props.title}</h1>
    		</div>
    	</div>
  		<div className="container">
    		{props.Boards ? 
    			props.Boards.map(function(board, key){return <BoardPreview {...board} key={key} />}) :
    			<h3>No Boards Found</h3>}
    	</div>
    </div>
  )
}
