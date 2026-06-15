nome = prompt("Digite seu nome");
vHora = Number.parseFloat(prompt("Digite o valor por hora"));
trabalhadas = Number.parseInt(prompt("Digite quantidade de horas trabalhadas"));

total = vHora * trabalhadas
alert(`O pagamento para ${nome} deve ser ${total} `)