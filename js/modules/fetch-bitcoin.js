export default function FetchbBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json()) /* resposta em json */
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      console.log(btcPreco);
    })
    .catch((erro) => {});
}
