for (let i = 0; i < 10; i++) {
  console.log(i);
}

//exercises in-class

//1. Write a for loop that counts down from 10 to 1.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//2. Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
for (i = 0; i <= 1; i++) {
  for (j = 1; j <= 10; j += 2) {
    console.log(i + j);
  }
}

//3. create a loop that outputs multiples of 3 starting at 6 ending at 60.
for (let i = 6; i <= 60; i += 3) {
  console.log(i);
}

//4. for loop for increasing # characters
let hashes = "";
for (i = 1; i <= 7; i++) {
  hashes += "#";
  console.log(hashes);
}
