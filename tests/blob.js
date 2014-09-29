var assert = require('assert');

describe('Text builders', function () {
    it('should not alter outstanding references on `set`', function () {
        var Allocator = require('capnp-js/builder/Allocator');
        var builders = require('../lib/basic.capnp.d/builders');
        var allocator = new Allocator();

        var arena = allocator.createArena();
        arena.setRoot(builders.UINT8_DEFAULT_VALUE_TEST);
        var tds = arena.getRoot(builders.TestDefaults);

        var initial = tds.getTextField();
        assert.strictEqual(initial.asString(), 'foo');

        tds.setTextField('bark');
        var next = tds.getTextField();
        assert.strictEqual(initial.asString(), 'foo');
        assert.strictEqual(next.asString(), 'bark');

        tds.setTextField('corge');
        var last = tds.getTextField();
        assert.strictEqual(initial.asString(), 'foo');
        assert.strictEqual(next.asString(), 'bark');
        assert.strictEqual(last.asString(), 'corge');
    });
});

/*
describe('Text orphan builders', function () {
    it('should leave a null pointer on disown', function () {

    });
});
*/

describe('Data builders', function () {
    it('should not alter outstanding references on `set`', function () {
        var Allocator = require('capnp-js/builder/Allocator');
        var builders = require('../lib/basic.capnp.d/builders');
        var allocator = new Allocator();

        var arena = allocator.createArena();
        arena.setRoot(builders.UINT8_DEFAULT_VALUE_TEST);
        var tds = arena.getRoot(builders.TestDefaults);

        var initial = tds.getDataField();
        assert.deepEqual(initial.raw(), new Buffer([98,97,114]));

        tds.setDataField(new Buffer([100,197,2,28]));
        var next = tds.getDataField();
        assert.deepEqual(initial.raw(), new Buffer([98,97,114]));
        assert.deepEqual(next.raw(), new Buffer([100,197,2,28]));

        tds.setDataField(new Buffer([99,76,233,97,176]));
        var last = tds.getDataField();
        assert.deepEqual(initial.raw(), new Buffer([98,97,114]));
        assert.deepEqual(next.raw(), new Buffer([100,197,2,28]));
        assert.deepEqual(last.raw(), new Buffer([99,76,233,97,176]));
    });
});
