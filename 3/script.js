function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case 'adicao':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Erro: divisão por zero';
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    document.getElementById('resultado').textContent = resultado;
}

document.getElementById('calcularBtn').addEventListener('click', calcular);
