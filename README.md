# jest-jspm-es5

### CREDIT

This library is a backport of (https://github.com/yoavniran/jest-jspm) because I needed it on older versions of NodeJS
that didn't support some of the newer ES6 syntax that was being used. If you don't run an older version of Node it
probably makes more sense to use that version of the library.

A Helper to generate [Jest](https://facebook.github.io/jest/) configuration for a JSPM/SystemJS based application.
 Since System JS applies its own logic for how to resolve dependencies Jest cannot locate them while running.
 This library helps you test your app with Jest by generating the correct mappings configuration Jest understands.
 
 > Gulp users see: [gulp-jest-jspm-es5](https://www.npmjs.com/package/gulp-jest-jspm-es5)
 
## Usage

Install: 

 ```bash
 $ npm install --save-dev jest-jspm-es5
 ```


In your code:

```javascript

import makeJestConfig from "jest-jspm-es5";

const jestConfig = makeJestConfig({
	//...options
});

```

The options accepted by the make method are:


 > **jestConfig** - config object or string path to config json file (default: {})
 
 > **jestOptions** - config object passed to the Jest-CLI (for example {debug: true}) (default: undefined)
 
 > **systemJs** - location of system js (default: "./jspm_packages/system")
 
 > **sjsConfigFile** - location of System JS config file (default: "./config")
 
 > **loadSjsConfFile** - whether to load the System JS config file (default: true)
 
 > **jspmPackages** - location of jspm packages (default: "./jspm_packages")
 
 > **nodeModules** - location of node modules dir (default: "./node_modules")
 
 > **displayWarnings** - whether the plugin will output warnings to console (default: false)