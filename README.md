# AMK-MONGO

## Setup
Set the following environment variables
- AMK_MONGO_USERNAME
- AMK_MONGO_PASSWORD
- AMK_MONGO_HOSTS
- AMK_MONGO_DEFAULT_DATABASE

you can achieve this by choosing one of the options below:
1. use [dotenv](https://github.com/motdotla/dotenv) to set the variables
2. issue the command ``` export AMK_MONGO_USERNAME=username ```
3. put it on the ``` .bashrc ``` or ```.bash_profile``` file
4. for AMK_MONGO_HOSTS , it should be a string like '172.16.1.90:27017,172.16.1.91:27017,172.16.1.92:27017'

## Usage

After setting up environment variables, inherit from this `amk-mongo`. refer to code snipet below:

**users.js**
```js
const Mongo = require('amk-mongo');
class Users extends Mongo {
    constructor() {
        super('users', 'dbname') // dbname is optional if the AMK_MONGO_DEFAULT_DATABASE has been set.
    }
}
module.exports = Users
```

using **users.js**
```js
const Users = require('./users');
const users = new Users();
users.find({}, {limit: 30}).then( results => {
    //will return a list of user object
})
```

## API

#### ```find(filter, options)```
For filter and options usage refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#find)

##### Returns
* **_(Array|Promise)_** - result set in an array or query object
---
#### ```findAll(filter, options)```
Will return all the match results;
##### Returns
* **_(Array|Promise)_** - result set in an array or query object
---
#### ```findOne(query, options)```
Will return the match document;
##### Returns
* **_(Object|Promise)_** - null or the match document;
---
#### ```insertOne(doc, options)```
Inserts a single document into MongoDB. Doc and options refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertOne)
##### Returns
* **_(insertOneWriteOpResultObject|Promise)_** [insertOneWriteOpResultObject](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~insertOneWriteOpResult)
---
#### ```insertMany(docs, options)```
Inserts an array of documents into MongoDB. Docs and options refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertMany)
##### Returns
* **_(insertWriteOpResultObject|Promise)_** [insertWriteOpCallback](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~insertWriteOpResult)
---
#### ```updateOne(filter, update, options)```
Update a single document on MongoDB. Filter, update, options refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#updateOne)
##### Returns
* **_(updateWriteOpResultObject|Promise)_** [updateWriteOpResultObject](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~updateWriteOpResult)
---
#### ```updateMany(filter, update, options)```
Update multiple documents on MongoDB. 
##### Returns
* **_(updateWriteOpResultObject|Promise)_**  [updateWriteOpResultObject](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~updateWriteOpResult)
---
#### ```deleteOne(filter, options)```
Delete a document on MongoDB. refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#deleteOne)
##### Returns
* **_(deleteWriteOpResultObject|Promise)_**  [deleteWriteOpResultObject](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~deleteWriteOpResult)
---
#### ```deleteMany(filter, options)```
Delete multiple documents on MongoDB. refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#deleteMany)
##### Returns
* **_(deleteWriteOpResultObject|Promise)_**  [deleteWriteOpResultObject](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~deleteWriteOpResult)
---
#### ```findOneAndUpdate(filter, update, options)```
Find a document and update it in one atomic operation, requires a write lock for the duration of the operation. refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndUpdate)
##### Returns
* **_(findAndModifyWriteOpResultObject|Promise)_**  [findAndModifyWriteOpResultObject](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~findAndModifyWriteOpResult)
---
#### ```sum(query, options)```
Count number of matching documents in the db to a query. Alias for [count](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#count) in Mongo.
##### Returns
* **_(Number|Promise)_** The count of documents that matched the query.
---
#### ```aggregate(pipeline, options)```
Execute an aggregation framework pipeline against the collection, needs MongoDB >= 2.2
Refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#aggregate)
##### Returns
* **_(Array|Promise)_** All the documents the satisfy the cursor. Refer to [this](http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#~toArrayResultCallback)
---
#### ```toObjectID(id)```
Create a new [ObjectID](http://mongodb.github.io/node-mongodb-native/3.0/api/ObjectID.html) instance. Id parameter is optional.
##### Returns
* **_(ObjectID)_** 
---


