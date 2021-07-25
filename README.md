# demo-server-01

Server setup process:
1. npm init -y
2. sudo npm i -g nodemon
3. npm i express
4. npm i dotenv
5. npm i cors

Heroku setup process:
1. heroku login
2. heroku create [appname] or heroku git:remote -a [appname] (for a previously created heroku app)
3. Add start script to package.json: "start": "node server.js"
4. git push heroku main

URL
https://demo-server-01-express-sql.herokuapp.com/data

Endpoints
/cats
/meow