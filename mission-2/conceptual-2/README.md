Server Build with Express.js

Setup Basic Server

Library Management

- book
- auth
- borrow

# Akta server make korar jonno starting ai

- `npm init -y` diye server jonno normal boylar palate dorkar ta chole asbe
- Then we install some package : `express`, `cors`, `dotenv`, `pg`
- Then most important part is install TS `npm i typescript` for install ts in my server
- Then for ts config file i run `npx tsc --int`
- Setup the tsconfig file and i node devdependenci
- set `moduleResolution : bundler` -> amader ai server kemon beheviar , import export kemne hobe ai sob difine kore thaki amra
- package.json file a `type : module` diye dibo also tsconfig.json file a `module : esnext` kore felbo
- then akta src folder and dist folder make korbo jar src folder ar vetor app.ts and server.ts thakbe
- app.ts ar vetor application ar sob code thakbe and ai application ke run or listen korbe server.ts
- Then in tsconfig file in the bottom we write `include : ["src/**/**"]` -> এর মানে হলও সে এই এই ফাইল কে পরবে then তার নিছে লেখব, `exclude : ["node_modules", "dist"]` -> এর মানে হলও যে ও এই ফাইল পরবে না
- make the application
- এখন application ke run করার জন্য `npm i --save-dev tsx` করে depdependencies a tsx নামিয়ে ফেলব জাতে server live update দেখতে পারি তার পাসা পাসি package.json এ scripts ar vetor `"dev" : "tsx watch src/app.ts"` and `"start" : "tsx dist/app.js"`
- Then app কে Listen করব server.ts file এ
- Server theke app ke listen korle package file a kisu change korte hobe
- app.ts এ app.use() এর ভেতর cors() use korbo unknown client theke server ke protect korar jonno tai app.ts এ আমরা লেখি ঃ

```typescript
app.use(
  cors({
    origin: "http://localhost:5000/",
  }),
);
```

- Then আমরা `express.json()` use kori server a json data neyar and deyar jonno
- Then আমরা `express.urlencoded()` server a img niya kaj korar somoy ata kaje dey also ar vetor `{extended:true}` dile ai "express.urlencoded()" jotoi nested kisu asuk na keno ta se nibe and false dile se nested data gulo nibe na

## env config part

- 1st .env file make kore and sekhane envairoment variable set korbo chaile poreo korte pari
- 2nd src file config/index.ts file nei
- 3rd config name akta obj nei jar vetor akta sokol variable ar value niye nibo then ai obj ke export default kore dibo
- 4th .env file আমরা এর পাশাপাশি ফাইল এ বা পাশাপাশি ফোল্ডার এর ফাইল use করতে পারি, কিন্তু আমরা এখানে আনেক দূরে use করতে চাইতাসি তাই `dotenv.config({ path: path.join(process.cwd(), ".env") });` ব্যাবহার করে এই ফাইল কে .env চিনায়া দিতাসি

## Database connect to server

- 1st src/config এর ভেতর db.ts create korbo
- 2nd pg package theke Pool class ke ber kore nibo
- 3rd Pool class diye akta connection make korbo DB ar sathe :

```typescript
const pool = new Pool({
  connectionString: config.connection_string,
});
```

- 4th DB ar connection string .env file a rakhbo
- 5th schema make করার জন্য src/config এর ভেতর initDb.ts নিবো এবং সেখানে লিখবো:

```typescript
import { pool } from "./db";

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(25) CHECK (role IN ('admin', 'member')) DEFAULT 'member',
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()

    );
`;

export const initDB = async () => {
  await pool.query(createTableQuery);
  console.log("Database table created!");
};
```

সর্বশেষ এ আমাদের টেবিল তইরী করা হইয়া গেসে তো এখন আমরা src এর ভেতর modules নামে একটা ফোল্ডার নিবো then এই ফোল্ডার এর ভেতর defrent feature এর জন্য কাজ করব
evey modules folder have :

- event.route.ts
- event.controller.ts
- event.service.ts
- event.interface.ts (optional)

## Password Hashing

password hashing korar jonno amra `npm i bcryptjs` করি সুন্দর করে এটা করতে গেলে এমনে করা যায়,

- utils ফোল্ডারে passwordHelpers বা অন্য কনও নামে ফাইল make korbo
- hassword, comparepassword এর মত কাজ ওখানে করব then OBJ ভেতর দিয়ে exprt করে দিবো
- সর্বশেষ এ post method এ এটা use করব password hash korar jonno

## Modules folder এর বিবরণ

- route.ts এ আমরা বিভিন্ন route গুলোকে সামলাবো , যে কনটা কোন route এ যাবে, পরে এখান থেকে তার crontroller.ts পাদাইয়া দিবো।
- controller.ts এ আমরা server/client response handle করব, যদি কনও Bussiness logic handle করার
- service.ts এ আমরা Bussiness logic handle controller এ পাদাইয়া দিবো। সেখান থেকে controller response send করে দিবে।

## JWT token create

- 1st src/utils/jwthelpers.ts create করতে হবে
- 2nd jwthelpers.ts ar vetor amra genereateToken function make korbo , ja return korbe jwt token
- jwt token retunr korar jonno `npm i jsonwebtoken` kore seta import korbo then jwt ar sign method use korbo, ja (DataBody, jwt_secret, expaire_date nibe)
- 3rd jwthelpers.ts ar vetor amra verifyToken fucntion korbo, ja token ta verify kina ta return korbe
- jwt ar verify method use korbo, ja (DataBody, jwt_secret)
- last make a obj then export it.

## Global Error Handler

- src/middleware ar vetor globalErrorHandler.ts name akta folder create korbo
- akta funciton make korbo jar peramitter a hobe `(err,req,res,next)` error all time first a bosbe
- (err) theke statusCode ber kore nibo
- message ber kore nibo

```typescript
import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode ?? 500;
  let message = err.message ?? "Internal Server Error";
  let errDetails = err;

  res.status(statusCode).json({
    success: false,
    message: message,
    data: errDetails,
  });
};

export default globalErrorHandler;
```
