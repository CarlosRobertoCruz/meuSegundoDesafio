console.log('DIAGNOSTICO PRÉVIO:')

var nome = prompt('Digite seu nome')
console.log('Nome: ' + nome)

var sexo = prompt('Digite seu sexo')
console.log('Sexo: ' + sexo)

var idade = (prompt('Digite sua idade'))
console.log('Idade: ' + idade)

var altura = parseFloat(prompt('Digite sua altura'))
console.log('Altura: ' + altura)

var peso = parseFloat(prompt('Digite seu peso'))
console.log('Peso: ' + peso.toFixed(1))


// categoria
var categoria = idade

if(categoria < 12)
{
    console.log('Categoria: Infantil');
}
else if(categoria >= 12 && categoria <= 20)
{
    console.log('Categora: Juvenil');
}
else if(categoria >= 21 && categoria <= 65)
{
    console.log('Categoria: Adulto');
}
else
{
    console.log('Categoria: Idoso');
}

// Observações
console.log('IMC desejado: entre 20 e 24')




// IMC
function calculoIMC(altura, peso)
{
    var IMC = peso / (altura * altura)
    return IMC
}

console.log('Resultado IMC: ' + calculoIMC(altura, peso).toFixed(2))



// Riscos
if(calculoIMC(altura, peso) < 20)
{
    console.log('Riscos: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.')
}
else if(calculoIMC(altura, peso) >= 20 && calculoIMC(altura, peso) <= 24)
{
    console.log('Riscos: Seu peso está ideal para suas referências.')
}
else if(calculoIMC(altura, peso) > 24 && calculoIMC(altura, peso) <= 29)
{
    console.log('Riscos: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares')
}
else if(calculoIMC(altura, peso) > 29 && calculoIMC(altura, peso) <= 35)
{
    console.log('Riscos: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade')
}
else
{
    console.log('Riscos: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.')
}



// Recomendações
if(calculoIMC(altura, peso) < 20)
{
    console.log('Recomendações: Inclua carboidratos simples em sua dieta, além de proteínas indispensáveis para ganho de massa magra. Procure um profissional .')
}
else if(calculoIMC(altura, peso) >= 20 && calculoIMC(altura, peso) <= 24)
{
    console.log('Recomendações: Mantenha uma dieta saudável e faça seus exames periódicos.')
}
else if(calculoIMC(altura, peso) > 24 && calculoIMC(altura, peso) <= 29)
{
    console.log('Recomendações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante')
}
else if(calculoIMC(altura, peso) > 29 && calculoIMC(altura, peso) <= 35)
{
    console.log('Recomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de umnutricionista e um médico especialista (endócrino)')
}
else
{
    console.log('Recomendações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).')
}