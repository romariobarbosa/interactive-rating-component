const botao1 = document.getElementById("opt1");
const botao2 = document.getElementById("opt2");
const botao3 = document.getElementById("opt3");
const botao4 = document.getElementById("opt4");
const botao5 = document.getElementById("opt5");
const botaoSubmit = document.getElementById("submit");
const start = document.getElementById("start");
const end = document.getElementById("end");
const text = document.getElementById("rating-result");
var rating = 0;

function botaoPadrao (){
        botao1.attributeStyleMap.clear()
        botao2.attributeStyleMap.clear()
        botao3.attributeStyleMap.clear()
        botao4.attributeStyleMap.clear()
        botao5.attributeStyleMap.clear()
}

switch (rating) {
        case botao1.addEventListener("click", () => {
            botaoPadrao()
            rating = 1;
            botao1.style.cssText = 'background-color: hsl(217, 12%, 63%);' + 'color: white;';
        }):
        break;
        case botao2.addEventListener("click", () => {
            botaoPadrao()
            rating = 2;
            botao2.style.cssText = 'background-color: hsl(217, 12%, 63%);' + 'color: white;'
        }):
        break;
        case botao3.addEventListener("click", () => {
            botaoPadrao()
            rating = 3;
            botao3.style.cssText = 'background-color: hsl(217, 12%, 63%);' + 'color: white;'  
        }):
        break;
        case botao4.addEventListener("click", () => {
            botaoPadrao()
            rating = 4;
            botao4.style.cssText = 'background-color: hsl(217, 12%, 63%);' + 'color: white;'   
        }):
        break;
        case botao5.addEventListener("click", () => {
            botaoPadrao()
            rating = 5;
            botao5.style.cssText = 'background-color: hsl(217, 12%, 63%);' + 'color: white;'
        }):
        break;
    }

botaoSubmit.addEventListener("click", () => {
    if (rating != 0) {
        start.parentNode.removeChild(start);
        end.classList.toggle("aberto");
        text.innerHTML = "&nbsp" + rating + "&nbsp"
    } else {
        alert("Por favor selecione uma nota")
    }
})