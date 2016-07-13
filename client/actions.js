
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