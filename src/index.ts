import * as _ from "lodash";

export interface Student {
    name: string;
    avgMark: number;
}

export interface Statistics {
    avgMark: number;
    hughestMark: string;
    lowestMark: string;
}

function formatToTwoDecimal(num:number): number {
    return _.toNumber(num.toFixed(2));
}

function getOnlyLastNamesFromDuble(array: Student[]): Student[] {
    const uniqNames: string[] = [...new Set(array.map(s => JSON.stringify(s.name)))].map(s => JSON.parse(s));
    const arrWithUniqNames: Student[] = [];
    for (let i = 0; i < _.size(uniqNames); i += 1) {
        const indexLastName = _.findLastIndex(array, function(o) { return o.name == uniqNames[i]; });
        arrWithUniqNames.push(array[indexLastName]);
    }
    return arrWithUniqNames;
}

function absAvgMarks(array: Student): Student {
    const absAvgMark: number = Math.abs(array.avgMark);
    array.avgMark = absAvgMark;
    return array;
}


export function getStatistics(marks: Student[] | undefined ): Statistics | undefined {
    const result: Statistics = {
        avgMark: 0,
        hughestMark: 'not hughest',
        lowestMark: 'not lowest'
    };
    if (!marks) {
        return undefined;
    } else if ( _.size(marks) === 0) {
        return result;
    } else {
        const marksUniqNames: Student[] = getOnlyLastNamesFromDuble(marks);
        const cleanMarks: Student[] = _.map(marksUniqNames, absAvgMarks);
        const nameOfHughestMark: string = _.maxBy(cleanMarks, "avgMark")?.name ?? "not hughest";
        result.hughestMark = nameOfHughestMark;
        const nameOfLowestMark: string = _.minBy(cleanMarks, "avgMark")?.name ?? "not lowest";
        result.lowestMark = nameOfLowestMark;
        if (_.size(marks) === 1) {
            const numAvgMark: number = formatToTwoDecimal(cleanMarks[0].avgMark) ?? 0;
            result.avgMark = numAvgMark;
        } else {
            const numAvgMark: number = formatToTwoDecimal(_.meanBy(cleanMarks, "avgMark")) ?? 0;
            result.avgMark = numAvgMark;
        }
        return result;
    }
}


interface holesInNumber {
    num: number,
    numHoles: number;
}


function calculateNumberHoles(number: number): holesInNumber {
    let sumHoles: number = 0;
    const ruleForHoles: {[index: number]: number} = {
        0: 1,
        1: 0,
        2: 0,
        3: 0,
        4: 1,
        5: 0,
        6: 1,
        7: 0,
        8: 2,
        9: 1,
    }
    const absNumberToString = _.replace(number.toString(), "-", "");
    const arrStrings: String[] = _.split(absNumberToString, "");
    const arrNumbers: number[] = _.map(arrStrings, Number);
    for (let i = 0; i < _.size(arrNumbers); i += 1) {
        const numberHoles: number = ruleForHoles[arrNumbers[i]];
        sumHoles = sumHoles + numberHoles;
    }
    return {num: number, numHoles: sumHoles}
}


export function sortArrByNumberOfHoles(
    arr: number[] | undefined
    ): number[] | undefined {
        if (!arr || arr === []) {
            return arr
        } else {
            const numberArr: holesInNumber[] = _.map(arr, calculateNumberHoles)
            const sortedNumberArr: holesInNumber[] = _.sortBy(numberArr, "numHoles");
            const resultArr: number[] = _.map(sortedNumberArr, "num");
            return resultArr;
        }
}
