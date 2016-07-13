import { connect } from 'react-redux'
import { toJS } from 'immutable'

import BoardView from '../BoardView'

const mapStateToProps = (state) => {
	return {
		Boards: state.get('surfboards').toJS().filter(board => board.owner == state.getIn(['user','id']))
	}
}

const BoardViewContainer = connect(mapStateToProps)(BoardView)

export default BoardViewContainer