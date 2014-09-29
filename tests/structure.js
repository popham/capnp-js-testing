var assert = require('assert');

describe('Structure builders', function () {
    var Allocator = require('capnp-js/builder/Allocator');
    var builders = require('../lib/basic.capnp.d/builders');
    var allocator = new Allocator();

    it('should not alter outstanding references on `set` of structs', function () {
        var arena = allocator.createArena();
        var tds = arena.initRoot(builders.TestDefaults);

        tds.initStructField();
        var initial = tds.getStructField();
        initial.setUint8Field(10);
        assert.strictEqual(initial.getUint8Field(), 10);

        tds.initStructField();
        var next = tds.getStructField();
        next.setUint8Field(20);
        assert.strictEqual(initial.getUint8Field(), 10);
        assert.strictEqual(next.getUint8Field(), 20);

        tds.initStructField();
        var last = tds.getStructField();
        last.setUint8Field(30);
        assert.strictEqual(initial.getUint8Field(), 10);
        assert.strictEqual(next.getUint8Field(), 20);
        assert.strictEqual(last.getUint8Field(), 30);
    });

    it('should not alter outstanding references on `disown` of structs', function () {
        var arena = allocator.createArena();
        var tds = arena.initRoot(builders.TestDefaults);

        var initial = tds.initStructField();
        initial.setUint8Field(10);
        assert.strictEqual(initial.getUint8Field(), 10);

        var orphan = tds.disownStructField();
        assert.strictEqual(tds.hasStructField(), false);

        var replacement = arena.initOrphan(builders.TestAllTypes);
        replacement.setUint8Field(30);
        assert.strictEqual(replacement.getUint8Field(), 30);

        tds.adoptStructField(replacement);
        assert.strictEqual(initial.getUint8Field(), 10);
        assert.strictEqual(replacement.getUint8Field(), 30);
        assert.strictEqual(tds.getStructField().getUint8Field(), 30);
    });

    it('should not alter outstanding references on `set` of bool lists', function () {
        var arena = allocator.createArena();
        var tds = arena.initRoot(builders.TestDefaults);

        tds.initBoolList(3);
        var initial = tds.getBoolList();
        initial.set(0,true);
        initial.set(2,true);
        assert.strictEqual(initial.length(), 3);
        assert.strictEqual(initial.get(0), true);
        assert.strictEqual(initial.get(1), false);
        assert.strictEqual(initial.get(2), true);

        tds.initBoolList(2);
        var next = tds.getBoolList();
        next.set(1, true);
        assert.strictEqual(next.length(), 2);
        assert.strictEqual(next.get(0), false);
        assert.strictEqual(next.get(1), true);

        assert.strictEqual(initial.length(), 3);
        assert.strictEqual(initial.get(0), true);
        assert.strictEqual(initial.get(1), false);
        assert.strictEqual(initial.get(2), true);
    });
});
