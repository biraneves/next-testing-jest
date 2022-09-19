import Home from '@/pages/index';

const sum = (a: number, b: number) => {
    return a + b;
};

describe('Simple operations', () => {
    test('should return 4 from 2 + 2', () => {
        expect(sum(2, 2)).toBe(4);
    });
    test('should multiply', () => {});
});
