let menu = document.querySelector('.burguer');
let l1 = document.querySelector('.icons');
let lateral = document.querySelector('aside');
let contain = document.querySelector('.home');

l1.onclick = function(){
    l1.classList.toggle('icons2');
    lateral.classList.toggle('lateral');
    contain.classList.toggle('home1');

}

