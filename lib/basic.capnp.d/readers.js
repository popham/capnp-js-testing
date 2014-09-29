var Allocator = require('capnp-js/builder/Allocator');
var reader = require('capnp-js/reader/index');
var scope = require('./rScope');
var constants = require('./constants');
    var readers = {};
    var allocator = new Allocator();
    readers.ALL_TESTS = constants["0x9a8a4dbe890fe1c5"];
    readers.SIMPLE_TEST_TYPE = constants["0xae200cd29f1cebd9"];
    readers.SIMPLE_TEST = constants["0xa18de2d2bc7f5369"];
    readers.TEXT_LIST_TYPE_TEST_TYPE = constants["0xfd746fbc271631ec"];
    readers.TEXT_LIST_TYPE_TEST = constants["0xe78971eb1b39aa1e"];
    readers.UINT8_DEFAULT_VALUE_TEST_TYPE = constants["0x94a2fb609d840a7c"];
    readers.UINT8_DEFAULT_VALUE_TEST = constants["0xb6a0454290d82339"];
    readers.CONST_TEST_TYPE = constants["0xceccfe5436761f22"];
    readers.CONST_TEST_VALUE = constants["0xf1c997a2162b8f27"];
    readers.CONST_TEST = constants["0x81fb4ce698f27a83"];
    readers.SimpleTestStruct = function() {
        var Structure = scope["0xf5847f5f1560117d"];
        Structure.prototype.getInt = function() {
            var position = this._dataSection + 0;
            if (position < this._pointersSection) {
                return reader.fields.int32(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getMsg = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (pointer.position < this._end && !reader.isNull(pointer)) {
                return reader.Text._deref(this._arena, pointer, this._depth + 1);
            } else {
                return this._defaults.msg;
            }
        };
        Structure.prototype._defaults = {
            msg: function() {
                var Reader = reader.Text;
                var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }()
        };
        return Structure;
    }();
    readers.ListTest = function() {
        var Structure = scope["0xbae01ca650e8d2fe"];
        Structure.prototype.getTextList = function() {
            var Reader = reader.lists.Text;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.textList;
                }
            };
        }();
        Structure.prototype.hasTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype._defaults = {
            textList: function() {
                var Reader = reader.lists.Text;
                var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }()
        };
        return Structure;
    }();
    readers.TestEnum = scope["0xd9a85106b708a658"];
    readers.TestAllTypes = function() {
        var Structure = scope["0xfc1910edd7dd5552"];
        Structure.prototype.getVoidField = function() {
            return null;
        };
        Structure.prototype.getBoolField = function() {
            var position = this._dataSection + 0;
            if (position < this._pointersSection) {
                return reader.fields.bool(0, this._segment, position, 0);
            } else {
                return !!0;
            }
        };
        Structure.prototype.getInt8Field = function() {
            var position = this._dataSection + 1;
            if (position < this._pointersSection) {
                return reader.fields.int8(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getInt16Field = function() {
            var position = this._dataSection + 2;
            if (position < this._pointersSection) {
                return reader.fields.int16(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getInt32Field = function() {
            var position = this._dataSection + 4;
            if (position < this._pointersSection) {
                return reader.fields.int32(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getInt64Field = function() {
            var position = this._dataSection + 8;
            if (position < this._pointersSection) {
                return reader.fields.int64([ 0, 0 ], this._segment, position);
            } else {
                return [ 0, 0 ];
            }
        };
        Structure.prototype.getUint8Field = function() {
            var position = this._dataSection + 16;
            if (position < this._pointersSection) {
                return reader.fields.uint8(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getUint16Field = function() {
            var position = this._dataSection + 18;
            if (position < this._pointersSection) {
                return reader.fields.uint16(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getUint32Field = function() {
            var position = this._dataSection + 20;
            if (position < this._pointersSection) {
                return reader.fields.uint32(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getUint64Field = function() {
            var position = this._dataSection + 24;
            if (position < this._pointersSection) {
                return reader.fields.uint64([ 0, 0 ], this._segment, position);
            } else {
                return [ 0, 0 ];
            }
        };
        Structure.prototype.getFloat32Field = function() {
            var position = this._dataSection + 32;
            if (position < this._pointersSection) {
                return reader.fields.float32(this._defaults.float32Field, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getFloat64Field = function() {
            var position = this._dataSection + 40;
            if (position < this._pointersSection) {
                return reader.fields.float64(this._defaults.float64Field, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (pointer.position < this._end && !reader.isNull(pointer)) {
                return reader.Text._deref(this._arena, pointer, this._depth + 1);
            } else {
                return this._defaults.textField;
            }
        };
        Structure.prototype.getDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            if (pointer.position < this._end && !reader.isNull(pointer)) {
                return reader.Data._deref(this._arena, pointer, this._depth + 1);
            } else {
                return this._defaults.dataField;
            }
        };
        Structure.prototype.getStructField = function() {
            var Reader = scope["0xfc1910edd7dd5552"];
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 16
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.structField;
                }
            };
        }();
        Structure.prototype.hasStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getEnumField = function() {
            var position = this._dataSection + 36;
            if (position < this._pointersSection) {
                return reader.fields.uint16(0, this._segment, position);
            } else {
                return 0;
            }
        };
        Structure.prototype.getInterfaceField = function() {
            return null;
        };
        Structure.prototype.getVoidList = function() {
            var Reader = reader.lists.Void;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 24
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.voidList;
                }
            };
        }();
        Structure.prototype.hasVoidList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getBoolList = function() {
            var Reader = reader.lists.Bool;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 32
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.boolList;
                }
            };
        }();
        Structure.prototype.hasBoolList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt8List = function() {
            var Reader = reader.lists.Int8;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 40
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int8List;
                }
            };
        }();
        Structure.prototype.hasInt8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt16List = function() {
            var Reader = reader.lists.Int16;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 48
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int16List;
                }
            };
        }();
        Structure.prototype.hasInt16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt32List = function() {
            var Reader = reader.lists.Int32;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 56
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int32List;
                }
            };
        }();
        Structure.prototype.hasInt32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt64List = function() {
            var Reader = reader.lists.Int64;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 64
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int64List;
                }
            };
        }();
        Structure.prototype.hasInt64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint8List = function() {
            var Reader = reader.lists.UInt8;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 72
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint8List;
                }
            };
        }();
        Structure.prototype.hasUint8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint16List = function() {
            var Reader = reader.lists.UInt16;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 80
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint16List;
                }
            };
        }();
        Structure.prototype.hasUint16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint32List = function() {
            var Reader = reader.lists.UInt32;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 88
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint32List;
                }
            };
        }();
        Structure.prototype.hasUint32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint64List = function() {
            var Reader = reader.lists.UInt64;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 96
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint64List;
                }
            };
        }();
        Structure.prototype.hasUint64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getFloat32List = function() {
            var Reader = reader.lists.Float32;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 104
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.float32List;
                }
            };
        }();
        Structure.prototype.hasFloat32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getFloat64List = function() {
            var Reader = reader.lists.Float64;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 112
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.float64List;
                }
            };
        }();
        Structure.prototype.hasFloat64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getTextList = function() {
            var Reader = reader.lists.Text;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 120
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.textList;
                }
            };
        }();
        Structure.prototype.hasTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getDataList = function() {
            var Reader = reader.lists.Data;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 128
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.dataList;
                }
            };
        }();
        Structure.prototype.hasDataList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getStructList = function() {
            var Reader = reader.lists.structure(scope["0xfc1910edd7dd5552"]);
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 136
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.structList;
                }
            };
        }();
        Structure.prototype.hasStructList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getEnumList = function() {
            var Reader = reader.lists.UInt16;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 144
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.enumList;
                }
            };
        }();
        Structure.prototype.hasEnumList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInterfaceList = function() {
            var Reader = reader.lists.Void;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 152
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.interfaceList;
                }
            };
        }();
        Structure.prototype.hasInterfaceList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype._defaults = {
            float32Field: function() {
                return allocator._fromBase64("AAAAAA==").getSegment(0);
            }(),
            float64Field: function() {
                return allocator._fromBase64("AAAAAAAAAAA=").getSegment(0);
            }(),
            textField: function() {
                var Reader = reader.Text;
                var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            dataField: function() {
                var Reader = reader.Data;
                var arena = allocator._fromBase64("AQAAAAIAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            structField: function() {
                var Reader = scope["0xfc1910edd7dd5552"];
                var arena = allocator._fromBase64("AAAAAAAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            voidList: function() {
                var Reader = reader.lists.Void;
                var arena = allocator._fromBase64("AQAAAAAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            boolList: function() {
                var Reader = reader.lists.Bool;
                var arena = allocator._fromBase64("AQAAAAEAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int8List: function() {
                var Reader = reader.lists.Int8;
                var arena = allocator._fromBase64("AQAAAAIAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int16List: function() {
                var Reader = reader.lists.Int16;
                var arena = allocator._fromBase64("AQAAAAMAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int32List: function() {
                var Reader = reader.lists.Int32;
                var arena = allocator._fromBase64("AQAAAAQAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int64List: function() {
                var Reader = reader.lists.Int64;
                var arena = allocator._fromBase64("AQAAAAUAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint8List: function() {
                var Reader = reader.lists.UInt8;
                var arena = allocator._fromBase64("AQAAAAIAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint16List: function() {
                var Reader = reader.lists.UInt16;
                var arena = allocator._fromBase64("AQAAAAMAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint32List: function() {
                var Reader = reader.lists.UInt32;
                var arena = allocator._fromBase64("AQAAAAQAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint64List: function() {
                var Reader = reader.lists.UInt64;
                var arena = allocator._fromBase64("AQAAAAUAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            float32List: function() {
                var Reader = reader.lists.Float32;
                var arena = allocator._fromBase64("AQAAAAQAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            float64List: function() {
                var Reader = reader.lists.Float64;
                var arena = allocator._fromBase64("AQAAAAUAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            textList: function() {
                var Reader = reader.lists.Text;
                var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            dataList: function() {
                var Reader = reader.lists.Data;
                var arena = allocator._fromBase64("AQAAAAIAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            structList: function() {
                var Reader = reader.lists.structure(scope["0xfc1910edd7dd5552"]);
                var arena = allocator._fromBase64("AQAAAAAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            enumList: function() {
                var Reader = reader.lists.UInt16;
                var arena = allocator._fromBase64("AQAAAAMAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            interfaceList: function() {
                var Reader = reader.lists.Void;
                var arena = allocator._fromBase64("AQAAAAAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }()
        };
        return Structure;
    }();
    readers.TestDefaults = function() {
        var Structure = scope["0x83b7c4d14c496fa9"];
        Structure.prototype.getVoidField = function() {
            return null;
        };
        Structure.prototype.getBoolField = function() {
            var position = this._dataSection + 0;
            if (position < this._pointersSection) {
                return reader.fields.bool(1, this._segment, position, 0);
            } else {
                return !!1;
            }
        };
        Structure.prototype.getInt8Field = function() {
            var position = this._dataSection + 1;
            if (position < this._pointersSection) {
                return reader.fields.int8(-123, this._segment, position);
            } else {
                return -123;
            }
        };
        Structure.prototype.getInt16Field = function() {
            var position = this._dataSection + 2;
            if (position < this._pointersSection) {
                return reader.fields.int16(-12345, this._segment, position);
            } else {
                return -12345;
            }
        };
        Structure.prototype.getInt32Field = function() {
            var position = this._dataSection + 4;
            if (position < this._pointersSection) {
                return reader.fields.int32(-12345678, this._segment, position);
            } else {
                return -12345678;
            }
        };
        Structure.prototype.getInt64Field = function() {
            var position = this._dataSection + 8;
            if (position < this._pointersSection) {
                return reader.fields.int64([ -28745, 2045911175 ], this._segment, position);
            } else {
                return [ -28745, 2045911175 ];
            }
        };
        Structure.prototype.getUint8Field = function() {
            var position = this._dataSection + 16;
            if (position < this._pointersSection) {
                return reader.fields.uint8(234, this._segment, position);
            } else {
                return 234;
            }
        };
        Structure.prototype.getUint16Field = function() {
            var position = this._dataSection + 18;
            if (position < this._pointersSection) {
                return reader.fields.uint16(45678, this._segment, position);
            } else {
                return 45678;
            }
        };
        Structure.prototype.getUint32Field = function() {
            var position = this._dataSection + 20;
            if (position < this._pointersSection) {
                return reader.fields.uint32(3456789012, this._segment, position);
            } else {
                return 3456789012;
            }
        };
        Structure.prototype.getUint64Field = function() {
            var position = this._dataSection + 24;
            if (position < this._pointersSection) {
                return reader.fields.uint64([ 2874452364, 3944680146 ], this._segment, position);
            } else {
                return [ 2874452364, 3944680146 ];
            }
        };
        Structure.prototype.getFloat32Field = function() {
            var position = this._dataSection + 32;
            if (position < this._pointersSection) {
                return reader.fields.float32(this._defaults.float32Field, this._segment, position);
            } else {
                return 1234.5;
            }
        };
        Structure.prototype.getFloat64Field = function() {
            var position = this._dataSection + 40;
            if (position < this._pointersSection) {
                return reader.fields.float64(this._defaults.float64Field, this._segment, position);
            } else {
                return -1.23e47;
            }
        };
        Structure.prototype.getTextField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (pointer.position < this._end && !reader.isNull(pointer)) {
                return reader.Text._deref(this._arena, pointer, this._depth + 1);
            } else {
                return this._defaults.textField;
            }
        };
        Structure.prototype.getDataField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 8
            };
            if (pointer.position < this._end && !reader.isNull(pointer)) {
                return reader.Data._deref(this._arena, pointer, this._depth + 1);
            } else {
                return this._defaults.dataField;
            }
        };
        Structure.prototype.getStructField = function() {
            var Reader = scope["0xfc1910edd7dd5552"];
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 16
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.structField;
                }
            };
        }();
        Structure.prototype.hasStructField = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 16
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getEnumField = function() {
            var position = this._dataSection + 36;
            if (position < this._pointersSection) {
                return reader.fields.uint16(5, this._segment, position);
            } else {
                return 5;
            }
        };
        Structure.prototype.getInterfaceField = function() {
            return null;
        };
        Structure.prototype.getVoidList = function() {
            var Reader = reader.lists.Void;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 24
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.voidList;
                }
            };
        }();
        Structure.prototype.hasVoidList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 24
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getBoolList = function() {
            var Reader = reader.lists.Bool;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 32
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.boolList;
                }
            };
        }();
        Structure.prototype.hasBoolList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 32
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt8List = function() {
            var Reader = reader.lists.Int8;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 40
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int8List;
                }
            };
        }();
        Structure.prototype.hasInt8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 40
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt16List = function() {
            var Reader = reader.lists.Int16;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 48
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int16List;
                }
            };
        }();
        Structure.prototype.hasInt16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 48
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt32List = function() {
            var Reader = reader.lists.Int32;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 56
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int32List;
                }
            };
        }();
        Structure.prototype.hasInt32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 56
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInt64List = function() {
            var Reader = reader.lists.Int64;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 64
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.int64List;
                }
            };
        }();
        Structure.prototype.hasInt64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 64
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint8List = function() {
            var Reader = reader.lists.UInt8;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 72
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint8List;
                }
            };
        }();
        Structure.prototype.hasUint8List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 72
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint16List = function() {
            var Reader = reader.lists.UInt16;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 80
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint16List;
                }
            };
        }();
        Structure.prototype.hasUint16List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 80
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint32List = function() {
            var Reader = reader.lists.UInt32;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 88
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint32List;
                }
            };
        }();
        Structure.prototype.hasUint32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 88
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getUint64List = function() {
            var Reader = reader.lists.UInt64;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 96
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.uint64List;
                }
            };
        }();
        Structure.prototype.hasUint64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 96
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getFloat32List = function() {
            var Reader = reader.lists.Float32;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 104
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.float32List;
                }
            };
        }();
        Structure.prototype.hasFloat32List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 104
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getFloat64List = function() {
            var Reader = reader.lists.Float64;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 112
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.float64List;
                }
            };
        }();
        Structure.prototype.hasFloat64List = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 112
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getTextList = function() {
            var Reader = reader.lists.Text;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 120
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.textList;
                }
            };
        }();
        Structure.prototype.hasTextList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 120
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getDataList = function() {
            var Reader = reader.lists.Data;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 128
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.dataList;
                }
            };
        }();
        Structure.prototype.hasDataList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 128
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getStructList = function() {
            var Reader = reader.lists.structure(scope["0xfc1910edd7dd5552"]);
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 136
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.structList;
                }
            };
        }();
        Structure.prototype.hasStructList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 136
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getEnumList = function() {
            var Reader = reader.lists.UInt16;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 144
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.enumList;
                }
            };
        }();
        Structure.prototype.hasEnumList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 144
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype.getInterfaceList = function() {
            var Reader = reader.lists.Void;
            return function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 152
                };
                if (pointer.position < this._end && !reader.isNull(pointer)) {
                    return Reader._deref(this._arena, pointer, this._depth + 1);
                } else {
                    return this._defaults.interfaceList;
                }
            };
        }();
        Structure.prototype.hasInterfaceList = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 152
            };
            return pointer.position < this._end && !reader.isNull(pointer);
        };
        Structure.prototype._defaults = {
            float32Field: function() {
                return allocator._fromBase64("AFCaRA==").getSegment(0);
            }(),
            float64Field: function() {
                return allocator._fromBase64("ALvgwIKLtck=").getSegment(0);
            }(),
            textField: function() {
                var Reader = reader.Text;
                var arena = allocator._fromBase64("AQAAACIAAABmb28AAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            dataField: function() {
                var Reader = reader.Data;
                var arena = allocator._fromBase64("AQAAABoAAABiYXIAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            structField: function() {
                var Reader = scope["0xfc1910edd7dd5552"];
                var arena = allocator._fromBase64("AAAAAAYAFAAB9IANDhBM+05z6DimMwAAWgDSBBSIYgPSCm8SIRnMBF9wCa8CAAAAAAAAAACQdUBNAAAAIgAAAE0AAAAaAAAATAAAAAYAFAAlAQAAGAAAACEBAAApAAAAIQEAACIAAAAhAQAAIwAAACEBAAAkAAAAJQEAACUAAAAxAQAAIgAAADEBAAAjAAAAMQEAACQAAAA1AQAAJQAAAEEBAAA0AAAASQEAADUAAABdAQAAHgAAAHEBAAAeAAAAhQEAAB8AAADVAgAAGwAAAAAAAAAAAAAAYmF6AAAAAABxdXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE0AAAA6AAAAAAAAAAAAAABIAAAABgAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuZXN0ZWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE0AAAByAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByZWFsbHkgbmVzdGVkAAAAGgAAAAAAAAAM3oB/AAAAANIE0ukAgP9/TmG8AEDToPoAAACA////f3nfDYZIcAAALnUT/YqW/f8AAAAAAAAAgP////////9/DCIA/wAAAADSBC4WAAD//05hvADALF8FAAAAAP////953w2GSHAAANKK7AJ1aQIAAAAAAAAAAAD//////////wAAAAA4tJZJwr3wfMK98PzqHAgC6hwIggAAAAAAAAAAQN53gyES3EIpkCPK5ch2fymQI8rlyHb/kfdQN554ZgCR91A3nnhmgAkAAAAqAAAACQAAADIAAAAJAAAAOgAAAHF1dXgAAAAAY29yZ2UAAABncmF1bHQAAAkAAAAyAAAACQAAACoAAAAJAAAAIgAAAGdhcnBseQAAd2FsZG8AAABmcmVkAAAAAAwAAAAGABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQEAAHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL0AAAB6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABdAAAAegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeCBzdHJ1Y3RsaXN0IDEAAHggc3RydWN0bGlzdCAyAAB4IHN0cnVjdGxpc3QgMwAAAwABAAYAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            voidList: function() {
                var Reader = reader.lists.Void;
                var arena = allocator._fromBase64("AQAAADAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            boolList: function() {
                var Reader = reader.lists.Bool;
                var arena = allocator._fromBase64("AQAAACEAAAAJAAAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int8List: function() {
                var Reader = reader.lists.Int8;
                var arena = allocator._fromBase64("AQAAABIAAABvkQAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int16List: function() {
                var Reader = reader.lists.Int16;
                var arena = allocator._fromBase64("AQAAABMAAABnK5nUAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int32List: function() {
                var Reader = reader.lists.Int32;
                var arena = allocator._fromBase64("AQAAABQAAADHa58GOZRg+Q==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            int64List: function() {
                var Reader = reader.lists.Int64;
                var arena = allocator._fromBase64("AQAAABUAAADHccQrq3VrDzmOO9RUipTw").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint8List: function() {
                var Reader = reader.lists.UInt8;
                var arena = allocator._fromBase64("AQAAABIAAABv3gAAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint16List: function() {
                var Reader = reader.lists.UInt16;
                var arena = allocator._fromBase64("AQAAABMAAAA1gpytAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint32List: function() {
                var Reader = reader.lists.UInt32;
                var arena = allocator._fromBase64("AQAAAAwAAABVoa7GAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            uint64List: function() {
                var Reader = reader.lists.UInt64;
                var arena = allocator._fromBase64("AQAAAA0AAADHcay1r5gymg==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            float32List: function() {
                var Reader = reader.lists.Float32;
                var arena = allocator._fromBase64("AQAAACQAAAAAnK1FAACAfwAAgP8AAMB/").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            float64List: function() {
                var Reader = reader.lists.Float64;
                var arena = allocator._fromBase64("AQAAACUAAAAAAAAAwGG+QAAAAAAAAPB/AAAAAAAA8P8AAAAAAAD4fw==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            textList: function() {
                var Reader = reader.lists.Text;
                var arena = allocator._fromBase64("AQAAAB4AAAAJAAAAMgAAAAkAAAAyAAAACQAAACoAAABwbHVnaAAAAHh5enp5AAAAdGh1ZAAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            dataList: function() {
                var Reader = reader.lists.Data;
                var arena = allocator._fromBase64("AQAAAB4AAAAJAAAAIgAAAAkAAABKAAAADQAAADoAAABvb3BzAAAAAGV4aGF1c3RlZAAAAAAAAAByZmMzMDkyAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            structList: function() {
                var Reader = reader.lists.structure(scope["0xfc1910edd7dd5552"]);
                var arena = allocator._fromBase64("AQAAAB8AAAAMAAAABgAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0BAABqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9AAAAagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXQAAAGoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN0cnVjdGxpc3QgMQAAAABzdHJ1Y3RsaXN0IDIAAAAAc3RydWN0bGlzdCAzAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            enumList: function() {
                var Reader = reader.lists.UInt16;
                var arena = allocator._fromBase64("AQAAABMAAAAAAAcAAAAAAA==").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }(),
            interfaceList: function() {
                var Reader = reader.lists.Void;
                var arena = allocator._fromBase64("AQAAAAAAAAA=").asReader();
                return Reader._deref(arena, {
                    segment: arena.getSegment(0),
                    position: 0
                }, 0);
            }()
        };
        return Structure;
    }();
    module.exports = readers;
