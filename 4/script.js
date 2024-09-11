function contagemRegressiva() {
    let numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um número válido maior ou igual a zero.';
        return;
    }

    document.getElementById('resultado').innerHTML = '';

    let intervalo = setInterval(() => {
        if (numero >= 1) {
            console.log(numero);
            document.getElementById('resultado').innerHTML += numero + '<br>';
            numero--;
        } else {
            clearInterval(intervalo);
            console.log('Contagem regressiva finalizada!');
            document.getElementById('resultado').innerHTML += 'Contagem regressiva finalizada!';
        }
    }, 1000);
}

document.getElementById('iniciarBtn').addEventListener('click', contagemRegressiva);
