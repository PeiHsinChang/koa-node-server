# Install server

to make a node server to make APIs request and make http status with chatGpt Helping.

## Requirements

- Node.js v22.14.0 ^

## Usage

- typescript
- eslint

##

1. npm init
2. insatll koa
3. install typescript
4. setting koa typescript config (ps. no need add type:"module" in package.json)
5. install eslint
6. add koa-router & koa-middleware
7. add tw stock api services
8. add nodemon for automatically restarting

9. file system like below
   /koa-server
   │── /src
   │ ├── /routes
   │ │ ├── index.ts
   │ │ ├── users.ts
   │ ├── /middleware
   │ │ ├── logger.ts
   │ │ ├── errorHandler.ts
   │ ├── /services
   │ │ ├── some services \*.ts  
   │ ├── app.ts
   │── package.json
   │── server.ts
   │── tsconfig.json
   │── .eslintrc.js
   │── .gitignore
