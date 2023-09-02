/*function dump_props(obj, obj_name) {
    var result = "";
    for (var i in obj) {
      result += obj_name + "." + i + " = " + obj[i] + "<br>";
    }
    result += "<hr>";
    return result;
  }  
  alert(result);*/
var nota = [8,7,6,4,2,9]

for(let i=0;i<6;i++){
   document.write(nota[i]+",");
}document.white("<br><br>")
for (let j=5;j>=0;j--){
   document.write(nota[j]+",");
}document.write("<hr>")
for (let k=0;k<6;k++){
  document.write(nota[5-k]+",");
}
for (let l in nota){
  document.write(l+",");
}document.write("<hr>")
for (let m of nota) {
  document.write(m+",");
}
nota.forEach()