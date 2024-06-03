const btnSalvar = window.document.getElementById("btn_salvar")

// Capturando o elemento p da página html, atráves do get
const saida_da_mensagem = window.document.querySelector("#saida")
const container = window.document.getElementById("room")

// Ativando a estrutura de evento de click mouse no botão Salvar
btnSalvar.addEventListener("click", function(event){
    event.preventDefault() // Evita que a página seja recarregada por padrão. Isso facilita a captura e a validação de dados

    // Capturando o formulário dentro do documento html, atráves do DOM com o elemento getElementById
    const formulario = window.document.getElementById("archieves")

    // Capturando os dados das caixas (input), informando o elemento formulário, e acessando os atributos name de cada caixa de texto
    let vitorias = formulario.vitorias.value
    let derrotas = formulario.derrotas.value
    let saldoRankeadas = (vitorias - derrotas)

    console.log(vitorias)
    console.log(derrotas)
    console.log(saldoRankeadas)

    // Saída
    if(saldoRankeadas < 10){

        saida_da_mensagem.innerHTML = `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Ferro</strong>`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)"

    }else if(saldoRankeadas >= 11 && saldoRankeadas <= 20){

        saida_da_mensagem.innerHTML =  `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Bronze</strong> 🥉`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)"

    }else if(saldoRankeadas >= 21 && saldoRankeadas <= 50){

        saida_da_mensagem.innerHTML =  `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Prata</strong> 🥈`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)" 

    }else if(saldoRankeadas >= 51 && saldoRankeadas <= 80){

        saida_da_mensagem.innerHTML =  `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Ouro</strong> 🥇`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)"

    }else if(saldoRankeadas >= 81 && saldoRankeadas <= 90){

        saida_da_mensagem.innerHTML =  `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Diamante</strong> 💎`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)"

    }else if(saldoRankeadas >= 91 && saldoRankeadas <= 100){

        saida_da_mensagem =  `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Lendário</strong> ✨`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)"

    }else if(saldoRankeadas >= 101){

        saida_da_mensagem.innerHTML =  `O Herói tem de saldo de Rankeadas ${saldoRankeadas} está no nível de <strong>Imortal</strong> 🦅`
        // Personalizando Texto
        container.style.textTransform = "uppercase"
        container.style.textAlign = "center"
        container.style.fontSize = "20pt"
        container.style.color = "rgba(24, 22, 22, 0.9)"
        container.style.paddingTop = "70px"
        // Personalizando DIV
        container.style.alignItems = "center"
        container.style.margin = "0 auto"
        container.style.borderRadius = "30px"
        container.style.width = "300px"
        container.style.height = "300px"
        container.style.background = "rgba(207, 187, 187, 0.76)"

    }

   
    
})