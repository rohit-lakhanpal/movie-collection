# the RESTful movies app 
[![Build Status](https://dev.azure.com/rohitl/movie-collection/_apis/build/status/movie-collection-Node.js%20With%20gulp-CI)](https://dev.azure.com/rohitl/movie-collection/_build/latest?definitionId=3)

## Description
This is a simple app that exposes a RESTful {:/movie} API endpoints. 

This app serves as the sample app to explore **exposing back-end APIs via Azure's API Gateway**  (API Management Service). 

The supporting blog posts are available at [blog.rohitl.com/search/label/APIm](http://blog.rohitl.com/search/label/APIm).

The APIs exposed look like so ...

![Exposed APIs](/resources/img/swagger.png)

## Quick Start
To run this app locally, you need the following installed:
1. node.js
1. a code editor of your choice (vscode maybe)
1. a git client
1. postman

Next simply pull the repo & make it your working directory like so ..
```nodejs
$ git clone https://github.com/rohit-lakhanpal/movie-collection.git

$ cd movie-collection
```

To after that all you need to do is install your dependancies & start your application ..
```bash
$ npm install

$ npm start
```

You should now see a message that indicates that the app is now running ..
```bash
$ npm start

> movie-collection@1.0.0 start /users/ro/repos/movie-collection
> node index.js

info [Sun Oct 07 2018 19:35:04 GMT+1100 (AEDT)]  [APP INIT]: Start logger ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Setting config ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Creating rest endpoints ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Installing swagger middleware ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Now listening on port 10010 ...
```
Now that your app is running, try calling the /movie RESTful api endpoint & ensure you get a result ..
```bash
$ curl http://localhost:10010/movie
{"movies":[ ... ]}
```

Your swagger file is available at /swagger. Call it and make sure you are able to see your swagger file ..
```bash
$ curl http://localhost:10010/swagger
{"swagger": "2.0", ... }
```

Or just open it in your browser window ..

![Exposed Swagger Endpoint](/resources/img/swagger-hosted-localhost.png)

## Using **the RESTful movies app**
To ensure that your app is working as expected, you can use a utility like [postman](https://www.getpostman.com) to interact with your application like so ..

1. Ensure that your app is running 
1. Open postman & click the import button ![step 1](/resources/img/postman-1.png)
1. In the popup, click "Import From Link" & enter the URL to your swagger file [http://localhost:10010/swagger](http://localhost:10010/swagger) ![step 2](/resources/img/postman-2.png)
1. Then simply click import
1. Under the "Collections" you should now see "the RESTful movies app" with all the endpoints that are accessable ![step 3](/resources/img/postman-3.png)
1. You can now click on any of the endponts & make requests

Have a bit of fun with the APIs now, you deserve it :)

## Testing the code 
### Executing Local tests
Executing the npm test command runs the controller & srervice tests located in the /test folder like so .. 

```bash
$ npm test

> movie-collection@1.0.0 test /Users/ro/repos/movie-collection
> swagger project test

Running tests in: /Users/ro/Workspace/github/rohit-lakhanpal/movie-collection/test...
  controllers
    moviesController
      #/movie
        ✓ should return an array (85ms)
      #/movie/{id}
        ✓ should return an object

  services
    moviesService
      #getAll
        ✓ should exist
        ✓ should return an array
      #getById
        ✓ should exist
        ✓ should return null when no id specified
        ✓ should return null when id not found
        ✓ should respond with a movie
      #save
        ✓ should exist
      #update
        ✓ should exist
      #deleteById
        ✓ should exist


  11 passing (161ms)

done

```

### CI Tests
I have used Azure DevOps for the Build-Test-Deploy ALM Lifecycle. The Project is located at [https://dev.azure.com/rohitl/movie-collection](https://dev.azure.com/rohitl/movie-collection). Instructions on viewing the results of the CI Pipeline is available using the aforementioned link.

The tests for the CI pipeline run the following command that allows using the mocha-junit-reporter to run the **controller test**. The tests on running, create a test results file at "/test-results/ci.controller.results.xml" like so  ..

```bash
$ npm run citestcontrollers
```

The **services** can also be tested. Much like the controllers, the test results file generated here is "test-results/ci.service.results.xml". The test can be run like so ..

```bash
$ npm run citestservices
```

### CI Build Status
[![Build Status](https://dev.azure.com/rohitl/movie-collection/_apis/build/status/movie-collection-Node.js%20With%20gulp-CI)](https://dev.azure.com/rohitl/movie-collection/_build/latest?definitionId=3)

## Code structure
...

## Credits
The code written has been forked & modified from Samuele Zaza's [original repo](https://github.com/samuxyz/movie-collection) (if you are interested in the code, Sam has written an excellent post detailing [how to build RESTful apis with NodeJS](https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger)).
