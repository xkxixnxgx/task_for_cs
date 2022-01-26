import { getStatistics, sortArrByNumberOfHoles, Student } from '../src/index';

// for task 1
test('getStatisticsPositive', () => {
    const testMarks: Student[] = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
    expect(getStatistics(testMarks)).toEqual(
        {avgMark: 4.32, hughestMark: 'Lena', lowestMark: 'Vasya'}
        );
})

test('getStatisticsEmptyArr', () => {
    const testMarks: Student[] = [];
    expect(getStatistics(testMarks)).toEqual(
        {avgMark: 0, hughestMark: 'not hughest', lowestMark: 'not lowest'}
        );
})

test('getStatisticsUndefined', () => {
    expect(getStatistics(undefined)).toEqual(undefined);
})

test('getStatisticsOneName', () => {
    const testMarks: Student[] = [{
        name: 'Lena',
        avgMark: 4.89
    }];
    expect(getStatistics(testMarks)).toEqual(
        {avgMark: 4.89, hughestMark: 'Lena', lowestMark: 'Lena'}
        );
})

test('getStatisticsUseLastWhenDoubleNames', () => {
    const testMarks: Student[] = [{
        name: 'Vasya',
        avgMark: 1.86
    }, {
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
    expect(getStatistics(testMarks)).toEqual(
        {avgMark: 4.32, hughestMark: 'Lena', lowestMark: 'Vasya'}
        );
})

test('getStatisticsWithNegativeAvgMark', () => {
    const testMarks: Student[] = [{
        name: 'Vasya',
        avgMark: -3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
    expect(getStatistics(testMarks)).toEqual(
        {avgMark: 4.32, hughestMark: 'Lena', lowestMark: 'Vasya'}
        );
})

// for task 3
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
