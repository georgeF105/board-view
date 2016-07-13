import { connect } from 'react-redux'
import { toJS } from 'immutable'

import BoardList from '../BoardList'

const mapStateToProps = (state) => {
	return {
		title: 'Your Boards',
		Boards: state.get('surfboards').toJS().filter(board => board.owner == state.getIn(['user','id']))
	}
}

const UserBoardListContainer = connect(mapStateToProps)(BoardList)

export default UserBoardListContainer