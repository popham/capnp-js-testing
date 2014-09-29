var types = require('./rTypes');
    var scope = {};
    var id;
    for (id in types) {
        scope[id] = types[id];
    }
    module.exports = scope;
