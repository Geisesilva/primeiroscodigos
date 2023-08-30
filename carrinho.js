alert ("Supermercado do Torquato");
let produtos=0, preco=0 ,precototal=0;
while (preco != -1){
 preco = parseFloat(prompt("preço R$  "));
 precototal += preco;
 produtos++;
}
precototal+=1;
produtos-=1;
alert ("quantidade " + produtos + "R$ " + precototal);