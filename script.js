// // example if...else, nested if
// let nilai = 75;
// if (nilai >= 90) {
//   console.log("Nilai Anda A");
// } else if (nilai >= 80) {
//   console.log("Nilai Anda B");
// } else if (nilai >= 70) {
//   console.log("Nilai Anda C");
// } else {
//   console.log("Nilai Anda D");
// }

// example if...else, nested if
let nilai = 75;
if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// example switch statement---
let hari = "Kamis";
switch (hari) {
  case "Senin":
    console.log("Hari ini Senin");
    break;
  case "Selasa":
    console.log("Hari ini Selasa");
    break;
  case "Rabu":
    console.log("Hari ini Rabu");
    break;
  case "Kamis":
    console.log("Hari ini kamis");
    break;
  default:
    console.log("Hari ini bukan Senin, Selasa, Rabu atau Kamis");
}

// example for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
  }

// example while, do while
let counter = 0;
while (counter < 5) {
  console.log("While loop: " + counter);
  counter++;
}

let counter2 = 0;
do {
  console.log("Do-while loop: " + counter2);
  counter2++;
} while (counter2 < 5);

// example funtion
function kurang(a, b) {
    return a - b;
  }
  
  let hasil = kurang(100, 50);
  console.log("Hasil pengurangan: " + hasil);
  






