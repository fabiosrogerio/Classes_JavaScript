//Pontuação total: 8.4 / 10 pontos

//Questão 1: 1 ponto
let nota1 = 12, nota2 = 25, nota3 = 53, media
media=(nota1+nota2+nota3)/3
console.log(media)

//Questão 2: 0.8 pontos
let numero1, numero2, soma
numero1 = parseFloat(prompt("Digite um número:"))
numero2 = parseFloat(prompt("Digite outro número:"))
soma= numero1 * numero2
console. log(`A soma desses números é: ${soma}`)

//Questão 3: 0.7 pontos
let nome, nota1, nota2, nota3, media
nome = prompt("Digite seu nome:")
nota1 = parseFloat(prompt("Digite a primeira nota:"))
nota2 = parseFloat(prompt("Digite a segunda nota:"))
nota3 = parseFloat(prompt("Digite a terceira nota:"))
media=(nota1+nota2+nota3)/3
media = media.toFixed(1)
console.log(`${nome} obteve média: ${media} nas provas`)

//Questão 4: 1 ponto
let numero1, numero2, resto
numero1 = parseFloat(prompt("Digite um número:"))
numero2 = parseFloat(prompt("Digite outro número:"))
resto = (numero1 % numero2)
console. log(`O resto da divisão desses números desses números 
é: ${resto}`)

//Questão 5: 1 ponto
let gasto, taxa, total
gasto= parseFloat(prompt("Digite o gasto do cliente:"))
taxa= gasto*0.1
total=gasto + taxa
console.log(`O gasto total no restaurante é: ${total}`)

//Questão 6: 1 ponto
let celsius, fahrenheit
celsius = parseFloat(prompt("Digite a temperatura em celsius:"))
fahrenheit= 1.8*celsius + 32
console.log(`Atemperatura em Fahrenheit é: ${fahrenheit}`)

//Questão 7: 0.9 pontos
let raio, perimetro, area
raio= parseFloat(prompt("Digite o raio do círculo:"))

perimetro= 2*3.14*raio
area= 3.14*(raio**2)

console.log(`O perímetro do círculo é: ${perimetro}`)
console.log(`A área do círculo é: ${area}`)

//Questão 8: 1 ponto
let numerador, denominador, numeroDecimal
numerador= parseFloat(prompt("Digite o numerador:"))
denominador= parseFloat(prompt("Digite o denominador:"))
numeroDecimal= numerador / denominador
console.log(`O número decimal é: ${numeroDecimal}`)

//Questão 9: 1 ponto
let dias, meses, anos, idade
anos= parseFloat(prompt("Digite os anos de sua idade:"))
meses= parseFloat(prompt("Digite os meses de sua idade:"))
dias= parseFloat(prompt("Digite os dias de sua idade:"))
idade= (anos*365) + (meses*30) + dias
console.log(`A sua idade em dias é: ${idade}`)

//Questão 10: 0 ponto

/*
var arredondadoParaBaixo = Math.floor(3/2);
var arredondadoParaProximo = Math.round(3/2);
var arredondadoParaCima = Math.ceil(3/2);
 */

let numero, centena, dezena, unidade, inverso
numero = parseInt(prompt("Digite um número inteiro de 3 digitos:"))
unidade = Math.round(numero/100)// 123/100 = 1
dezena = numero % 100// 123 % 100 = 23
centena = (dezena % 10)*100 // 23 % 10 = 3
dezena = (Math.round(dezena/10))*10 // 23 / 10 = 2

inverso = centena + dezena + unidade
console.log(`O número ${numero} invertido é: ${inverso}.`)
