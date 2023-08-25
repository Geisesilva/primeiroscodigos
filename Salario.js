var salarioBase = parseFloat(prompt("qual o seu salário?"));
var horaSemanal = parseFloat(prompt("quantas horas você trabalhou?"));
var salario = 0;
var hora = salarioBase/160; // 160 == 40h carga trabalhada * 4 semanas do mês (aproximado)
var horaExtra = hora*1.5;
if (horaSemanal >= 40){
    salario = salarioBase +(horaExtra *(horaSemanal-40));
    alert("salarioBruto:"+ salario + "\nsalarioliquido"+"salario*0.975"); // ISS calculado 2,5%
}
else {
    salario = salarioBase - (horaSemanal*hora);
    alert ("salarioBruto:"+ salario + "\nsalarioliquido"+"salario*0.975");
}
