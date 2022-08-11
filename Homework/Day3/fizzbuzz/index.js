grades();
countByTen();
fizzBuzz();

/*
  Grades
*/
function grades() {
  let grade = 88;

  if (grade >= 80) {
    console.log("You did a good job");
  }
  else if (grade >= 70) {
    console.log("Keep trying");
  }
  else if (grade >= 60) {
    console.log("ehhhh");
  }
  else if (grade >= 55) {
    console.log("Not too good");
  }
  else {
    console.log("Bad grade but you'll get em next time");
  }
}

/*
    Count by 10
    "Write a for loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100"
*/
function countByTen() {
  let output = "";
  for (i = 0; i <= 1; i++) {
    for (j = 1; j <= 10; j += 2) {
      if (j > 1) {
        output += ", ";
      }
      output += (i + j) * 10;
    }
    output += " ";
  }
  console.log(output);
}


/*
  FizzBuzz
*/
function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}  