
import type {Config} from '@jest/types';

export const JEST_CONFIG: Config.InitialOptions = {
    preset: 'ts-jest',
    verbose: true,
    collectCoverage: true
};

export default JEST_CONFIG;
