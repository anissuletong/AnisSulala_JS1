// example if...else, 
let buah = "mangga"; // Jenis buah buahan yang di pilih 
if (buah === "apel") {
  console.log("Ini adalah buah apel");
} else if (buah === "pisang") {
  console.log("Ini adalah buah pisang");
} else if (buah === "mangga") {
  console.log("Ini adalah buah mangga");
} else {
  console.log("Ini adalah buah lain");
}


// example nested if
let tiket = 250; // Harga tiket
if (tiket >= 200 && tiket < 300) {
  console.log("Tiket agak mahal");
  if (tiket >= 300) {
    console.log("Tiket sangat mahal");
  }
} else if (tiket >= 300) {
  console.log("Tiket sangat mahal");
} else {
  console.log("Tiket murah");
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
let jumlahGanjil = 0;

for (var angka = 1; angka <= 10; angka++) {
  if (angka % 2 !== 0) { // Memeriksa apakah angka ganjil
    jumlahGanjil += angka;
  }
}
console.log("Jumlah bilangan ganjil dari 1 hingga 10 adalah: " + jumlahGanjil);



// example while, do while
let counter = 0;
while (counter < 3) {   //memeriksa kondisi sebelum menjalankan pernyataan di dalam loop
  console.log("While loop: " + counter);
  counter++;
}

let counter2 = 0;
do {  //menjalankan pernyataan di dalam loop sekali sebelum memeriksa kondisi.
  console.log("Do-while loop: " + counter2);
  counter2++;
} while (counter2 < 3);

// example funtion
function kurang(a, b) {
    return a - b;  //pernyataan yang ada dalam fungsi.ini mengembalikan hasil pengurangan a dan b sebagai hasil dari fungsi kurang.
  }
  
  let hasil = kurang(100, 50);
  console.log("Hasil pengurangan: " + hasil); //mencetak pesan Hasil pengurangan
  






