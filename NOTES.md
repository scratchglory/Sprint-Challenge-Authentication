1. npm install
   - jsonwebtoken
   - bcryptjs
   - cookie-parser (parse cookie header and populate req.cookies with an obj keyed by the cookie names)
2. npm install --save-dev dotenv
   - provides .env file
   - must add to package.json(server) [-r dotenv/config]
3. create .env file
   - JWT_SECRET="this is a secret string"
