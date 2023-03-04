//btn acende/apaga

function checkbox() {
    if (document.getElementById('checkbox').checked) {
        document.body.style.background = "#353634";
    }
    else {
        document.body.style.background = "#ffff";    
    }
    
}

function conversor() {
    document.getElementById('modal').style.display = 'block'
}

function closeAll() {
    document.getElementById('modal').style.display = 'none'
}

/* INICIO DA API */
                

function buscarValor() {
    event.preventDefault();


    const moedas = document.getElementById('moedas').value;
        
    const url = `https://economia.awesomeapi.com.br/last/${moedas}`
    //const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

    
    fetch(url).then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data)
                getData (data)
        })
    })
}

function getData(dados) {
    const textarea = document.getElementById('textarea')
    const valorInput = document.getElementById('valorInput').value;

    if (moedas.value === ('USD-BRL')) {
        textarea.innerText= `Valor do Dólar: R$${parseFloat(dados.USDBRL.ask).toFixed(2)} 
                            Valor desejado: R$${(parseFloat(dados.USDBRL.ask)*parseFloat(valorInput)).toFixed(2)}.`
        
    }
    else if (moedas.value === ('EUR-BRL')) {
        textarea.innerText= `Valor do Dólar: R$${parseFloat(dados.EURBRL.ask).toFixed(2)} 
                            Valor desejado: R$${(parseFloat(dados.EURBRL.ask) * parseFloat(valorInput)).toFixed(2)}.`
        
    }
    else if (moedas.value === ('BTC-BRL')) {
        textarea.innerText= `Valor do Dólar: R$${parseFloat(dados.BTCBRL.ask).toFixed(2)} 
                            Valor desejado: R$${(parseFloat(dados.BTCBRL.ask)*parseFloat(valorInput)).toFixed(2)}.`


    } else {
        alert('Seleciona uma moeda!')
    }
}
