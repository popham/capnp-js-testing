var types = require('./bTypes');
    var scope = {};
    var id;
    for (id in types) {
        scope[id] = types[id];
    }
    module.exports = scope;
