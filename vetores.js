var produtos = [5]
var item = prompt("item");
var soma = 0;
for(let i=0; i < item; i++){
produtos[1] = parseInt(prompt("item"));
soma+= produtos[i];
}
for(let i=0; i<item; i++){
    document.writeln(produtos[i]+"<br>");
}
alert (soma);