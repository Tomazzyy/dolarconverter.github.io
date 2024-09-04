
function calcularr(){
    let real = document.getElementById("valorreal").value
    let dolar = document.getElementById("valordolar").value
   
let final = document.getElementById("valor-final-dolar");

let resultado = real / dolar;
final.innerHTML = resultado.toFixed(2); // É usado para definir ou obter o conteúdo HTML de um elemento. Isso é ideal para elementos como <span>, <div>, ou <p>. 
//A função toFixed(2) é usada para garantir que o resultado seja exibido com duas casas decimais. Isso é útil para valores monetários.
}

