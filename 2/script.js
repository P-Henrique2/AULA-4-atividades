function verificarParImpar() {
    let N = parseInt(prompt("Digite um número:"));

    if (N % 2 === 0) {
        alert("O número " + N + " é PAR");
    } else {
        alert("O número " + N + " é ÍMPAR");
    }
}

document.getElementById('verificarBtn').addEventListener('click', verificarParImpar);
