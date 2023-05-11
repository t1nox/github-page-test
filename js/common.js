const select1 = new ItcCustomSelect('#select-1');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + ' %';

slider.oninput = function() {
    output.innerHTML = this.value + ' %';
}

let button = document.querySelector('.js-burger');
let menu = document.querySelector('.header-nav'); 

button.onclick = () => { 
   menu.classList.toggle('open');
   button.classList.toggle('is-active');
}