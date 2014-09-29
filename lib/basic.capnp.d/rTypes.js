var reader = require('capnp-js/reader/index');
    var types = {};
    types["0xf5847f5f1560117d"] = reader.structure(7, 8, 8);
    types["0xbae01ca650e8d2fe"] = reader.structure(6, 0, 8);
    types["0xd9a85106b708a658"] = {
        FOO: 0,
        BAR: 1,
        BAZ: 2,
        QUX: 3,
        QUUX: 4,
        CORGE: 5,
        GRAULT: 6,
        GARPLY: 7
    };
    types["0xfc1910edd7dd5552"] = reader.structure(7, 48, 160);
    types["0x83b7c4d14c496fa9"] = reader.structure(7, 48, 160);
    module.exports = types;
