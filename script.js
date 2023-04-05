//exercicio1
let num = undefined
document.write(num)
document.write("<br><br>")

//exercicio2
let num1 = 10
let num2 = 5
document.write(num1 % num2)

//exercicio 3
let peso =prompt("Digite seu peso")
let altura =prompt("Digite sua altura")
let imc =(peso / altura) ;
if (imc <= 18.5) {
    document.write("abaixo do peso") 
}else if (imc >= 18.5 || imc <= 24.9) {
    document.write("peso ideal") 
}else if(imc >= 24.9) {
    document.write("acima do peso") 
}

