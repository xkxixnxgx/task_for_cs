/* eslint no-console: 0 */

import * as _ from "lodash";
import * as readline from 'readline';
import { getStatistics, Student } from '../tasks/task1';
import { uniqPermutationsNumbers } from '../tasks/task2';
import { sortArrByNumberOfHoles } from '../tasks/task3';


function strToJsonStr(baseStr:string): string {

  function replaceAll(strForReplace:string, search: string, replaceWith: string): string {
    const cleanStr = _.join(_.split(strForReplace, search), replaceWith);
    return cleanStr;
  }

  const arrForReplace = [
    ["[", ""],
    ["]", ""],
    ["}, {", "}|{"],
    ["'", '"'],
  ]
  let changeStr = baseStr;
  for (const item in arrForReplace) {
    changeStr = replaceAll(changeStr, arrForReplace[item][0], arrForReplace[item][1]);
  }

  const jsonStr = _.replace(changeStr, /(\w+:)|(\w+ :)/g, function(s) {
    return '"' + s.substring(0, s.length-1) + '":';
  });
  return jsonStr;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter the number of the task you want to check (1, 2 or 3): ', (num) => {
  if (num === '1') {
    console.log("Enter the source data in one line.")
    console.log('Example:')
    console.log("[{name: 'Vasya', avgMark: 3.75}, {name: 'Lena', avgMark: 4.89}]")
    rl.question('', (dataString) => {
      try {
        const jsonStr: string = strToJsonStr(dataString);
        const arrJsonStr: string[] = _.split(jsonStr, "|");
        const marks: Student[] | undefined = _.map(arrJsonStr, function(x) {return JSON.parse(x)});
        console.log('==========================================');
        console.log('Statistics:');
        console.log(getStatistics(marks));
      } catch (error) {
        console.log("Format data input is not valid.");
        console.log("Please try again. Enter the data according to the example.");
        rl.close();
      }
      rl.close();
    });
  } else if (_.toString(num) === '2') {
    console.log('Enter a number: ');
    rl.question('', (value: string) => {      
      const num: number = _.toNumber(value);
      const result = uniqPermutationsNumbers(num);
      if (result.type === "success") {
        console.log('==========================================');
        console.log(`Number of combinations in the file: ${result.countRows}`);
        const currentPath: string = __dirname;
        const filePath: string = currentPath + "/task2_result.txt";
        console.log(`File is located at: ${filePath}`);
      } else if (result.type === "error") {
        console.log(result.error);
      } else {
        console.log("Sorry, unknown error. Please try again.");
      }
      rl.close();
    });
  } else if (num === '3') {
    console.log('Enter an array of numbers, for example [1, 8, 95, 89, 0, -3]: ');
    rl.question('', (value: string) => {   
      const strValue: string = _.toString(value);
      const strValueClean: string = _.join(_.slice(_.split(strValue, ""), 1, -1), "");
      const arrStrings: string[] = _.split(_.replace(strValueClean, " ", ""), ',');
      const arrNumbers: number[] = _.map(arrStrings, function(x) {return _.toNumber(x)});
      const arrIsSorted: number[] | undefined = sortArrByNumberOfHoles(arrNumbers);
      console.log('==========================================');
      console.log('Look at the result:');
      console.log(arrIsSorted);
      rl.close();
    });
  } else {
    console.log(`Not task with number ${num}`);
    rl.close();
  }
});
