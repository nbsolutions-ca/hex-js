
import {Hex} from '../src/Hex';

describe('Hex', () => {
    describe('toString', () => {
        it('0x00FF should be FF', () => {
            expect(Hex.toString(0x00FF)).toBe('FF');
        });

        it('0x00FF should be 00FF', () => {
            expect(Hex.toString(0x00FF, 4)).toBe('00FF');
        });

        it('0xFF00FF should be FF00FF', () => {
            expect(Hex.toString(0xFF00FF)).toBe('FF00FF');
        });

        it('0xFFAA00 should be FFAA00', () => {
            expect(Hex.toString(0xFFAA00)).toBe('FFAA00');
        });

        it('0xFFAA00 should be FFAA00 (with specified bits)', () => {
            expect(Hex.toString(0xFFAA00, 6)).toBe('FFAA00');
        });
    });

    describe('fromString', () => {
        it('0xFF should be 255', () => {
            expect(Hex.fromString('0xFF')).toBe(255);
        });

        it('0xff should be 255', () => {
            expect(Hex.fromString('0xff')).toBe(255);
        });

        it('#FF should be 255', () => {
            expect(Hex.fromString('#FF')).toBe(255);
        });

        it('FF should be 255', () => {
            expect(Hex.fromString('FF')).toBe(255);
        });

        it('00FF should be 255', () => {
            expect(Hex.fromString('00FF')).toBe(255);
        });

        it('FFFFFF should be 16777215', () => {
            expect(Hex.fromString('FFFFFF')).toBe(16777215);
        });

        it('should throw RangeError', () => {
            expect(() => {
                Hex.fromString('0xFZ');
            }).toThrowError(RangeError);
        });
    });

    describe('expand', () => {
        it('0xF should be FF', () => {
            expect(Hex.expand('0xF')).toBe('FF');
        });

        it('#F should be FF', () => {
            expect(Hex.expand('#F')).toBe('FF');
        });

        it('F should be FF', () => {
            expect(Hex.expand('F')).toBe('FF');
        });

        it('#F0F should be FF', () => {
            expect(Hex.expand('F0F')).toBe('FF00FF');
        });

        it('should throw RangeError', () => {
            expect(() => {
                Hex.fromString('0xFZ');
            }).toThrowError(RangeError);
        });
    });

    describe('isHex', () => {
        it('ABCDEF0123456789 should return true', () => {
            expect(Hex.isHex("ABCDEF0123456789")).toBe(true);
        });

        it('abcdef0123456789 should return true', () => {
            expect(Hex.isHex("abcdef0123456789")).toBe(true);
        });

        it('0xABCDEF0123456789 should return true', () => {
            expect(Hex.isHex("0xABCDEF0123456789")).toBe(true);
        });

        it('#ABCDEF0123456789 should return true', () => {
            expect(Hex.isHex("#ABCDEF0123456789")).toBe(true);
        });

        it('ABCDEF0123456789Z should return true', () => {
            expect(Hex.isHex("ABCDEF0123456789Z")).toBe(false);
        });
    });

    describe('normalize', () => {
        it('0xFF', () => {
            expect(Hex.normalize('0xFF')).toBe('FF');
        });

        it('0xff', () => {
            expect(Hex.normalize('0xff')).toBe('ff');
        });

        it('#ff', () => {
            expect(Hex.normalize('#ff')).toBe('ff');
        });

        it('ff', () => {
            expect(Hex.normalize('ff')).toBe('ff');
        });
    });
});
