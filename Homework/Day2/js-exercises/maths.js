//first exercise
let a = 4;
let b = 6;
let c = a + b;

//second exercise
let thisVar = 65;
let thatVar = 14;
let someVar = 88.2;
let randomAddition = someVar + b;
console.log(randomAddition);

//third exercise - the Average
let v0 = 6;
let v1 = 2.5;
let v2 = 3.4;
let v3 = 0.55;
let v4 = 9.4;
let v5 = 12;
let v6 = 13;
let v7 = 0;
let v8 = 84;
let v9 = 12.1;

let avgFirstFive = (v0 + v1 + v2 + v3 + v4) / 5;
let avgLastFive = (v5 + v6 + v7 + v8 + v9) / 5;
let avgOfAvgs = (avgFirstFive + avgLastFive) / 2;
console.log("The average of the averages is ", avgOfAvgs);

//fourth exercise
/*
Find the average of ( 4, 10, 22, -30, 55);
Find the average of ( 68, 7, -22, 9, 100);
Find the average of the above;
Print in console
*/

let group1 = [4, 10, 22, -30, 55]
let group2 = [68, 7, -22, 9, 100]
let sum1 = group1.reduce((a, b) => {
  return a + b
})
let sum2 = group2.reduce((a, b) => {
  return a + b
})
let avg1 = sum1 / group1.length
let avg2 = sum2 / group2.length

let avgOfAverages = (avg1 + avg2) / 2
console.log(avg1, avg2, avgOfAverages)


