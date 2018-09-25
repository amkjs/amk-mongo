const { MongoClient } = require('mongodb');
const CONFIG = require('../config');
let hosts;
let mongo;
if (CONFIG.AMK_MONGO_HOSTS) {
    const _hosts = [];
    hosts = CONFIG.AMK_MONGO_HOSTS.split(',');
    _hosts.push(hosts);
    hosts = _hosts;
}

const conn = {
    hosts: hosts || ['127.0.0.1:27017']
};

function connect(config) {
    if (mongo) {
        return mongo;
    }
    let url = 'mongodb://';
    let hosts = (config && config.hosts) || conn.hosts;
    let host = hosts.join(',');
    if (config && config.user) {
        url += config.user + ':';
    } else if (CONFIG.AMK_MONGO_USERNAME) {
        url += CONFIG.AMK_MONGO_USERNAME + ':';
    }

    if (config && config.password) {
        url += config.password + '@';
    } else if (CONFIG.AMK_MONGO_PASSWORD) {
        url += CONFIG.AMK_MONGO_PASSWORD + '@';
    }

    url += host + '/';

    if (config && config.database) {
        url += config.database;
    } else if (CONFIG.AMK_MONGO_DEFAULT_DATABASE) {
        url += CONFIG.AMK_MONGO_DEFAULT_DATABASE;
    }

    let option = {
        useNewUrlParser: true
    };

    if (config && config.option) {
        Object.assign(option, config.option);
    }

    return MongoClient.connect(url, option);
}

module.exports = connect;
exports.config = CONFIG;