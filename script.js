/* INICIO DA API */

function buscarValor() {
  event.preventDefault();

  const moedas = document.getElementById("moedas").value;

  const url = `https://economia.awesomeapi.com.br/last/${moedas}`;
  //const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

  fetch(url).then(function (response) {
    return response.json().then(function (data) {
      console.log(data);
      getData(data);
    });
  });
}

function getData(dados) {
  const textarea = document.getElementById("textarea");
  const valorInput = document.getElementById("valorInput").value;

  if (moedas.value === "USD-BRL") {
    textarea.innerText = `Valor do Dólar: $${parseFloat(
      dados.USDBRL.ask
    ).toFixed(2)} 
                            Valor em Real: R$${(
                              parseFloat(dados.USDBRL.ask) *
                              parseFloat(valorInput)
                            ).toFixed(2)}.`;
  } else if (moedas.value === "EUR-BRL") {
    textarea.innerText = `Valor do Euro: € ${parseFloat(
      dados.EURBRL.ask
    ).toFixed(2)} 
                            Valor em Real: R$${(
                              parseFloat(dados.EURBRL.ask) *
                              parseFloat(valorInput)
                            ).toFixed(2)}.`;
  } else if (moedas.value === "BTC-BRL") {
    textarea.innerText = `Valor do Bitcoin: ₿ ${parseFloat(
      dados.BTCBRL.ask
    ).toFixed(2)} 
                            Valor em Real: R$${(
                              parseFloat(dados.BTCBRL.ask) *
                              parseFloat(valorInput)
                            ).toFixed(2)}.`;
  } else {
    alert("Seleciona uma moeda!");
  }
}

function clear() {
  document.getElementById("campoPesquisa").value = "";
}

function conversor() {
  document.getElementById("modal").style.display = "block";
}

function closeAll() {
  document.getElementById("modal").style.display = "none";

  clear();
}
