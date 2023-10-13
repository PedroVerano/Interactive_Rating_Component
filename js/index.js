const botoes = document.querySelectorAll(".botao");
const status = document.querySelector("status");
const submit_status = document.querySelector("subimi_status");
const number = document.querySelector(".number");


botoes.forEach((botao, index) => {
    botao.addEventListener('click' , () => {
        const botaselecionado = document.querySelector('.botao.selecionado');
        const valor = index + 1;
        if (botaselecionado == null) {
            botao.classList.add("selecionado");
            console.log(valor)

        } 
        botaselecionado.classList.remove("selecionado");
        botao.classList.add("selecionado"); 
        console.log(valor)
    })
});