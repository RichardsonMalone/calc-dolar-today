async function getResp(event) {
  const valor = parseFloat(event.target.value) || 1;
  console.log(valor);
  try {
    const response = await fetch(
      "https://economia.awesomeapi.com.br/json/last/USD-BRL"
    );

    if (!response.ok) {
      throw new Error("Moeda não encontrada");
    }

    const data = await response.json();
    let cotacao = parseFloat(data.USDBRL.bid);
    let result = valor * cotacao;

    document.getElementById("real").value = result.toFixed(2).replace(".", ",");
    console.log(result);
  } catch (erro) {
    console.error("erro não encontrado");
    console.log(erro);
  }
}
document.addEventListener("DOMContentLoaded", async () => {
  await getResp();
});
