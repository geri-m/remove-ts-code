# Sample Project to demo code removale in TypeScript

https://stackoverflow.com/questions/45776264/remove-some-code-lines-in-production-distribution-files

## Goal 

I want to remove all logger related code from my production JavaScript pages which are compiled from TypeScript.


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

I like the idea, cause this is kind of what I was looking for. But I was not able to make this work out.

* I'm not (yet) sure how to combine two loaders.
* If I set `module.exports = { ...}`, I get the erro `Invalid configuration object`
 
So I skip this for the moment. (no changes to the webpack files).

## Option 3: String Replacement

The [string-replace-webpack-plugin](https://www.npmjs.com/package/string-replace-webpack-plugin) give us the possibility 
to remove dedicated regex. This is pretty much exactly what I need and on top, I don't have to make changes to my given codebase. 



Con:
* It is not developed actively anymore. (last commit in 2017)