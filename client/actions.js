import firebase from 'firebase'


export function logIn (email, password) {
	return {
		type: 'LOGIN',
		email: email,
		password: password
	}
}

export function logOut () {
	return {
		type: 'LOGOUT'
	}
}

export function requestBoards () {
	return {
		type: 'REQUEST_BOARDS'
	}
}

export function receiveProjects (boardsObj) {
	return {
		type: 'RECEIVE_BOARDS',
		list: boardsObj,
		receivedAt: Date.now()
	}
}

export function fetchBoards () {
	return function (dispatch) {
		dispatch(requestBoards())

		let app = firebase.initializeApp({
			apiKey: "AIzaSyDxBhd_uzJR7HdVBqLKiDJlhUQgMqS9NBo",
			databaseURL: 'https://surfboard-jig.firebaseio.com',
			authDomain: "surfboard-jig.firebaseapp.com"
		})

		let db = firebase.database()

		let boardsRequest = db.ref('surfboards')
		let boards = []
		boardsRequest.once('value', function (boardsRet) {
			console.log('boards',boardsRet.val())
			boardsRet.forEach(function (board) {
				boards.push(board.val())
			})
			dispatch(receiveProjects(boards))
		})
	}
}