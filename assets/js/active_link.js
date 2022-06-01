let link1 = document.querySelector("#topnav__link1")
let link2 = document.querySelector("#topnav__link2")
let link3 = document.querySelector("#topnav__link3")

link1.addEventListener("click", () => {
    link1.classList.add("color");
    link2.classList.remove("color");

})
link2.addEventListener("click", () => {
    link2.classList.add("color");
    link1.classList.remove("color");
})
link3.addEventListener("click", () => {
    link1.classList.remove("color");
    link2.classList.remove("color");
})