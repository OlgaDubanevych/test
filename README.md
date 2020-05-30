Node.js, Express & MySQL: Simple Add, Edit, Delete, View (CRUD)
========

A simple and basic CRUD application (Create, Read, Update, Delete) using Node.js, Express, MySQL & EJS Templating Engine.

**Reference:** [Node.js, Express & MySQL: Simple Add, Edit, Delete, View (CRUD)](http://blog.chapagain.com.np/node-js-express-mysql-simple-add-edit-delete-view-crud/)

**To Start**
Command: `node app.js`
DB configuration available in `config.js`

**Creating database and table**

```

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);
```
## Instructions
1. Create a `.dockerignore` file which ignores `node_modules`
2. Create a `Dockerfile` which will be able to run this application as given in above instructions
3. Create a `docker-compose.yml` file which runs the primary application container, as well as a MySQL container using the `mysql:5.7` image. The MySQL environment settings will be needed for `config.js` in order for it to connect
4. Using a tool like `MySQL Workbench`, connect to the DB container, and run the SQL provided above
5. Try interacting with your application

## Resources
[WordPress with MySql using Docker Compose](https://docs.docker.com/compose/wordpress/)
