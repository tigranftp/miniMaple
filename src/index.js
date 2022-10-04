import {MiniMaple} from './miniMaple.js'



window.onload = function() {
    document.querySelector('input#expression').value = "x^2+7x";
    document.querySelector('input#variable').value = "x";
}

const maple = new MiniMaple();

calculate.onclick = function() {
    let answer = document.querySelector("div#answer");
    answer.removeChild(answer.firstChild);

    let variable = document.getElementById('variable').value;
    let equation = document.getElementById('expression').value;

    let res = '';
    if(!variable.match(/[a-z]/)){
        res = 'Error';
    }
    else{
        res = maple.derivative(equation, variable);
    }

    let node = document.createTextNode("Результат:" + res);
    answer.appendChild(node);
};