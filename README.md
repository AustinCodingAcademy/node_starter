### Setup

Run the following commands to setup the environment:

1. `npm install`

The above command will install dependencies in the main folder as well as trigger the `postinstall` script in the `package.json` file which will install the dependencies in the client folder.

### Commands

`npm start` runs the server

### Production (build and run)

Before your application is production ready, you will need to re-run the build command in the client folder and then run the server in production mode. This assumes that you have already completed all setup steps. Please run the following commands in order:

1. `npm run client:build`
2. `NODE_ENV=production npm start`
