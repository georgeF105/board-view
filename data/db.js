let surfboards = [{"id":1,"name":"Rods Board","boardLength":0,"measurements":[9,35,52,61,64,61,47,13,0,0],"created":"2016-05-01","owner":"Jack"},{"id":2,"name":"Test Board","boardLength":0,"measurements":[0,0,0,0,0,0,0,0,0,0],"created":"2016-06-22","owner":"George"}]

module.exports = {
  getUsers: function() {
    return 0
  },
  getUserBoards: function(id) {
    return new Promise(function(resolve,reject){
    	resolve(surfboards.filter(function(board){
    		return board.id == id
    	}))
    })
  },
  getAllBoards: function() {
    return 0
  },
  login: function(email) {
  	return knex('users').where({email})
  }
}