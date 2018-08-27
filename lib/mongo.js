const mongo = require('./mongo_conn');
const { ObjectID } = require('mongodb');
const LIMIT = 20;

class Mongo {

    constructor(table, dbName = process.env.AMK_MONGO_DEFAULT_DATABASE) {
        this.TABLE = table;
        this.client = mongo();
        this.dbName = dbName;
    }

    load() {
        return this.client.then((client) => {
            return client.db(this.dbName)
                .collection(this.TABLE);
        });
    }

    findOne(param, projection) {
        return this.load()
            .then((db) => {
                return db.find(param, projection)
                    .limit(1)
                    .next();
            });
    }

    find(param, options) {
        options = Object.assign({}, {
            limit: LIMIT
        }, options);
        return this.load()
            .then((db) => {
                return db.find(param, options)
                    .toArray();
            });
    }

    findAll(param, options) {
        return this.load()
            .then((db) => {
                return db.find(param, options)
                    .toArray();
            });
    }

    insertOne(doc, options) {
        return this.load()
            .then((db) => {
                return db.insertOne(doc, options);
            });
    }

    insertMany(docs, options) {
        return this.load()
            .then((db) => {
                return db.insertMany(docs, options);
            });
    }

    updateOne(filter, update, options) {
        return this.load()
            .then((db) => {
                return db.updateOne(filter, update, options);
            });
    }

    updateMany(filter, update, options) {
        return this.load()
            .then((db) => {
                return db.updateMany(filter, update, options);
            });
    }

    deleteOne(filter, options) {
        return this.load()
            .then((db) => {
                return db.deleteOne(filter, options);
            });
    }

    deleteMany(filter, options) {
        return this.load()
            .then((db) => {
                return db.deleteMany(filter, options);
            });
    }

    findOneAndUpdate(filter, update, options) {
        return this.load()
            .then((db) => {
                return db.findOneAndUpdate(filter, update, options);
            });
    }

    sum(query, options) {
        return this.load()
            .then((db) => {
                return db.count(query, options);
            });
    }

    aggregate(param, options) {
        return this.load()
            .then((db) => {
                return db.aggregate(param, options)
                    .toArray();
            });
    }

    toObjectID(id) {
        return new ObjectID(id);
    }

}
module.exports = Mongo;