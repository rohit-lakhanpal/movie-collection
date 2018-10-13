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

To after that all you need to do is install your dependencies & start your application ..
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
1. Under the "Collections" you should now see "the RESTful movies app" with all the endpoints that are accessible ![step 3](/resources/img/postman-3.png)
1. You can now click on any of the endpoints & make requests

Have a bit of fun with the APIs now, you deserve it :)

## Testing the code 
### Executing Local tests
Executing the npm test command runs the controller & service tests located in the /test folder like so .. 

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
I have used Azure DevOps for the Build-Test-Deploy ALM Life cycle. The Project is located at [https://dev.azure.com/rohitl/movie-collection](https://dev.azure.com/rohitl/movie-collection). Instructions on viewing the results of the CI Pipeline is available using the aforementioned link.

The tests for the CI pipeline run the following command that allows using the mocha-junit-reporter to run the **controller & service test**. The tests on running, create a test results file at "/test-results/ci.results.xml" like so  ..

```bash
$ npm run citests
```

### CI Build Status
[![Build Status](https://dev.azure.com/rohitl/movie-collection/_apis/build/status/movie-collection-Node.js%20With%20gulp-CI)](https://dev.azure.com/rohitl/movie-collection/_build/latest?definitionId=3)

My CI build settings for the APP were as shown below. I've used the following article to help guide me [https://blogs.msdn.microsoft.com/nilayshah/2018/01/29/vsts-ci-to-build-and-test-node-js-app-with-gulp-and-mocha/](https://blogs.msdn.microsoft.com/nilayshah/2018/01/29/vsts-ci-to-build-and-test-node-js-app-with-gulp-and-mocha/).

#### CI Build Steps:
![1](/resources/img/build-1.png)
![2](/resources/img/build-2.png)
![3](/resources/img/build-3.png)
![4](/resources/img/build-4.png)
![5](/resources/img/build-5.png)
![6](/resources/img/build-6.png)
![7](/resources/img/build-7.png)
![8](/resources/img/build-8.png)
![9](/resources/img/build-9.png)
![10](/resources/img/build-10.png)

## Creating the Azure Resources for Deployment
Now lets use Azure CLI to deploy this app. I have used the following post to guide me in deploying this app: "[Create a web app and deploy files with FTP](https://docs.microsoft.com/en-au/azure/app-service/scripts/app-service-cli-deploy-ftp?toc=%2fcli%2fazure%2ftoc.json)".

### What is Azure CLI
The Azure CLI is Microsoft's cross-platform command-line experience for managing Azure resources. You can use it in your browser with Azure Cloud Shell, or install it on macOS, Linux, or Windows and run it from the command line.

### Pre-requisites
To deploy the application, we will need to decide the following info
1. Download and install the Azure CLI toolset (you can get it [here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest))
1. A resource group (in my case i'm creating a new one called `rg-ause-movie-collection`)
1. Deployment location (i'll be deploying to the `Australia Southeast` data center)
1. An App Service Plan & the tier (i'm creating `rg-ause-appsvcplan-free` in using the free tier)
1. Name of web application (i'm calling it `rg-ause-webapp-movie-collection`)
1. NodeJS version (you can check available runtimes using `az webapp list-runtimes`)

### Steps to create the necessary resources
1. Start by logging in 
    ```bash
    $ az login
    ```

1. List available subscriptions for your accounts (in case you have more than 1 Subscription accessible to your account)
    ```Bash
    $ az account list
    [
      {
        "cloudName": "AzureCloud",
        "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "isDefault": false,
        "name": "Subscription 1",
        "state": "Enabled",
        "tenantId": "TIDXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "user": {
          "name": "roh.it@hotmail.com",
          "type": "user"
        }
      },
      {
        "cloudName": "AzureCloud",
        "id": "YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY",
        "isDefault": false,
        "name": "Subscription 2",
        "state": "Enabled",
        "tenantId": "TIDYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY",
        "user": {
          "name": "roh.it@hotmail.com",
          "type": "user"
        }
      }
    ]
    ```

1. Select your subscription from the list above
    ```bash
    $ az account set -s "Subscription 2"
    ```

1. You now need to get your **Subscription Id**
     ```bash
    $ az account show
    {
        "cloudName": "AzureCloud",
        "id": "YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY",
        "isDefault": false,
        "name": "Subscription 2",
        "state": "Enabled",
        "tenantId": "TIDYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY",
        "user": {
          "name": "roh.it@hotmail.com",
          "type": "user"
        }
      }
    ```
    > ### Important: 
    > 
    > You now need to copy the value in the `id` field and paste it in the `./resources/deploy/parameters.json`. In the example shown above, the id is *YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY*, so the parameters.json file needs to be modified like so ..
    >  
    > ![parameters](/resources/img/parameters.png) 

1. List the resource groups available to you
    ```bash
    $ az group list
    ```

1. You can either choose one of the groups listed above OR create a new one like so ..
    ```bash
    $ az group create --name rg-ause-movie-collection --location "Australia Southeast"
    ```
1. Create an App Service plan in `FREE` tier.
    ```bash    
    $ az appservice plan create --name rg-ause-appsvcplan-free --resource-group rg-ause-movie-collection --sku FREE
    ```
1. Now its time to create our webapp by calling the deploy script
    ```bash
    $ cd resources/deploy

    $ sh deploy.sh -i YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY -g rg-ause-movie-collection -n rg-ause-webapp-movie-collection -l "Australia Southeast"
    ....
    Template has been successfully deployed
    ```
    > If you are on a windows machine you can run the `deploy.ps1` powershell script instead of the `deploy.sh` shell script.

1. You should now be able to see your app within the Azure Portal ![created app](/resources/img/created-app.png)

1. On navigating to the web app you will see this ..
![created app](/resources/img/non-init-app.png)

## Deploying this app
I will be using the Azure DevOps Release Pipeline to automate this deployment. Since we previously used the same tool to build the app, the deployment is super simple.

You can follow along with these screenshots ...
<<ADD Screenshots HERE>>

## Credits
The code written has been forked & modified from Samuele Zaza's [original repo](https://github.com/samuxyz/movie-collection) (if you are interested in the code, Sam has written an excellent post detailing [how to build RESTful apis with NodeJS](https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger)).
