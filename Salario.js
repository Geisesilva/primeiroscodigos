var salarioBase = parseFloat(prompt("qual o seu salário?"));
var horaSemanal = parseFloat(prompt("quantas horas você trabalhou?"));
var salario = 0;
var hora = salarioBase/160;
var horaExtra = hora*1.5;
if (horaSemanal >= 40){
    salario = salarioBase +(horaExtra *(horaSemanal-40));
    alert("salarioBruto:"+ salario + "\nsalarioliquido"+"salario*0.975");
}
else {
    salario = salarioBase - (horaSemanal*hora);
    alert ("salarioBruto:"+ salario + "\nsalarioliquido"+"salario*0.975");
}