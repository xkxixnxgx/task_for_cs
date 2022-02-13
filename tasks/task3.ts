import * as _ from "lodash";


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
    const numberWithoutDot: string = _.replace(number.toString(), ".", "");
    const absNumberToString: string = _.replace(numberWithoutDot, "-", "");
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
