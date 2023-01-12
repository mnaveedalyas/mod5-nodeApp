$ mkdir testApp
$ cd testApp
$ nvm use ---node version no --
$ npm init -y
$ npm install express

$ npm install --save-dev @babel/core @babel/cli @babel/node
$ npm install --save-dev @babel/preset-env
Babel is a tool that lets you write your Javascript code using all the latest syntax and features, and run it in browsers that may not support those features. Babel is a transpiler that will translate your modern JS code into an older version of Javscript that more browsers are able to understand.

$ npm install --save-dev nodemon
Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.

$ npm install body-parser
Express body-parser is an npm module used to process data sent in an HTTP request body. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.

$ npm install dotenv
$ npm install cors

$ npm install mongoose --save