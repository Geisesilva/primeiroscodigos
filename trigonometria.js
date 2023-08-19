var trigonometria = prompt("escolha \n1.seno\n2.cosseno\n3.tangente");
var angulo = prompt("digite o ângulo");
switch (trigonometria){
    case'1':
alert(Math.sin((angulo*Math.PI)/180).toFixed(2));break;
 case'2':
alert(math.cos((angulo*Math.PI)/180).toFixed(2));break;
 case'3':
 alert(Math.tan((angulo*Math.PI)/180).toFixed(2));break;
 default:
    alert("Opção inválida");
}