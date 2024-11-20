let html = document.getElementById("nav-a")
let css = document.getElementById("nav-b")
let js = document.getElementById("nav-c")
let sql = document.getElementById("nav-d")
let python = document.getElementById("nav-f")


let slider1 = document.querySelector("#slider1")
let slider2 = document.querySelector("#slider2")
let slider3 = document.querySelector("#slider3")
let slider4 = document.querySelector("#slider4")
let slider5 = document.querySelector("#slider5")


let a = close
html.onclick = function () {

    slider1.classList.remove("f-html")
    slider2.classList.add("f-css")
    slider3.classList.add("f-js")
    slider4.classList.add("f-sql")
   slider5.classList.add("f-python")

}

css.onclick = function () {

    slider2.classList.remove("f-css")
    slider1.classList.add("f-html")
    slider3.classList.add("f-js")
    slider4.classList.add("f-sql")
    slider5.classList.add("f-python")

}
js.onclick = function () {

    slider3.classList.remove("f-js")
    slider1.classList.add("f-html")
    slider2.classList.add("f-css")
    slider4.classList.add("f-sql")
    slider5.classList.add("f-python")

}
sql.onclick = function () {
    slider4.classList.remove("f-sql")
    slider3.classList.add("f-js")
    slider1.classList.add("f-html")
    slider2.classList.add("f-css")
    slider5.classList.add("f-python")

}
python.onclick = function () {
    slider5.classList.remove("f-python")
    slider4.classList.add("f-sql")
    slider3.classList.add("f-js")
    slider1.classList.add("f-html")
    slider2.classList.add("f-css")
}


let menu_btn = document.getElementById("menu")

let all_slider =document.getElementById("all_slider")
menu_btn.onclick = function(){
    
    slider1.classList.toggle("f")
    slider2.classList.toggle("f")
    slider3.classList.toggle("f")
    slider4.classList.toggle("f")
    slider5.classList.toggle("f")
    
}