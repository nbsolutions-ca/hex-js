
const HEX: string = '0123456789ABCDEF';

export class Hex {
    private constructor() {}

    /**
     * Consumes the number and returns a string of hex symbols.
     * 
     * @example
     * ```typescript
     * Hex.toString(0x00FF); // "FF"
     * Hex.toString(0x00FF, 4); // "00FF"
     * ```
     * 
     * @param hex 
     * @param [bits] Optional. Will force 0 leading digits.
     */
    public static toString(hex: number, bits?: number): string {
        let output: string[] = [];

        if (bits) {
            for (let i: number = bits; i > 0; i--) {
                output.unshift(HEX.charAt(hex & 0xF));
                hex = hex >> 4;
            }
        }
        else {
            while (hex > 0) {
                output.unshift(HEX.charAt(hex & 0xF));
                hex = hex >> 4;
            }
        }

        return output.join('');
    }

    /**
     * Returns the numerical number represented by the given hex.
     * The hex string can be prefixed with a `#` or `0x` character.
     * 
     * @example
     * ```typescript
     * Hex.fromString("#FF"); // 255
     * ```
     * 
     * @param hex 
     */
    public static fromString(hex: string): number {
        hex = Hex.normalize(hex);
        Hex.$assertRange(hex);
        return parseInt(hex, 16);
    }

    /**
     * Expands shortform hex into it's full form.
     * 
     * @example
     * ```typescript
     * Hex.expand("#F0F"); // "FF00FF"
     * ```
     * 
     * @param hex 
     */
    public static expand(hex: string): string {
        hex = Hex.normalize(hex);
        Hex.$assertRange(hex);

        let parts: string[] = hex.split('');
        let output: string[] = [];

        for (let i: number = 0; i < parts.length; i++) {
            let p: string = parts[i];
            output.push(p.toUpperCase());
            output.push(p.toUpperCase());
        }

        return output.join('');
    }

    /**
     * Returns true if string is a valid hex
     * 
     * @example
     * ```typescript
     * Hex.isHex("F"); // true
     * Hex.isHex("Z"); // false
     * ```
     * 
     * @param hex 
     */
    public static isHex(hex: string): boolean {
        try {
            Hex.$assertRange(Hex.normalize(hex));
            return true;
        }
        catch (ex) {
            if (ex instanceof RangeError) {
                return false;
            }
            else {
                throw ex;
            }
        }
    }

    /**
     * Normalizes hex strings by removing the prefix "0x" or "#" notation.
     * 
     * @example
     * ```typescript
     * Hex.normalize("0xFF"); // "FF"
     * Hex.normalize("#FF");  // "FF"
     * ```
     * 
     * @param hex 
     */
    public static normalize(hex: string): string {
        return hex.replace(/^0x/, '').replace(/^#/, '');
    }

    private static $assertRange(hex: string): void {
        if (!/^([A-Fa-f0-9])+$/.test(hex)) {
            throw new RangeError('Unexpected value in hex string. Hex strings should only contain characters: ABCDEF0123456789');
        }
    }
}
