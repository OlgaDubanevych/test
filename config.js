var config = {
	database: {
		host:	  'cloudsql', 	// database host
		user: 	  'docker', 		// your database username
		password: 'test', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'example' 		// your database name
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config
