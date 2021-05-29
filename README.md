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
3. Create a `docker-compose.yml` file which runs the primary application container, as well as a MySQL container using the `mysql:5.7` image:

```yaml
version: '3.7'

services:
    app: #defines the app container
        build:
            context: .  #uses the Dockerfile found in current folder
        ports: #need to setup port mapping
            - "8080:8080"
        depends_on: #we need the database server for this container to be functional
            - db
    
    db:
        image: mysql:5.7 #we are getting this from a pre-built image
        environment: #set the environment variables as per instructions on docker hub
            MYSQL_ROOT_PASSWORD: "testroot"
            MYSQL_USER: "test"
            MYSQL_PASSWORD: "docker"
        ports: #need to be able to connect to the db as well
            - "9000:3306"
```

4. The MySQL environment settings will be needed for `config.js` in order for it to connect, be sure to update the file with the above user and password (test/docker).
4. Build the docker compose environment: `docker-compose build` and then run: `docker-compose up`
4. Using a tool like `MySQL Workbench`, connect to the DB container, and run the SQL provided above
5. Try interacting with your application

## Resources
[WordPress with MySql using Docker Compose](https://docs.docker.com/compose/wordpress/)
