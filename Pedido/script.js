function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
     show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block"
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }
    else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectPratos = document.getElementById("selectPratos");
    var selectBebidas = document.getElementById("selectBebidas");
    var selectSobremesas = document.getElementById("selectSobremesas");
    var resultadoSpan = document.getElementById("resultado");


var total = 0;
var pratos = 0;
var bebidas = 0;
var sobremesas = 0;

switch (selectpratos){
    case "Coxinha (c. catupiry)":
        total += 8,50;
        pratos = 8,50;
    break;
    case "Empadão de camarão":
        total += 12,90;
        pratos = 12,90;
    break;
    case "Sanduiche natural":
        total += 9,80;
        pratos = 9,80;
    break;
}

switch (selectbebidas){
    case "Cafés":
        total += 9,0;
        bebidas = 9,0;
    break;
    case "Sucos naturais":
        total += 11,0;
        bebidas = 11,0;
    break;
    case "Chás":
        total += 8,50;
        bebidas = 8,50;
    break;
}

switch (selectsobremesas){
    case "Fatia de Bolo":
        total += 9,50;
        sobremesas = 9,50;
    break;
    case "Bombons":
        total += 4,0;
        sobremesas = 4,0;
    break;
    case "Sonhos":
        total += 10,0;
        sobremesas = 10,0;
    break;
}

document.getElementById("pedido-pronto").style.display = "block"
document.getElementById("bebidas-pronto").textContent = selectbebidas.value + " - R$ " + bebidas.toFixed(2);
document.getElementById("sobremesas-pronto").textContent = selectsobremesas.value + " - R$ " + sobremesas.toFixed(2);
document.getElementById("pratos-pronto").textContent = selectpratos.value + " - R$ " + pratos.toFixed(2);
resultadoSpan.textContent = " R$ " + total.toFixed(2);

}