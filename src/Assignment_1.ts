// //Assignment One
// function calculate(numOne:number, numTwo:number) {
//     return numOne + numTwo;
//   }

//   console.log(calculate(10, 20)); // 30
//   //console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2

// //Assignment Two
// function printInfo(valueOne:number | string, valueTwo:number | string) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// //console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// //Assignment Three

// let arr: (number | boolean[] | (string | (string | number)[])[])[] = [23,[true, false],["Suhila",["Khaled",23,"Ahmed",12]]];

// //Assignment Four

// function reportErrors(username:string, age: number) {
//   let rank = "Professor";
//   return `Username: ${username}`;
//   console.log("We Will Not Reach Here");
// }

// console.log(reportErrors("Elzero", 40));

// //Assignment Five
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c?: string) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(undefined, undefined, theName)); // Elzero



// //Assignment six

// function showMsg(user?: number | string, age?: boolean |number | string, country?: boolean | string) {
//   return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));

// let printInConsole = function(...paras:any) : string{
//     paras.forEach((ele: any)=> {
//       console.log(`The Value is ${ele} And the Type is ${typeof ele}`)
//     });
//     return 'Done'
// }

// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));