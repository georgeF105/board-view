import {fromJS} from 'immutable'

const INITAL_STATE = fromJS({
	surfboards: {
		'0':{name:'Rods Board',points:[9, 35, 52, 61, 64, 61, 47, 13, 0, 0],created:'2016-05-01',owner:1},
		'1':{name:'Test Board',points:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],created:'2016-05-01',owner:2},
		'2':{name:'Test Board',points:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],created:'2016-05-01',owner:0},
		'3':{name:'Test Board',points:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],created:'2016-05-01',owner:0}
	},
	users: {
		'0':{name: 'Example Boards'},
		'1':{name: 'Jack'},
		'2':{name: 'George'}
	},
	user:{
		id:0, name:'GuestXX', loggedIn: false
	}
})

export default (state = INITAL_STATE, action) => {
	switch(action.type) {
		case 'LOGIN':
			console.log('LOGIN Action Called')
			return state
		default:
			console.log('action.type not known', action.type)
			return state
	}
}