var assert = require('assert');

describe('Arenas', function () {
    var Allocator = require('capnp-js/builder/Allocator');
    var builders = require('../lib/basic.capnp.d/builders');
    var allocator = new Allocator();

    it('should not alter outstanding references on `initRoot`', function () {
        var arena = allocator.createArena();
        var tds = arena.initRoot(builders.TestDefaults);

        tds.setUint8Field(10);
        assert.strictEqual(tds.getUint8Field(), 10);

        var another = arena.initRoot(builders.TestDefaults);
        another.setUint8Field(20);
        assert.strictEqual(tds.getUint8Field(), 10);
        assert.strictEqual(another.getUint8Field(), 20);
    });

    it('should not alter outstanding references on `setRoot`', function () {
        var arena = allocator.createArena();
        var tds = arena.initRoot(builders.TestDefaults);
        arena.setRoot(tds);
        var another = arena.getRoot(builders.TestDefaults);
        tds.setUint8Field(20);
        another.setUint8Field(80);

        assert.strictEqual(tds.getUint8Field(), 20);
        assert.strictEqual(another.getUint8Field(), 80);
    });

    it('should install a default instance on `getRoot` with null root (init semantics)', function () {
        var arena = allocator.createArena();
        var tds = arena.getRoot(builders.TestDefaults);

        for (var i=tds._dataSection; i<tds._end; ++i) {
            assert.strictEqual(tds._segment[i], 0);
        }
    });
});
