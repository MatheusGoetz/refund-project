// Selecionando os elementos do formulário.
const amount = document.getElementById("amount");

// Capturando evento de input para formatar o valor.
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, '')

  // Transforma o valor em centavos.
  value = Number(value) / 100

  // Atualiza o valor do input.
  amount.value = formatCurrencyBRl(value)
}


function formatCurrencyBRl(value){
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
  
  return value
}