var Allocator = require('capnp-js/builder/Allocator');
var reader = require('capnp-js/reader/index');
var scope = require('./rScope');
    var constants = {};
    var allocator = new Allocator();
    constants["0x9a8a4dbe890fe1c5"] = function() {
        var arena = allocator._fromBase64("AQAAACYAAAANAAAAWgAAABEAAACKAAAAGQAAALIAAAAhAAAAUgAAAHNpbXBsZVRlc3QAAAAAAAB0ZXh0TGlzdFR5cGVUZXN0AAAAAAAAAAB1aW50OERlZmF1bHRWYWx1ZVRlc3QAAABjb25zdFRlc3QAAAAAAAAA").asReader();
        return reader.lists.Text._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xae200cd29f1cebd9"] = function() {
        var arena = allocator._fromBase64("AQAAAIoAAABTaW1wbGVUZXN0U3RydWN0AAAAAAAAAAA=").asReader();
        return reader.Text._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xa18de2d2bc7f5369"] = function() {
        var arena = allocator._fromBase64("AAAAAAEAAQDSApZJAAAAAAEAAACaAAAAYSBzaG9ydCBtZXNzYWdlLi4uAAAAAAAA").asReader();
        return scope["0xf5847f5f1560117d"]._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xfd746fbc271631ec"] = function() {
        var arena = allocator._fromBase64("AQAAAEoAAABMaXN0VGVzdAAAAAAAAAAA").asReader();
        return reader.Text._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xe78971eb1b39aa1e"] = function() {
        var arena = allocator._fromBase64("AAAAAAAAAQABAAAAHgAAAAkAAAAiAAAACQAAACIAAAAJAAAAIgAAAGZvbwAAAAAAYmFyAAAAAABiYXoAAAAAAA==").asReader();
        return scope["0xbae01ca650e8d2fe"]._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0x94a2fb609d840a7c"] = function() {
        var arena = allocator._fromBase64("AQAAAGoAAABUZXN0RGVmYXVsdHMAAAAA").asReader();
        return reader.Text._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xb6a0454290d82339"] = function() {
        var arena = allocator._fromBase64("AAAAAAYAFAAAAAAAAAAAAAAAAAAAAAAA6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA").asReader();
        return scope["0x83b7c4d14c496fa9"]._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xceccfe5436761f22"] = function() {
        var arena = allocator._fromBase64("AQAAAIoAAABTaW1wbGVUZXN0U3RydWN0AAAAAAAAAAA=").asReader();
        return reader.Text._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0xf1c997a2162b8f27"] = function() {
        var arena = allocator._fromBase64("AQAAAMoAAABBIGNvbnN0IHRleHQgdGVzdCB2YWx1ZS4AAAAAAAAAAA==").asReader();
        return reader.Text._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    constants["0x81fb4ce698f27a83"] = function() {
        var arena = allocator._fromBase64("AAAAAAEAAQAAAAAAAAAAAAEAAADKAAAAQSBjb25zdCB0ZXh0IHRlc3QgdmFsdWUuAAAAAAAAAAA=").asReader();
        return scope["0xf5847f5f1560117d"]._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    }();
    module.exports = constants;
