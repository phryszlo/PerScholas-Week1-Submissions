/*
  Exercise 1 (and 2)
    "Write a statement that checks if an ‘num’ 
    is positive or negative"
*/
let n = 6
console.log(n)

if (n >= 0) {
  console.log("positive")
} else {
  console.log("negative")
}

/*
  Exercise 2
    "Write a conditional that gives users who are 18+ 
    access and logs access denied for users 
    who do not meet the given condition."
*/
let age = 21;

if (age >= 18) {
  console.log("Access granted");
}
else {
  console.log("Access denied")
}

/*
  Exercise 3
  Write a nested if/else statement
  Declare a variable ‘num’
  Add an if/else statement that checks if ‘num’ is positive & greater than 100
  Add another statement that checks if ‘num’ is positive but less than 100
  Add an the final statement to check if ‘num’ is negative
*/
let num = 0

if (num >= 0) {
  if (num > 100) {
    console.log('num is positive and > 100')
  }
  else if (num < 100) {
    console.log('num is positive and < 100')
  }
  else {
    console.log('num equals 100')
  }
}
else {
  console.log('num is negative')
}


/*
  Exercise 4
    Write a for loop that iterates from 1 - 20. 
    Prints “prime” for all prime numbers, 
    “even” for all even numbers, and “odd” for all odd numbers.
      - Treat 2 as an even number and 1 & 3 as odd
*/

/*
  isPrime(x: int)
      "To prove whether a number is a prime number, first try dividing it by 2, 
      and see if you get a whole number. [...]
      If you don't get a whole number, next try dividing it by prime numbers"
      courtesy: https://www.factmonster.com/math-science/mathematics/prime-numbers-facts-examples-table-of-all-up-to-1000
*/
function isPrime(x) {
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) return false;
    if (isPrime(i)) {
      if (x % i === 0) return false;
    }
  }
  return true;
}

let ignorePrime = [1, 2, 3];
for (let i = 1; i <= 20; i++) {
  if (i >= 4 && isPrime(i)) {
    console.log(i, "is prime");
  }
  if (i % 2 === 0) {
    console.log(i, "is even");
  }
  else {
    console.log(i, "is odd");
  }

}
