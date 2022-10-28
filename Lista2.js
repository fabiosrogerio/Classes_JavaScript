/*Questão 1*/

ano = parseInt(prompt("Digite um ano ou um número negativo para sair:"))

while (ano>=0){

    if(ano%400 == 0){
        console.log(`O ano ${ano} é bissexto.`)
    } else if ((ano%4 == 0)&&(ano%100 != 0)){
        console.log(`O ano ${ano} é bissexto.`)
    } else {
        console.log(`O ano ${ano} não é bissexto.`)
    }

    ano = parseInt(prompt("Digite outro ano ou um número negativo para sair:"))
    
}

/*Questão 2*/

for (let i = 2; i <= 52; i = i + 2){

    console.log(i)

}
