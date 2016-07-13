import {fromJS} from 'immutable'

const INITAL_STATE = fromJS({
	surfboards: [
		{id:0,name:'Jacks Board',points:[9, 35, 52, 61, 64, 61, 47, 13, 0, 0],created:'2016-05-01',owner:1},
		{id:1,name:'Georges Board',points:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],created:'2016-05-01',owner:2},
		{id:2,name:'Example Board One',points:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],created:'2016-05-01',owner:0},
		{id:3,name:'Example Board Two',points:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],created:'2016-05-01',owner:0}
	],
	users: {
		'0':{name: 'Example Boards'},
		'1':{name: 'Jack'},
		'2':{name: 'George'}
	},
	user:{
		id:0, userName:'Guest', loggedIn: false
	}
})

export default (state = INITAL_STATE, action) => {
	switch(action.type) {
		case 'LOGIN':
			console.log('LOGIN Action Called')
			console.log('Email',action.email)
			console.log('password',action.password)
			return state
		default:
			console.log('action.type not known', action.type)
			return state
	}
}