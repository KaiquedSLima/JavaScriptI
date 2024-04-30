//constantes
const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000

//input(entrada)
anoNascimento = parseInt(prompt("Qual seu ano de nascimento?"))

alert("Ano que você nasceu: " + anoNascimento)

nome = prompt("Qual seu nome?")

salarioBase = parseFloat(prompt("Qual seu salário base?"))
gratificacao = parseFloat(prompt("Qual sua gratificação?"))
bonus = parseFloat(prompt("Qual seu bônus?"))
desconto = parseFloat(prompt("Qual seu desconto?"))

salarioLiquido = 0  
adicional = 0
                  
//processamento 
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento

(proxima aula
//IF:
//até 20 anos (inclusive): 1000 SALARIO_ATE_20
//acima de 20 anos: 2000 SALARIO_ACIMA_20
adicional = SALARIO_ATE_20) 

salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional
                
//output(saída) 
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$ " + salarioLiquido
alert(mensagem) 

