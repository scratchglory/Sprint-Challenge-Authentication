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
