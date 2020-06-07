# Sample Project to demo code removale in TypeScript

## Goal 

I want to remove all logger related code from my production JavaScript pages which are compiled from TypeScript.

In order to see how I can get rid of my log messages, as I was testing the approaches discuessed 
[on SFO](https://stackoverflow.com/questions/45776264/remove-some-code-lines-in-production-distribution-files):

## Preparation

Make sure you have `yarn` installed. I'm currently using the latest version 1.x.

Clone the repo and run `yarn install` in order to have all the dependencies installed. 

## Option 1: Use Webpack Environment Variable

Use the NODE_ENV Variable to check in which mode we are running. Based on this information, the code will be included in
the production build or not. In production also the `if` will be removed. 

```JavaScript
if (process.env.NODE_ENV === 'development') {
    console.log("This will be removed including the IFs");
}
```

There are two problems with this solution
* used `import` statements and subsequent dependencies or classes that are not anymore required will be still put into the package.
* I have the put an `if` around each statement.

Con:
* Imports are still part of the production code.

Pro:
* Part of the webpack build, no extras required.

Run `yarn o1` to compile the TS. If you open the index.html and check the output in the console, you will only see one line.

## Option 2: Block Strip

The [webpack-strip-block](https://www.npmjs.com/package/webpack-strip-block) plugin removed code at compile time which 
is between dedicated comments.

```JavaScript
var makeFoo(bar, baz) {
    // The following code will be stripped with our webpack loader
    /* develblock:start */
    if (bar instanceof Bar !== true) {
        throw new Error('makeFoo: bar param is required and must be instance of Bar');
    }
    /* develblock:end */
 
    // This code would remain
    return new Foo(bar, baz);
}
```

Con:
* Requires a lot of changes to the code.

Pro:
* Plugin is under active development.
* Unused imports are cleaned automatically

Run `yarn o2` to compile the TS. If you open the index.html and check the output in the console, you will only see one line.

## Option 3: String Replacement

The [string-replace-webpack-plugin](https://www.npmjs.com/package/string-replace-webpack-plugin) give us the possibility 
to remove dedicated regex. This is pretty much exactly what I need and on top, I don't have to make changes to my given codebase. 

Con:
* It is not developed actively anymore. (last commit in 2017)

Pro:
* I don't have to make any changes to my code
* Unused imports are cleaned automatically

Run `yarn o3` to compile the TS. If you open the index.html and check the output in the console, you will only see one line.

