function calcularMedia() {
    let nota1 = parseFloat(prompt("Insira a primeira nota:"));
    let nota2 = parseFloat(prompt("Insira a segunda nota:"));
    let nota3 = parseFloat(prompt("Insira a terceira nota:"));
    let nota4 = parseFloat(prompt("Insira a quarta nota:"));

    if (
        isNaN(nota1) || isNaN(nota2) ||
        isNaN(nota3) || isNaN(nota4)
    ) {
        alert("Por favor, insira apenas números válidos.");
        return;
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        alert("Aprovado! Média: " + media.toFixed(2));
    } else {
        alert("Reprovado! Média: " + media.toFixed(2));
    }
}


document.getElementById('calcularBtn').addEventListener('click', calcularMedia);
