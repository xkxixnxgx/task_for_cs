import os from 'os';
import * as _ from "lodash";
import { appendFileSync, readFileSync, writeFileSync } from 'fs';


function* generateCombinationsNumber(
    strNum: string,
    level = 0,
    indexes: boolean[] = [],
    combinations: string[] = [],
    res: string[] = [],
    len: number = strNum.length,
    ): Generator<string> {  
    for(let i=0; i < len; i++) {     
        if(!indexes[i]) {       
            indexes[i] = true;                
            combinations[level] = strNum[i];
            if (level < len - 1) {
                yield* generateCombinationsNumber(strNum, level + 1, indexes, combinations, res, len );
            } else {
                res.push(combinations.join(""));
            }
            if (level === len - 1 && combinations.length === len ) {
                const result: string = combinations.join("");
                yield result;
            }
        indexes[i] = false;        
      }
    }        
  }


export function createArrUniqCombinations(num:number): string[] {
    const strNum: string = _.map(_.range(num + 1).slice(1), function(o: number) { return o.toString(); }).join("");
    const baseString: string = "0".repeat(num) + strNum;
    const generator = generateCombinationsNumber(baseString);
    const setResult: Set<string> = new Set();
    for(const combination of generator) {
        setResult.add(combination)
    }
    const arrResult = Array.from(setResult);
    return arrResult;
}


function countingRowsOfFile(filePath: string, newLineChar:string): number {
    const file = readFileSync(filePath, 'utf-8');
    let nLines = 0;
    const n = file.length;
    for( let i = 0; i < n;  ++i ) {
        if( file[i] === newLineChar ) {
            ++nLines;
        }
    }
    return nLines;
}


function createEmptyFile(filePath: string) {
    writeFileSync(filePath, "");
}


function writeLineToFile(line: string, newLineChar: string, filePath: string) {
    appendFileSync(filePath, `${newLineChar}${line}`);
}

type ResultSuccess<T> = { type: 'success'; countRows: T }
type ResultError = { type: 'error'; error: Error }
type Result<T> = ResultSuccess<T> | ResultError


export function uniqPermutationsNumbers(num:number): Result<number> {
    if (!num) {
        return { type: 'error', error: new Error("The value can't have the number type.") }
      }
    const arrUniqCombinations: string[] = createArrUniqCombinations(num);
    const currentPath: string = __dirname;
    const filePath: string = currentPath + "/task2_result.txt";
    createEmptyFile(filePath);
    const newLineChar = os.EOL;
    for (let i = 0; i < _.size(arrUniqCombinations); i += 1 ) {
        const line: string = arrUniqCombinations[i];
        if (i === 0) {
            writeLineToFile(line, "", filePath);
        } else {
            writeLineToFile(line, newLineChar, filePath);
        }
    }
    const countRows: number = countingRowsOfFile(filePath, newLineChar) + 1;
    return { type: 'success', countRows };
}
