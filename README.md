### Setup

Run the following commands to setup the environment:

1. `npm install`

The above command will install dependencies in the main folder as well as trigger the `postinstall` script in the `package.json` file which will install the dependencies in the client folder.

2. Configure SQL connection

Find the `connection.js` file under the `sql` folder and update the "host", "user", "password", and "database" as necessary for your database.

### Developing

`npm run develop` runs the front-end and the back-end simultaneously so that the application can be developed. By default, the front-end will attempt to start up on port 3000 but will ask you if you'd like to use another port if it's not available. The back-end is configured to run on port 4000 and is less flexible so please make sure that port is available before starting this application. 

When working with urls in the client (front-end), for example when you want to connect to your api, simply use the relative path in your "fetch" or "axios" calls. E.g. `fetch('/api/test')`. The client is configured to pass these urls along to the backend and this is also the format we want the urls in for production.

### Production (build and run)

Before your application is production ready, you will need to re-run the build command in the client folder and then run the server in production mode. This assumes that you have already completed all setup steps. Please run the following commands in order:

1. `npm run client:build`
2. `NODE_ENV=production npm start`

You're entire application should be running on localhost:4000 and the app is now ready for production.
