# My Notes from The Odin Project
## Left off at: 
  - Javascript 
      - ES6 Modules
        - Webpack

## Useful Tools:
  - ([**Prettier**](https://prettier.io/playground/)) 
    - Prettier is an opinionated code formatter
  - ([**ESLint**](https://eslint.org/))
    - ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
  - ([**JSONLint**](https://jsonlint.com/))
    - JSONLint is a validator and reformatter for JSON, a lightweight data-interchange format.
  - ([**Babel**](https://github.com/babel/babel-loader))
    -  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
  - ([**JSONFormatter**](https://jsonformatter.curiousconcept.com/#))
    - The JSON Formatter was created to help folks with debugging. As JSON data is often output without line breaks to save space, it can be extremely difficult to actually read and make sense of it. This tool hoped to solve the problem by formatting and beautifying the JSON data so that it is easy to read and debug by human beings. 

## Useful definitions: 
  - The **Fetch API**  provides an interface for fetching resources (including across the network).
  - A **callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  - **Synchronous code** runs sequentially from top to bottom.
  - **Asynchronous functions** are functions that can happen in the background while the rest of your code executes.
    - _Usually things that have to talk to hard drives or networks will be asynchronous. If they just have to access things in memory or do some work on the CPU they will be synchronous._
  - Essentially, a ([**promise**](https://www.youtube.com/watch?v=DHvZLI7Db8E&t=470s)) is an object that might produce a value at some point in the future. ([Helpful Link.](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md))
    - The reason it's difficult for us as developers to write async evented code, especially when all we have is the callback to do it, is that stream of consciousness thinking/planning is unnatural for most of us. We think in step-by-step terms, but the tools (callbacks) available to us in code are not expressed in a step-by-step fashion once we move from synchronous to asynchronous. And that is why it's so hard to accurately author and reason about async JS code with callbacks: because it's not how our brain planning works. 
  - **"Callback hell"** - The brittle nature of manually hardcoded callbacks; once you end up specifying (aka pre-planning) all the various eventualities/paths, the code becomes so convoluted that it's hard to ever maintain or update it. Understanding the async flow in such callback-laden code is not impossible, but it's certainly not natural or easy, even with lots of practice. 
  - **API** is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.
    - An analogy: The waiter is the messenger – or API – that takes your request or order and tells the kitchen – the system – what to do. Then the waiter delivers the response back to you; in this case, it is the food. 
