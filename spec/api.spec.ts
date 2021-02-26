
import * as api from '../src/api';
import {Hex} from '../src/Hex';

describe('Public API', () => {
    it('Hex', () => {
        expect(Hex).toBe(api.Hex);
    });

    it('Hex (default)', () => {
        expect(Hex).toBe(api.default);
    });
});
