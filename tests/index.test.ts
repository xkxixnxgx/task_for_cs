import { getStatistics } from '../src/index';

test('getStatistics', () => {
    const testMarks = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }]
    expect(getStatistics(testMarks)).toEqual(
        {avgMark: 4.32, hughestMark: 'Lena', lowestMark: 'Vasya'}
        );
})
