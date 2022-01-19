import { getStatistics, sortArrByNumberOfHoles } from '../src/index';

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

test('sortArrByNumberOfHolesPositive', () => {
    const arrNumbers = [89, 46, 0, 694, 3, -7, -4, 98571114];
    expect(sortArrByNumberOfHoles(arrNumbers)).toEqual(
        [3, -7, 0, -4, 46, 89, 694, 98571114]
        );
})

test('sortArrByNumberOfHolesEmptyArr', () => {
    const arrEmpty: number[] = [];
    expect(sortArrByNumberOfHoles(arrEmpty)).toEqual([]);
})

test('sortArrByNumberOfHolesUndefined', () => {
    expect(sortArrByNumberOfHoles(undefined)).toEqual(undefined);
})