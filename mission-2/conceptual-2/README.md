Server Build with Express.js

Setup Basic Server

Library Management

- book
- auth
- borrow

Akta server make korar jonno starting ai

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
-
