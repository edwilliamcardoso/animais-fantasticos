export default function initFetchbBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json()) /* resposta em json */
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      console.log(btcPreco);
    })
    .catch((erro) => {});
}
