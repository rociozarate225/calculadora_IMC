const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = Number(document.querySelector("#peso").value);
    const estatura = Number(document.querySelector("#estatura").value);

    if (peso <= 0 || estatura <= 0 || estatura > 3) {
        alert("Introduce un peso y una estatura válidos.");
        return;
    }

    const imc = peso / (estatura * estatura);

    resultado.textContent = "Tu IMC es: " + imc.toFixed(2);
});