const botao = document.querySelector('.botao');
const id = document.querySelector('.id');
const conselho = document.querySelector('.conselho');


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(resposta => resposta.json())
    .then(resposta => {
        id.innerHTML = `Advice # ${resposta.slip.id}`;
        conselho.innerHTML= resposta.slip.advice;
    })

}

getAdvice()

botao.onclick = getAdvice