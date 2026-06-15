// Terreno
// Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com duas casas decimais, conforme exemplo

// Exemplo 1: 
// Digite a largura do terreno: 10.0
// Digite o comprimento do terreno: 30.0
// Digite o valor do metro quadrado: 200.00
// Area do terreno = 300.00 
// Preco do terreno = 60000.00 


largura = Number.parseFloat(prompt("Digite a largura do terreno"));
comprimento = Number.parseFloat(prompt("Digite o comprimento do terreno"));
metro = Number.parseFloat(prompt("Digite o valor do metro quadrado"));

area = largura * comprimento;
preco = area * metro;

alert(`largura do terreno = ${largura}
comprimento do terreno = ${comprimento}
Area do terreno = ${area}
Preco do terreno = ${preco}`)
