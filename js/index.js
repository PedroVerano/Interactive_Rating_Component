const botoes = document.querySelectorAll(".botao");
const statusPer = document.querySelector(".status");
const submit_status = document.querySelector(".subimi_status");
const number = document.querySelector(".number");
const botao_submit = document.querySelector(".submit");


botoes.forEach((botao, index) => {
    botao.addEventListener('click' , () => {
        const botaselecionado = document.querySelector('.botao.selecionado');
        const valor = index + 1;
        if (botaselecionado == null) {
            botao.classList.add("selecionado");
            number.innerText=valor;

        } 
        botaselecionado.classList.remove("selecionado");
        botao.classList.add("selecionado"); 
        number.innerText=valor;
        console.log(valor);
        
    })
});

botao_submit.addEventListener('click', () => {
    submit_status.classList.remove("hide");
    statusPer.classList.add("hide");
});

