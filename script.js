let label1 = document.querySelector('.signIn');
let label2 = document.querySelector('.signUp');
let input = document.querySelector('.input1');
let butao = document.querySelector('button');
let troca = document.querySelector('form');
let inputE = document.querySelector('.email');
let inputP1 = document.querySelector('.password1');
let inputP2 = document.querySelector('.password2');


troca.onclick = function(){
    label2.classList.toggle('signUp1');
    label1.classList.toggle('signIn1');
    input.classList.toggle('input2');
    butao.classList.toggle('button1');
    controlTexto();
}

function controlTexto(){
    if(butao.innerHTML === "Sign In"){
      butao.innerHTML = "Sign Up";
    }
    else{
      butao.innerHTML = "Sign In";
    }
}


