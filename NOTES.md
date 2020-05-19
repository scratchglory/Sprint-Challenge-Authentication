1. npm install
   - jsonwebtoken
   - bcryptjs
   - cookie-parser (parse cookie header and populate req.cookies with an obj keyed by the cookie names)
2. npm install --save-dev dotenv
   - provides .env file
   - must add to package.json(server) [-r dotenv/config]
3. create .env file
   - JWT_SECRET="this is a secret string"
4. make edits in server.js
   - import cookie parser
   - add server.js(cookieParser())
   - add get home page endpoint
   - add status 500 error
5. fill out middleware
6. create users folder
   - users-model.js
     - functions
   - users-router.js
     - add usersRouter to server.js
     - available for when user is logged in
7. fill out auth-router.js
8. test connectivity with insomnia

### Writing Tests

1. npm install --save-dev jest
2. set up config, "jest", in package.json
3. npm install --save-dev supertest
4. creae seed folder
   - knex seed:make 001-users
   - knex seed:run
5. create **tests** folder
   - tests.js
6. add test scripts in package.json
   - "test:watch": "jest --watch"
   - "test": "jest"
7. struggling to get test for axios end points
8. create **mocks** folder: for all our mock tests
   - axios.js
