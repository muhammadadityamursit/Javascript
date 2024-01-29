// DOM Selection

// document.getElementById () --> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "green";
judul.innerHTML = "Muhammad Aditya Mursyid";

// document.getElementByTagName()
// const p = document.getElementsByTagName("p");

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "brown";
// }

const h1 = document.getElementsByTagName("h1")[0]; // Mengambil element
h1.style.fontSize = "50px";

// document.getElementByClassName
// -> HTML Collection

const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "diubah oleh javascript";

// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "blue";

// document.querySelectorAll()

const p = document.querySelectorAll("p");
p.style.backgroundColor = "red";
