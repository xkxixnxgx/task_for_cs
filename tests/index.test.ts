import { getStatistics, Student } from '../tasks/task1';
import { createArrUniqCombinations, uniqPermutationsNumbers } from '../tasks/task2';
import { sortArrByNumberOfHoles } from '../tasks/task3';


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

// for task 2
test('uniqPermutationsNumbersPositive', () => {
    function factorial (n:number): number {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n-1);
        }
    }
    
    const num = 2;
    const resultMath = factorial(num*2) / factorial(num);
    const result = uniqPermutationsNumbers(num);
    if (result.type === "success") {
        expect(result.countRows).toEqual(resultMath);
    }
})

test('uniqPermutationsNumbersReturnSuccess', () => {
    const result = uniqPermutationsNumbers(2);
    expect(result.type).toEqual("success");
})

test('uniqPermutationsNumbersReturnError', () => {
    const typeConversion = Number("bzdbdnzg")
    const result = uniqPermutationsNumbers(typeConversion);
    expect(result.type).toEqual("error");
})

test('generateUniqCombinationsNumberPositive', () => {
    const num = 2;
    const result = [
        "0012",
        "0021",
        "0102",
        "0120",
        "0201",
        "0210",
        "1002",
        "1020",
        "1200",
        "2001",
        "2010",
        "2100",
    ];
    expect(createArrUniqCombinations(num)).toEqual(result);
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

test('sortArrByNumberOfHolesWithFloat', () => {
    const arrNumbers = [1.67, -7];
    expect(sortArrByNumberOfHoles(arrNumbers)).toEqual(
        [-7, 1.67]
        );
})
