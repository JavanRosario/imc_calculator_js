let imc_result;

function imc() {  
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    weight = parseFloat(weight.value);
    height = parseFloat(height.value);
    imc_result = (weight / height ** 2).toFixed(2);
    if (!weight || !height) {
      alert("DIGITE ALGUM VALOR");
    }

    if (imc_result < 18.5) {
      document.getElementById(
        "result"
      ).innerHTML = `SEU IMC: ${imc_result} ABAIXO DO PESO`;
    } else if (imc_result > 18.5 && imc_result < 24.9) {
      document.getElementById(
        "result"
      ).innerHTML = `SEU IMC: ${imc_result} PESO NORMAL`;
    } else if (imc_result > 25 && imc_result < 29.9) {
      document.getElementById(
        "result"
      ).innerHTML = `SEU IMC: ${imc_result} SOBREPESO`;
    } else if (imc_result > 30 && imc_result < 34.9) {
      document.getElementById(
        "result"
      ).innerHTML = `SEU IMC: ${imc_result}  OBESIDADE GRAU I`;
    } else if (imc_result > 35 && imc_result < 39.9) {
      document.getElementById(
        "result"
      ).innerHTML = `SEU IMC: ${imc_result} OBESIDADE GRAU II`;
    } else if (imc_result > 40) {
      document.getElementById(
        "result"
      ).innerHTML = `SEU IMC: ${imc_result} OBESIDADE GRAU III`;
    }
  });
}

imc();
