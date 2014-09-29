var Allocator = require('capnp-js/builder/Allocator');
var builder = require('capnp-js/builder/index');
var reader = require('capnp-js/reader/index');
var scope = require('./bScope');
var readers = require('./readers');
    /** Loading `readers` guarantees that reader prototypes have been populated.* Imagine using a builder, `b`:  If the underlying data is shared read-only* by `b.asReader()`, then the prototype of this reader would not have been* initialized unless some external code imported `readers`.*/
    var builders = {};
    var allocator = new Allocator();
    builders.ALL_TESTS = readers.ALL_TESTS;
    builders.SIMPLE_TEST_TYPE = readers.SIMPLE_TEST_TYPE;
    builders.SIMPLE_TEST = readers.SIMPLE_TEST;
    builders.TEXT_LIST_TYPE_TEST_TYPE = readers.TEXT_LIST_TYPE_TEST_TYPE;
    builders.TEXT_LIST_TYPE_TEST = readers.TEXT_LIST_TYPE_TEST;
    builders.UINT8_DEFAULT_VALUE_TEST_TYPE = readers.UINT8_DEFAULT_VALUE_TEST_TYPE;
    builders.UINT8_DEFAULT_VALUE_TEST = readers.UINT8_DEFAULT_VALUE_TEST;
    builders.CONST_TEST_TYPE = readers.CONST_TEST_TYPE;
    builders.CONST_TEST_VALUE = readers.CONST_TEST_VALUE;
    builders.CONST_TEST = readers.CONST_TEST;
    builders.SimpleTestStruct = function() {
        var Structure = scope["0xf5847f5f1560117d"];
        Structure.prototype.getInt = function() {
            var position = this._dataSection + 0;
            return reader.fields.int32(0, this._segment, position);
        };
        Structure.prototype.setInt = function(value) {
            builder.fields.int32(value, 0, this._segment, this._dataSection + 0);
        };
        Structure.prototype.getMsg = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.msg, this._arena, pointer);
            }
            return builder.Text._deref(this._arena, pointer);
        };
        Structure.prototype.setMsg = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            builder.Text._set(this._arena, pointer, value);
        };
        Structure.prototype.hasMsg = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.adoptMsg = function(value) {
            builder.Text._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 0
            }, value);
        };
        Structure.prototype.disownMsg = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                return builder.Text._initOrphan(this._arena);
            } else {
                var instance = builder.Text._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        Structure.prototype._defaults = Structure._READER.prototype._defaults;
        return Structure;
    }();
    builders.ListTest = function() {
        var Structure = scope["0xbae01ca650e8d2fe"];
        var Builder_textList = builder.lists.Text;
        Structure.prototype.initTextList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return Builder_textList._init(this._arena, pointer, n);
        };
        Structure.prototype.setTextList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            Builder_textList._set(this._arena, pointer, value);
        };
        Structure.prototype.getTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.textList, this._arena, pointer);
            }
            return Builder_textList._deref(this._arena, pointer);
        };
        Structure.prototype.hasTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype._defaults = Structure._READER.prototype._defaults;
        return Structure;
    }();
    builders.TestEnum = readers.TestEnum;
    builders.TestAllTypes = function() {
        var Structure = scope["0xfc1910edd7dd5552"];
        Structure.prototype.getVoidField = function() {
            return null;
        };
        Structure.prototype.setVoidField = function() {};
        Structure.prototype.getBoolField = function() {
            var position = this._dataSection + 0;
            return reader.fields.bool(0, this._segment, position, 0);
        };
        Structure.prototype.setBoolField = function(value) {
            var position = this._dataSection + 0;
            builder.fields.bool(value, 0, this._segment, position, 0);
        };
        Structure.prototype.getInt8Field = function() {
            var position = this._dataSection + 1;
            return reader.fields.int8(0, this._segment, position);
        };
        Structure.prototype.setInt8Field = function(value) {
            builder.fields.int8(value, 0, this._segment, this._dataSection + 1);
        };
        Structure.prototype.getInt16Field = function() {
            var position = this._dataSection + 2;
            return reader.fields.int16(0, this._segment, position);
        };
        Structure.prototype.setInt16Field = function(value) {
            builder.fields.int16(value, 0, this._segment, this._dataSection + 2);
        };
        Structure.prototype.getInt32Field = function() {
            var position = this._dataSection + 4;
            return reader.fields.int32(0, this._segment, position);
        };
        Structure.prototype.setInt32Field = function(value) {
            builder.fields.int32(value, 0, this._segment, this._dataSection + 4);
        };
        Structure.prototype.getInt64Field = function() {
            var position = this._dataSection + 8;
            return reader.fields.int64([ 0, 0 ], this._segment, position);
        };
        Structure.prototype.setInt64Field = function(value) {
            builder.fields.int64(value, [ 0, 0 ], this._segment, this._dataSection + 8);
        };
        Structure.prototype.getUint8Field = function() {
            var position = this._dataSection + 16;
            return reader.fields.uint8(0, this._segment, position);
        };
        Structure.prototype.setUint8Field = function(value) {
            builder.fields.uint8(value, 0, this._segment, this._dataSection + 16);
        };
        Structure.prototype.getUint16Field = function() {
            var position = this._dataSection + 18;
            return reader.fields.uint16(0, this._segment, position);
        };
        Structure.prototype.setUint16Field = function(value) {
            builder.fields.uint16(value, 0, this._segment, this._dataSection + 18);
        };
        Structure.prototype.getUint32Field = function() {
            var position = this._dataSection + 20;
            return reader.fields.uint32(0, this._segment, position);
        };
        Structure.prototype.setUint32Field = function(value) {
            builder.fields.uint32(value, 0, this._segment, this._dataSection + 20);
        };
        Structure.prototype.getUint64Field = function() {
            var position = this._dataSection + 24;
            return reader.fields.uint64([ 0, 0 ], this._segment, position);
        };
        Structure.prototype.setUint64Field = function(value) {
            builder.fields.uint64(value, [ 0, 0 ], this._segment, this._dataSection + 24);
        };
        Structure.prototype.getFloat32Field = function() {
            var position = this._dataSection + 32;
            return reader.fields.float32(this._defaults.float32Field, this._segment, position);
        };
        Structure.prototype.setFloat32Field = function(value) {
            var position = this._dataSection + 32;
            builder.fields.float32(value, this._defaults.float32Field, this._segment, position);
        };
        Structure.prototype.getFloat64Field = function() {
            var position = this._dataSection + 40;
            return reader.fields.float64(this._defaults.float64Field, this._segment, position);
        };
        Structure.prototype.setFloat64Field = function(value) {
            var position = this._dataSection + 40;
            builder.fields.float64(value, this._defaults.float64Field, this._segment, position);
        };
        Structure.prototype.getTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.textField, this._arena, pointer);
            }
            return builder.Text._deref(this._arena, pointer);
        };
        Structure.prototype.setTextField = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            builder.Text._set(this._arena, pointer, value);
        };
        Structure.prototype.hasTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.adoptTextField = function(value) {
            builder.Text._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 0
            }, value);
        };
        Structure.prototype.disownTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                return builder.Text._initOrphan(this._arena);
            } else {
                var instance = builder.Text._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        Structure.prototype.getDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.dataField, this._arena, pointer);
            }
            return builder.Data._deref(this._arena, pointer);
        };
        Structure.prototype.setDataField = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            builder.Data._set(this._arena, pointer, value);
        };
        Structure.prototype.hasDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.adoptDataField = function(value) {
            builder.Data._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 8
            }, value);
        };
        Structure.prototype.disownDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            if (reader.isNull(pointer)) {
                return builder.Data._initOrphan(this._arena);
            } else {
                var instance = builder.Data._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        var Builder_structField = scope["0xfc1910edd7dd5552"];
        Structure.prototype.initStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            return Builder_structField._init(this._arena, pointer, this._depth + 1);
        };
        Structure.prototype.setStructField = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            Builder_structField._set(this._arena, pointer, value);
        };
        Structure.prototype.adoptStructField = function(value) {
            if (Builder_structField._TYPE !== value._TYPE) {
                throw new TypeError();
            }
            Builder_structField._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 16
            }, value);
        };
        Structure.prototype.disownStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            if (reader.isNull(pointer)) {
                return Builder_structField._initOrphan(this._arena);
            } else {
                var instance = Builder_structField._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        Structure.prototype.getStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.structField, this._arena, pointer);
            }
            return Builder_structField._deref(this._arena, pointer);
        };
        Structure.prototype.hasStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.getEnumField = function() {
            var position = this._dataSection + 36;
            return reader.fields.uint16(0, this._segment, position);
        };
        Structure.prototype.setEnumField = function(value) {
            builder.fields.uint16(value, 0, this._segment, this._dataSection + 36);
        };
        Structure.prototype.getInterfaceField = function() {
            return null;
        };
        Structure.prototype.setInterfaceField = function() {};
        var Builder_voidList = builder.lists.Void;
        Structure.prototype.initVoidList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            return Builder_voidList._init(this._arena, pointer, n);
        };
        Structure.prototype.setVoidList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            Builder_voidList._set(this._arena, pointer, value);
        };
        Structure.prototype.getVoidList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.voidList, this._arena, pointer);
            }
            return Builder_voidList._deref(this._arena, pointer);
        };
        Structure.prototype.hasVoidList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            return !reader.isNull(pointer);
        };
        var Builder_boolList = builder.lists.Bool;
        Structure.prototype.initBoolList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            return Builder_boolList._init(this._arena, pointer, n);
        };
        Structure.prototype.setBoolList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            Builder_boolList._set(this._arena, pointer, value);
        };
        Structure.prototype.getBoolList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.boolList, this._arena, pointer);
            }
            return Builder_boolList._deref(this._arena, pointer);
        };
        Structure.prototype.hasBoolList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            return !reader.isNull(pointer);
        };
        var Builder_int8List = builder.lists.Int8;
        Structure.prototype.initInt8List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            return Builder_int8List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt8List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            Builder_int8List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int8List, this._arena, pointer);
            }
            return Builder_int8List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            return !reader.isNull(pointer);
        };
        var Builder_int16List = builder.lists.Int16;
        Structure.prototype.initInt16List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            return Builder_int16List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt16List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            Builder_int16List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int16List, this._arena, pointer);
            }
            return Builder_int16List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            return !reader.isNull(pointer);
        };
        var Builder_int32List = builder.lists.Int32;
        Structure.prototype.initInt32List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            return Builder_int32List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt32List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            Builder_int32List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int32List, this._arena, pointer);
            }
            return Builder_int32List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            return !reader.isNull(pointer);
        };
        var Builder_int64List = builder.lists.Int64;
        Structure.prototype.initInt64List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            return Builder_int64List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt64List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            Builder_int64List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int64List, this._arena, pointer);
            }
            return Builder_int64List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint8List = builder.lists.UInt8;
        Structure.prototype.initUint8List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            return Builder_uint8List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint8List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            Builder_uint8List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint8List, this._arena, pointer);
            }
            return Builder_uint8List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint16List = builder.lists.UInt16;
        Structure.prototype.initUint16List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            return Builder_uint16List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint16List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            Builder_uint16List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint16List, this._arena, pointer);
            }
            return Builder_uint16List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint32List = builder.lists.UInt32;
        Structure.prototype.initUint32List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            return Builder_uint32List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint32List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            Builder_uint32List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint32List, this._arena, pointer);
            }
            return Builder_uint32List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint64List = builder.lists.UInt64;
        Structure.prototype.initUint64List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            return Builder_uint64List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint64List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            Builder_uint64List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint64List, this._arena, pointer);
            }
            return Builder_uint64List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            return !reader.isNull(pointer);
        };
        var Builder_float32List = builder.lists.Float32;
        Structure.prototype.initFloat32List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            return Builder_float32List._init(this._arena, pointer, n);
        };
        Structure.prototype.setFloat32List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            Builder_float32List._set(this._arena, pointer, value);
        };
        Structure.prototype.getFloat32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.float32List, this._arena, pointer);
            }
            return Builder_float32List._deref(this._arena, pointer);
        };
        Structure.prototype.hasFloat32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            return !reader.isNull(pointer);
        };
        var Builder_float64List = builder.lists.Float64;
        Structure.prototype.initFloat64List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            return Builder_float64List._init(this._arena, pointer, n);
        };
        Structure.prototype.setFloat64List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            Builder_float64List._set(this._arena, pointer, value);
        };
        Structure.prototype.getFloat64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.float64List, this._arena, pointer);
            }
            return Builder_float64List._deref(this._arena, pointer);
        };
        Structure.prototype.hasFloat64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            return !reader.isNull(pointer);
        };
        var Builder_textList = builder.lists.Text;
        Structure.prototype.initTextList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            return Builder_textList._init(this._arena, pointer, n);
        };
        Structure.prototype.setTextList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            Builder_textList._set(this._arena, pointer, value);
        };
        Structure.prototype.getTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.textList, this._arena, pointer);
            }
            return Builder_textList._deref(this._arena, pointer);
        };
        Structure.prototype.hasTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            return !reader.isNull(pointer);
        };
        var Builder_dataList = builder.lists.Data;
        Structure.prototype.initDataList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            return Builder_dataList._init(this._arena, pointer, n);
        };
        Structure.prototype.setDataList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            Builder_dataList._set(this._arena, pointer, value);
        };
        Structure.prototype.getDataList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.dataList, this._arena, pointer);
            }
            return Builder_dataList._deref(this._arena, pointer);
        };
        Structure.prototype.hasDataList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            return !reader.isNull(pointer);
        };
        var Builder_structList = builder.lists.structure(scope["0xfc1910edd7dd5552"]);
        Structure.prototype.initStructList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            return Builder_structList._init(this._arena, pointer, n);
        };
        Structure.prototype.setStructList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            Builder_structList._set(this._arena, pointer, value);
        };
        Structure.prototype.getStructList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.structList, this._arena, pointer);
            }
            return Builder_structList._deref(this._arena, pointer);
        };
        Structure.prototype.hasStructList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            return !reader.isNull(pointer);
        };
        var Builder_enumList = builder.lists.UInt16;
        Structure.prototype.initEnumList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            return Builder_enumList._init(this._arena, pointer, n);
        };
        Structure.prototype.setEnumList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            Builder_enumList._set(this._arena, pointer, value);
        };
        Structure.prototype.getEnumList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.enumList, this._arena, pointer);
            }
            return Builder_enumList._deref(this._arena, pointer);
        };
        Structure.prototype.hasEnumList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            return !reader.isNull(pointer);
        };
        var Builder_interfaceList = builder.lists.Void;
        Structure.prototype.initInterfaceList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            return Builder_interfaceList._init(this._arena, pointer, n);
        };
        Structure.prototype.setInterfaceList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            Builder_interfaceList._set(this._arena, pointer, value);
        };
        Structure.prototype.getInterfaceList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.interfaceList, this._arena, pointer);
            }
            return Builder_interfaceList._deref(this._arena, pointer);
        };
        Structure.prototype.hasInterfaceList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype._defaults = Structure._READER.prototype._defaults;
        return Structure;
    }();
    builders.TestDefaults = function() {
        var Structure = scope["0x83b7c4d14c496fa9"];
        Structure.prototype.getVoidField = function() {
            return null;
        };
        Structure.prototype.setVoidField = function() {};
        Structure.prototype.getBoolField = function() {
            var position = this._dataSection + 0;
            return reader.fields.bool(1, this._segment, position, 0);
        };
        Structure.prototype.setBoolField = function(value) {
            var position = this._dataSection + 0;
            builder.fields.bool(value, 1, this._segment, position, 0);
        };
        Structure.prototype.getInt8Field = function() {
            var position = this._dataSection + 1;
            return reader.fields.int8(-123, this._segment, position);
        };
        Structure.prototype.setInt8Field = function(value) {
            builder.fields.int8(value, -123, this._segment, this._dataSection + 1);
        };
        Structure.prototype.getInt16Field = function() {
            var position = this._dataSection + 2;
            return reader.fields.int16(-12345, this._segment, position);
        };
        Structure.prototype.setInt16Field = function(value) {
            builder.fields.int16(value, -12345, this._segment, this._dataSection + 2);
        };
        Structure.prototype.getInt32Field = function() {
            var position = this._dataSection + 4;
            return reader.fields.int32(-12345678, this._segment, position);
        };
        Structure.prototype.setInt32Field = function(value) {
            builder.fields.int32(value, -12345678, this._segment, this._dataSection + 4);
        };
        Structure.prototype.getInt64Field = function() {
            var position = this._dataSection + 8;
            return reader.fields.int64([ -28745, 2045911175 ], this._segment, position);
        };
        Structure.prototype.setInt64Field = function(value) {
            builder.fields.int64(value, [ -28745, 2045911175 ], this._segment, this._dataSection + 8);
        };
        Structure.prototype.getUint8Field = function() {
            var position = this._dataSection + 16;
            return reader.fields.uint8(234, this._segment, position);
        };
        Structure.prototype.setUint8Field = function(value) {
            builder.fields.uint8(value, 234, this._segment, this._dataSection + 16);
        };
        Structure.prototype.getUint16Field = function() {
            var position = this._dataSection + 18;
            return reader.fields.uint16(45678, this._segment, position);
        };
        Structure.prototype.setUint16Field = function(value) {
            builder.fields.uint16(value, 45678, this._segment, this._dataSection + 18);
        };
        Structure.prototype.getUint32Field = function() {
            var position = this._dataSection + 20;
            return reader.fields.uint32(3456789012, this._segment, position);
        };
        Structure.prototype.setUint32Field = function(value) {
            builder.fields.uint32(value, 3456789012, this._segment, this._dataSection + 20);
        };
        Structure.prototype.getUint64Field = function() {
            var position = this._dataSection + 24;
            return reader.fields.uint64([ 2874452364, 3944680146 ], this._segment, position);
        };
        Structure.prototype.setUint64Field = function(value) {
            builder.fields.uint64(value, [ 2874452364, 3944680146 ], this._segment, this._dataSection + 24);
        };
        Structure.prototype.getFloat32Field = function() {
            var position = this._dataSection + 32;
            return reader.fields.float32(this._defaults.float32Field, this._segment, position);
        };
        Structure.prototype.setFloat32Field = function(value) {
            var position = this._dataSection + 32;
            builder.fields.float32(value, this._defaults.float32Field, this._segment, position);
        };
        Structure.prototype.getFloat64Field = function() {
            var position = this._dataSection + 40;
            return reader.fields.float64(this._defaults.float64Field, this._segment, position);
        };
        Structure.prototype.setFloat64Field = function(value) {
            var position = this._dataSection + 40;
            builder.fields.float64(value, this._defaults.float64Field, this._segment, position);
        };
        Structure.prototype.getTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.textField, this._arena, pointer);
            }
            return builder.Text._deref(this._arena, pointer);
        };
        Structure.prototype.setTextField = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            builder.Text._set(this._arena, pointer, value);
        };
        Structure.prototype.hasTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.adoptTextField = function(value) {
            builder.Text._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 0
            }, value);
        };
        Structure.prototype.disownTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                return builder.Text._initOrphan(this._arena);
            } else {
                var instance = builder.Text._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        Structure.prototype.getDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.dataField, this._arena, pointer);
            }
            return builder.Data._deref(this._arena, pointer);
        };
        Structure.prototype.setDataField = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            builder.Data._set(this._arena, pointer, value);
        };
        Structure.prototype.hasDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.adoptDataField = function(value) {
            builder.Data._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 8
            }, value);
        };
        Structure.prototype.disownDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            if (reader.isNull(pointer)) {
                return builder.Data._initOrphan(this._arena);
            } else {
                var instance = builder.Data._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        var Builder_structField = scope["0xfc1910edd7dd5552"];
        Structure.prototype.initStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            return Builder_structField._init(this._arena, pointer, this._depth + 1);
        };
        Structure.prototype.setStructField = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            Builder_structField._set(this._arena, pointer, value);
        };
        Structure.prototype.adoptStructField = function(value) {
            if (Builder_structField._TYPE !== value._TYPE) {
                throw new TypeError();
            }
            Builder_structField._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 16
            }, value);
        };
        Structure.prototype.disownStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            if (reader.isNull(pointer)) {
                return Builder_structField._initOrphan(this._arena);
            } else {
                var instance = Builder_structField._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        Structure.prototype.getStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.structField, this._arena, pointer);
            }
            return Builder_structField._deref(this._arena, pointer);
        };
        Structure.prototype.hasStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype.getEnumField = function() {
            var position = this._dataSection + 36;
            return reader.fields.uint16(5, this._segment, position);
        };
        Structure.prototype.setEnumField = function(value) {
            builder.fields.uint16(value, 5, this._segment, this._dataSection + 36);
        };
        Structure.prototype.getInterfaceField = function() {
            return null;
        };
        Structure.prototype.setInterfaceField = function() {};
        var Builder_voidList = builder.lists.Void;
        Structure.prototype.initVoidList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            return Builder_voidList._init(this._arena, pointer, n);
        };
        Structure.prototype.setVoidList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            Builder_voidList._set(this._arena, pointer, value);
        };
        Structure.prototype.getVoidList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.voidList, this._arena, pointer);
            }
            return Builder_voidList._deref(this._arena, pointer);
        };
        Structure.prototype.hasVoidList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            return !reader.isNull(pointer);
        };
        var Builder_boolList = builder.lists.Bool;
        Structure.prototype.initBoolList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            return Builder_boolList._init(this._arena, pointer, n);
        };
        Structure.prototype.setBoolList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            Builder_boolList._set(this._arena, pointer, value);
        };
        Structure.prototype.getBoolList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.boolList, this._arena, pointer);
            }
            return Builder_boolList._deref(this._arena, pointer);
        };
        Structure.prototype.hasBoolList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            return !reader.isNull(pointer);
        };
        var Builder_int8List = builder.lists.Int8;
        Structure.prototype.initInt8List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            return Builder_int8List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt8List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            Builder_int8List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int8List, this._arena, pointer);
            }
            return Builder_int8List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            return !reader.isNull(pointer);
        };
        var Builder_int16List = builder.lists.Int16;
        Structure.prototype.initInt16List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            return Builder_int16List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt16List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            Builder_int16List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int16List, this._arena, pointer);
            }
            return Builder_int16List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            return !reader.isNull(pointer);
        };
        var Builder_int32List = builder.lists.Int32;
        Structure.prototype.initInt32List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            return Builder_int32List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt32List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            Builder_int32List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int32List, this._arena, pointer);
            }
            return Builder_int32List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            return !reader.isNull(pointer);
        };
        var Builder_int64List = builder.lists.Int64;
        Structure.prototype.initInt64List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            return Builder_int64List._init(this._arena, pointer, n);
        };
        Structure.prototype.setInt64List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            Builder_int64List._set(this._arena, pointer, value);
        };
        Structure.prototype.getInt64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.int64List, this._arena, pointer);
            }
            return Builder_int64List._deref(this._arena, pointer);
        };
        Structure.prototype.hasInt64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint8List = builder.lists.UInt8;
        Structure.prototype.initUint8List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            return Builder_uint8List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint8List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            Builder_uint8List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint8List, this._arena, pointer);
            }
            return Builder_uint8List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint16List = builder.lists.UInt16;
        Structure.prototype.initUint16List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            return Builder_uint16List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint16List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            Builder_uint16List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint16List, this._arena, pointer);
            }
            return Builder_uint16List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint32List = builder.lists.UInt32;
        Structure.prototype.initUint32List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            return Builder_uint32List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint32List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            Builder_uint32List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint32List, this._arena, pointer);
            }
            return Builder_uint32List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            return !reader.isNull(pointer);
        };
        var Builder_uint64List = builder.lists.UInt64;
        Structure.prototype.initUint64List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            return Builder_uint64List._init(this._arena, pointer, n);
        };
        Structure.prototype.setUint64List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            Builder_uint64List._set(this._arena, pointer, value);
        };
        Structure.prototype.getUint64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.uint64List, this._arena, pointer);
            }
            return Builder_uint64List._deref(this._arena, pointer);
        };
        Structure.prototype.hasUint64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            return !reader.isNull(pointer);
        };
        var Builder_float32List = builder.lists.Float32;
        Structure.prototype.initFloat32List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            return Builder_float32List._init(this._arena, pointer, n);
        };
        Structure.prototype.setFloat32List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            Builder_float32List._set(this._arena, pointer, value);
        };
        Structure.prototype.getFloat32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.float32List, this._arena, pointer);
            }
            return Builder_float32List._deref(this._arena, pointer);
        };
        Structure.prototype.hasFloat32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            return !reader.isNull(pointer);
        };
        var Builder_float64List = builder.lists.Float64;
        Structure.prototype.initFloat64List = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            return Builder_float64List._init(this._arena, pointer, n);
        };
        Structure.prototype.setFloat64List = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            Builder_float64List._set(this._arena, pointer, value);
        };
        Structure.prototype.getFloat64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.float64List, this._arena, pointer);
            }
            return Builder_float64List._deref(this._arena, pointer);
        };
        Structure.prototype.hasFloat64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            return !reader.isNull(pointer);
        };
        var Builder_textList = builder.lists.Text;
        Structure.prototype.initTextList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            return Builder_textList._init(this._arena, pointer, n);
        };
        Structure.prototype.setTextList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            Builder_textList._set(this._arena, pointer, value);
        };
        Structure.prototype.getTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.textList, this._arena, pointer);
            }
            return Builder_textList._deref(this._arena, pointer);
        };
        Structure.prototype.hasTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            return !reader.isNull(pointer);
        };
        var Builder_dataList = builder.lists.Data;
        Structure.prototype.initDataList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            return Builder_dataList._init(this._arena, pointer, n);
        };
        Structure.prototype.setDataList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            Builder_dataList._set(this._arena, pointer, value);
        };
        Structure.prototype.getDataList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.dataList, this._arena, pointer);
            }
            return Builder_dataList._deref(this._arena, pointer);
        };
        Structure.prototype.hasDataList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            return !reader.isNull(pointer);
        };
        var Builder_structList = builder.lists.structure(scope["0xfc1910edd7dd5552"]);
        Structure.prototype.initStructList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            return Builder_structList._init(this._arena, pointer, n);
        };
        Structure.prototype.setStructList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            Builder_structList._set(this._arena, pointer, value);
        };
        Structure.prototype.getStructList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.structList, this._arena, pointer);
            }
            return Builder_structList._deref(this._arena, pointer);
        };
        Structure.prototype.hasStructList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            return !reader.isNull(pointer);
        };
        var Builder_enumList = builder.lists.UInt16;
        Structure.prototype.initEnumList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            return Builder_enumList._init(this._arena, pointer, n);
        };
        Structure.prototype.setEnumList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            Builder_enumList._set(this._arena, pointer, value);
        };
        Structure.prototype.getEnumList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.enumList, this._arena, pointer);
            }
            return Builder_enumList._deref(this._arena, pointer);
        };
        Structure.prototype.hasEnumList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            return !reader.isNull(pointer);
        };
        var Builder_interfaceList = builder.lists.Void;
        Structure.prototype.initInterfaceList = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            return Builder_interfaceList._init(this._arena, pointer, n);
        };
        Structure.prototype.setInterfaceList = function(value) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            Builder_interfaceList._set(this._arena, pointer, value);
        };
        Structure.prototype.getInterfaceList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.deep(this._defaults.interfaceList, this._arena, pointer);
            }
            return Builder_interfaceList._deref(this._arena, pointer);
        };
        Structure.prototype.hasInterfaceList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            return !reader.isNull(pointer);
        };
        Structure.prototype._defaults = Structure._READER.prototype._defaults;
        return Structure;
    }();
    module.exports = builders;
