//exercicio1
let num 
document.write("<br><br>")
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
let imc =(peso / (altura * altura)) ;
if (imc <= 18.5) {
    document.write("abaixo do peso") 
    document.write("<br><br>")
}else if (imc >= 18.5  && imc <= 24.9) {
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
}else if (idade >= 13 && idade <= 18){
    document.write("é um adolescente")
    document.write("<br><br>")
}else if(idade >= 19 && idade <= 60){
    document.write("é uma adulto")
    document.write("<br><br>")
}else if (idade >= 60) {
    document.write("é um idoso")
    document.write("<br><br>")
}

//exercicio 5

let usuário
let senha = 1234
let senha2 =prompt("Digite  seu senha")
if(senha2 == senha){
    document.write("login foi realizado com sucesso")
    document.write("<br><br>")
}else if(senha2 != senha){
    document.write("houve falha de autenticação")
    document.write("<br><br>")
}

//exercicio 6

let nota1 =parseInt(prompt("Digte a primeira nota"))
let nota2 =parseInt(prompt("Digte a segunda nota"))
let nota3 =parseInt(prompt("Digte a terceira nota"))
let nota4 =parseInt(prompt("Digte a quarta nota"))
let media =((nota1 + nota2 + nota3 + nota4) / 4)
document.write("a média é: ", media)
document.write("<br><br>")
if (media >= 6)  { 
    document.write("O aluno está aprovado")
    document.write("<br><br>")
}
else if (media <  5){
    document.write("O aluno está de reprovado")
    document.write("<br><br>")
}else {
    document.write("O aluno está de recuperação")
    document.write("<br><br>")
}

//exercicio 7

let nomehtml =prompt("digite seu nome")
document.write("O nome do usuario é", nomehtml)
document.write("<br><br>")
let idadehtml =prompt("digite seu idade")
document.write("a idade do usuario é", idadehtml)
document.write("<br><br>")
let cursohtml =prompt("digite seu curso")
document.write("o curso do usuario é", cursohtml)
document.write("<br><br>")
let anohtml =prompt("digite o ano atual")
document.write("O ano que o usuario está é", anohtml)
document.write("<br><br>")

//exercicio 8
let palavra ="O lugar vira tecnologia"
document.write(palavra.replace("lugar","mundo"))
document.write("<br><br>")

//exercicio 9

let number = "123.45678"
document.write("numero em forma string" + numero)
document.write("<br><br>")
let numberFloat = parseFloat(numero).toFixed(2)
document.write("numero em float " +numeroFloat)











