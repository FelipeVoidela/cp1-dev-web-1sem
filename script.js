//exercicio1
let num 
document.write(num)
document.write("<br><br>")

//exercicio2
let num1 = 10
let num2 = 5
document.write(num1 % num2)
document.write("<br><br>")

//exercicio 3
let peso =prompt("Digite seu peso")
let altura =prompt("Digite sua altura")
let imc =(peso / altura) ;
if (imc <= 18.5) {
    document.write("abaixo do peso") 
    document.write("<br><br>")
}else if (imc >= 18.5 || imc <= 24.9) {
    document.write("peso ideal") 
    document.write("<br><br>")
}else if(imc >= 24.9) {
    document.write("acima do peso") 
    document.write("<br><br>")
}

//exercicio 4

let idade =prompt("Digite sua idade")

if(idade <=12){
    document.write("é uma criança")
    document.write("<br><br>")
}else if (idade >= 13 || idade <= 18){
    document.write("é um adolescente")
    document.write("<br><br>")
}else if(idade >= 19 || idade <= 60){
    document.write("é uma adulto")
    document.write("<br><br>")
}else if (idade >= 60) {
    document.write("é um idoso")
    document.write("<br><br>")
}
