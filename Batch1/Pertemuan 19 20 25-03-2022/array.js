// // satu variabel menampung banyak nilai
// var nama_tokoh = ["Naruto", "Goku", "Sasuke", "Jiraya"];

// // mencetak semua yang ada di nama tokoh
// console.log(nama_tokoh);

// // mencetak Sasuke saja 
// console.log(nama_tokoh[2])

// // mencetak nilai pertama dari nama_tokoh 
// console.log(nama_tokoh[0]);

//////////////////////////////////////////////////////////

// True itu 1
// False itu 0
// var guestList = ["Naruto", "Goku", "Kameha", "Gintoki"];
// var guestName = prompt("Masukkan nama");

// if(guestList.includes(guestName) == 1) {
//    alert("Ada orangnya");
// } else {
//     alert("Ga ada orangnya");
// }


////// PUSH & POP ///////////// LAST IN FIRST OUT (LIFO)

var guestList = ["Naruto", "Goku", "Kameha", "Gintoki"];

console.log("Sebelum Windah diundang: " + guestList);

guestList.push("Windah");

console.log("Setelah Windah diundang: " + guestList);

guestList.push("Kakak Ilham");

console.log("Setelah Kakak Ilham diundang: " + guestList);

/// POP: REMOVE/MEMBUANG
guestList.pop();
console.log("Siapa yang ditendang karena dateng terakhir: " + guestList);


