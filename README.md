# Shopping Protal Apis
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `yarn` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn, so just run the following command.

      $ npm install -g yarn

---
### Mongodb
- #### Mongodb Installation
  After installing node and yarn, this project will need mongodb to store data, so just run the following command.

  Just go on https://www.mongodb.com/docs/manual/administration/install-community/ and download mongodb
---

## Install

    $ git clone https://github.com/yuvrajsingh10/shopping-portal-apis.git
    $ cd Shopping-portal
    $ yarn install

## Running the project

    $ yarn run dev


### Apis

- #### Fetch data
```
  GET     localhost:3000/api/product/all-products
  GET     localhost:3000/api/product/:id
```
- #### Update Specific Products
```
  PATCH   localhost:3000/api/product/:id
```
- #### Create Product
```
  PATCH   localhost:3000/api/product/new-product
```

- #### Delete Products
```
  Delete  localhost:3000/api/product/:id
```