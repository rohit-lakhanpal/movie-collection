# A RESTful Movies {API} ![Build Status](https://travis-ci.com/rohit-lakhanpal/movie-collection.svg?branch=master)

## Description
About this app ...

## Quick Start
To run this app locally, you need the following installed:
1. node.js
1. a code editor of your choice
1. a git client

Next simply pull the repo & make it your working directory like so ..
```nodejs
$ git clone https://github.com/rohit-lakhanpal/movie-collection.git

$ cd movie-collection
```

To after that all you need to do is install your dependancies & start your application ..
```nodejs
$ npm install

$ npm start
```

You should now see a message that indicates that the app is now running.
```nodejs
$ npm start

> movie-collection@1.0.0 start /users/ro/repos/movie-collection
> node index.js

info [Sun Oct 07 2018 19:35:04 GMT+1100 (AEDT)]  [APP INIT]: Start logger ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Setting config ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Creating rest endpoints ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Installing swagger middleware ...
info [Sun Oct 07 2018 19:35:05 GMT+1100 (AEDT)]  [APP INIT]: Now listening on port 10010 ...
```

Now that your app is running, try calling the /movie RESTful api endpoint & en sure you get a result
```nodejs
$ curl http://localhost:10010/movie
{"movies":[ ... ]}
```




## Code structure



## Credits
The code written has been forked & modified from Samuele Zaza's [original repo](https://github.com/samuxyz/movie-collection) (if you are interested in the code, Sam has written an excellent post detailing [how to build RESTful apis with NodeJS](https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger)).
