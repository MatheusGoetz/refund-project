// Selecionando os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Capturando evento de input para formatar o valor.
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, '')

  // Transforma o valor em centavos.
  value = Number(value) / 100

  // Atualiza o valor do input.
  amount.value = formatCurrencyBRl(value)
}
// Função que formata a moeda para Real Brasileiro
function formatCurrencyBRl(value){
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return value
}

// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) =>{
  event.preventDefault();
  // Cria um objeto com os detalhes da nova despesa.
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date(), 
  }

  console.log(newExpense)
}