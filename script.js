let btnopen=document.querySelector("#open");
let btnclose=document.querySelector("#close");
let container=document.querySelector(".container");

btnclose.onclick=function() {
    this.classList.add("hide");
    container.classList.add("hide");
    btnopen.classList.remove("hide")
}

btnopen.onclick=function(){
    this.classList.add("hide")
    container.classList.remove("hide");
    btnclose.classList.remove("hide");
}

