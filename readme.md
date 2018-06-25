## Building APIs with GraphQL, NodeJs and Mongoose
### Setup
from egghead https://egghead.io/lessons/graphql-create-express-server-in-node-js
Using a local mongoDB database
Running 3 shells, mongod, mongo, this app

```
npm install
```
Make sure your MongoDB server is running on your machine
```
mongod

brew update
sudo mkdir /usr/local/Frameworks  - for python 2.7 dependency
brew install mongodb
mongod --config /usr/local/etc/mongod.conf
```
### Run the Application
```
npm start

npm i -s express
npm i -s express-graphql graphql-tools
npm i -s graphql

schema in schema.js
and resolvers.js
```

 - Look at simple string message, echo
 - context used to share data
 - info gives debug info

- allProducts
- define type of Document, id, name, qty
- added temp data array to test
- add in resolvers, Query area

- Add mutation to add product
- Add to schema a productInput schema, with name, qty
- And a Mutation in the resolvers
- Can add with id or none (for array example)
```
npm i -s mongoose
using Promise methods

create models/product.js for model schema
then reference and use in the resolvers
call with
mutation {
  createProduct( input: {
    name: "wonderful",
    qty:7
  })
  {
    _id,qty,name
  }
}

creates db, adds a record and field _v  ?
check with
{
  allProducts{
    name, qty
  }
}

add query to get single product by id
and add resolver
{
  getProduct( _id: "5b23b93e92ab0447e4ced926")
  {
    _id,name, qty
  }
}

create mutation to update product
and resolver
id is required
mutation{
  updateProduct(_id: "5b23b2c992ab0447e4ced925",
    input: {
    name: "geronimo"
    }) {
    _id
    qty
  }
}

add delete product mutation to schema
and resolver
mutation{
  deleteProduct( _id: "5b23b93e92ab0447e4ced926")
  {
    _id,name, qty
  }
}

- combine two mongodb tables/collections

async getCombined(_, { name }) {
    var p = await Product.findOne({name});
    var r = await Reference.findOne({ref: p.qty});
    return { name : p.name, colour : r.value};
}
```