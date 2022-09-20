import Home from '@/pages/index';

const capitalizeWord = (word: string) => {
    const firstLetter = word[0].toLocaleUpperCase();
    const otherLetters = word.substring(1);

    return `${firstLetter}${otherLetters}`;
};

const capitalize = (text: string) => {
    if (text === '') return '';

    return text.split(' ').map(capitalizeWord).join(' ');
};

describe('Sanity of formatter', () => {
    test('Should do nothing for empty entry', () => {
        expect(capitalize('')).toBe('');
    });

    test('Should return Bira for bira', () => {
        expect(capitalize('bira')).toBe('Bira');
    });

    test('Should return Bira Neves for bira neves', () => {
        expect(capitalize('bira neves')).toBe('Bira Neves');
    });
});
