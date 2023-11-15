# 4 libs to use with node-js

This code was created based on [this](https://www.youtube.com/watch?v=mxiRCcnsKDw) [Rocketseat](https://www.rocketseat.com.br/) tutorial.

- Init a node project.

``` shell
npm init -y
```

- Install typescript as dev dependency.

``` shell
npm install typescript -D
```

- Create tsconfig.json file.

``` shell
npx tsc --init
```

- Change "target" inside tsconfig.json to "es2020".

``` json
{
  /* Language and Environment */
  "target": "es2020" 
},
```

- Create "src/server.ts" and add a "dummy" interface just for tests.

- Install tsx (1st) as dev dependency. This lib use as base the esbuild and is ~used to execute typescript code~.

``` shell
npm install tsx -D
```

- Change "scripts" in package.json to use tsx

``` json
  "scripts": {
    "start": "tsx src/server.ts",
    "start:dev": "tsx watch src/server.ts"
  },
```

- Install tsup (2nd) as dev dependency. This lib use as base the esbuild too and is ~used in the build process of the application~, this is important because in production you want to execute node and not tsx, and node only supports javascript code.

``` shell
npm install tsup -D
```

- Change "scripts" in package.json to use tsup

``` json
  "scripts": {
    "build": "tsup src"
  },
```

- Install vitest (3rd) as dev dependency. This lib use as base the esbuild too and is ~used to perform tests in the application~.

``` shell
npm install vitest -D
```

- Change "scripts" in package.json to use vitest

``` json
  "scripts": {
    "test": "vitest"
  },
```

- Install zod (4th). This is ~used to help in runtime validations~.

``` shell
npm install zod
```
