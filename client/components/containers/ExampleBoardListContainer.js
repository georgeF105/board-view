import { connect } from 'react-redux'
import { toJS } from 'immutable'

import BoardList from '../BoardList'

const mapStateToProps = (state) => {
	return {
		title: 'Example Boards',
		Boards: state.get('surfboards').toJS().filter(board => board.owner == 0)
	}
}

const UserBoardListContainer = connect(mapStateToProps)(BoardList)

export default UserBoardListContainer