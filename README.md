# Shopping Site For Shoppers

I used boilerplate provided to unite my Express and React app.

## Setup

#### Node

For Linux:
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For Mac:
```
brew install node

#### MongoDB

Install the community edition [here](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials).

#### React - running on port 3000 (front end)

```
npm install -g create-react-app
```

To create a new React app:
```
create-react-app name_of_app
```

To run the app, cd into the directory and do:
```
npm start
```

## Running the boilerplate
## Backend - Express+Mongoose
Run Mongo daemon:
```
sudo mongod
```
Mongo will be running on port 27017.

To create a database:
```
mongo
``` 
This will open the mongo shell. Type in ```use shopping``` to create a new database called users.

Run Express: running on port 4000
```
cd backend/
npm install
npm start
```

Run React:
```
cd frontend
npm install/
npm start
```
Navigate to localhost:3000/ in your browser.

### Actions

All of the actions  involving getting or putting data to the server are defined in this folder. 

### Components

All components like view list or login/signup modal are displayed here.

### Config

All config data (server URI) etc. are stored here

### Utils

All utility functions used commonly by many components are storeds here.

The entire frontend is rendered at `index.html` starting from `index.js`, which renders the `Navbar.js` file, which loads all the routes, which links all the components together.

------
### Models

1. Order: a many many relation between customer and product
2. Product: that is created by the vendor
3. User: maybe a customer or a vendor

### Routes (databases created)

1. `customers.js` - routes like view my orders, search for products, or simply edit my order. )all customer actions
2. `users.js` - for login and logout
3. `products.js` - for create product, dispatch product, cancel product, etc. (all vendor actions)

### Utilities and config

Helper functions and data that is used to run the server.

### Validation

Validation for each of the actions being performed in the routes mentioned above.

### Views

None

