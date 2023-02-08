//pega os dados do usuario
const $inputName = document.querySelector('input[name="nome"]');
const $inputAltura = document.querySelector("#altura");
const $inputPeso = document.querySelector("#peso");
const $resultado = document.querySelector("#resultado");
const $btnCalcular = document.querySelector("#btn-calcular");

//esculta o evento do botao e chama a funcao
$btnCalcular.addEventListener('click', imc);

function imc(){
    //converte as entradas numericas para float e convertendo a , para .  
    const nAltura = parseFloat($inputAltura.value.replace(",","."));
    const nPeso = parseFloat($inputPeso.value.replace(",","."));
    //verifica se os campos não estão vazios
    if ($inputName.value !== '' && $inputAltura.valueOf() !== '' && $inputPeso.valueOf() !== '') {
        //calculo do imc
        const calc = nPeso/(nAltura*nAltura);

        let classificacao = '';

        //condicionais da classificação do imc
        if (calc < 18.5 ){
            classificacao = "Abaixo do Peso Normal"
        }else if (calc >= 18.5 && calc <= 24.9) {
            classificacao = "Peso Normal"
        }else if (calc >=25.5 && calc <= 29.9) {
            classificacao = "Excesso de Peso"
        }else if (calc >= 30 && calc <= 34.9) {
            classificacao = "Obesidade Classe I"
        }else if (calc >= 35 && calc <= 39.9) {
            classificacao = "Obesidade Classe II"
        }else{
            classificacao = "Obesidade Classe III"
        }
        //processo de formatação do numero em "en" par "pt-BR"
        const formatter = new Intl.NumberFormat("pt-BR", {
            style: "decimal",
            maximumFractionDigits: 2,
          });
        const formattedNumber = formatter.format(calc);
        //mostrando o resultado da classificação
        $resultado.innerHTML = `<h3>${$inputName.value} seu IMC é ${formattedNumber}<br> e você está classificado como:<br> ${classificacao}</h3>`;
        
        // console.log($inputPeso.value +" / "+ $inputAltura.value);
        // console.log(formattedNumber);
    }else{
        $resultado.innerHTML = `<h3>Por favor preencha todos os campos.</h3>`;
    }
    
}


