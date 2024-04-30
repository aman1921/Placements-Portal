# Production

This repository combines client and server into a single node.js app

## Instructions to setup

1. Clone this repository
   ```bash
   git clone https://github.com/Placement-Portal-IIITL/Production.git
   ```
2. Move into repository's directory / Open Repository directory in your code editor
   ```bash
   cd Production
   code .
   ```
3. Clone Website respository in client directory
   ```bash
   git clone https://github.com/Placement-Portal-IIITL/Website.git client
   ```
4. Move into client directory
   ```bash
   cd client
   ```
5. Setup environment variables for client
   1. Create a `.env` file inside client directory
   2. Add following environment variables into it
      ```
      REACT_APP_API=/api
      ```
6. Install all packages
   ```bash
   npm install
   ```
7. Build react app
   ```bash
   npm run build
   ```
8. client directory is ready. Now move back to Production directory
   ```bash
   cd ..
   ```
9. Clone Backend repository in server directory
   ```bash
   git clone https://github.com/Placement-Portal-IIITL/Backend.git server
   ```
10. Move to server directory
    ```bash
    cd server
    ```
11. Install all packages
    ```bash
    npm install
    ```
12. server directory is ready. Now move back to Production directory
    ```bash
    cd ..
    ```
13. Setup environment variables for project

    1. Create a `.env` file in root directory
    2. Add following environment variables into it
       ```
       DATABASE=<Database connection URL>
       JWT_SECRET=<Put any string here as your JWT Secret>
       SENDGRID_API_KEY=<API KEY of sendgrid>
       ADMIN_EMAIL=placements.iiitl@gmail.com
       CORS_ORIGIN=["http://localhost:3000"]
       LINKEDIN_SCRAPPER_API_KEY=<API KEY of iscraper.io>
       ```

14. Install all packages
    ```bash
    npm install
    ```
15. Your project is ready. Start your project in localhost
    ```bash
    npm start
    ```
16. Checkout your project at [localhost:3000](http://localhost:3000)

## Instructions to deploy in google cloud

#### In root directory (Production) create `.gcloudignore` file and add following configurations into it.

```
# Client
/client/*
/client/*/
!/client/build/

# Server
/server/.env
/server/.git
/server/.gitignore
/server/server.js
/server/LICENSE
/server/README.md
/server/package.json
/server/package-lock.json

# Root
.git
.gitignore
README.md
```

#### Also create `app.yaml` in root directory and add following configurations into it.

```
service: default
runtime: nodejs16
handlers:
- url: /.*
  secure: always
  redirect_http_response_code: 301
  script: auto
```

### Your app is ready to be deployed, run following command to deploy in google cloud app engine.

```bash
gcloud app deploy
```

> All Done! You have successfully deployed your app in google cloud. 
