let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

d1.addEventListener("mouseover", () => {p1.style.visibility = "visible";});
d1.addEventListener("mouseout", () => {p1.style.visibility = "hidden";});
d2.addEventListener("mouseover", () => {p2.style.visibility = "visible";});
d2.addEventListener("mouseout", () => {p2.style.visibility = "hidden";});
