import { connect } from 'react-redux'
import { toJS } from 'immutable'

import NavBar from '../NavBar'
import { logIn, logOut } from '../../actions'


const mapStateToProps = (state) => {
	return {
		NavBarInfo: state.get('user').toJS()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logIn: (email,password) => {
			dispatch(logIn(email,password))
		},
		logOut: () => {
			dispatch(logOut())
		}
	}
}

const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar)

export default NavBarContainer