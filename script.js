
let numberOne = Number(prompt("Digite o primeiro numero: "));
let numberTwo = Number(prompt("Digite o segundo numero: "));

let results = [],
    questions = [
        'A soma dos dois números é:',
        'A subtração dos dois números é:',
        'A multiplicação dos dois números:',
        'A divisão dos dois números:',
        'O resto da divisão dos dois números:',
        `A soma dos dois números é`,
        'Os numeros são'
    ];
;

function calculate(numberOne, numberTwo){
    results.push(numberOne + numberTwo);
    results.push(numberOne - numberTwo);
    results.push(numberOne * numberTwo);
    results.push(numberOne / numberTwo);
    results.push(numberOne % numberTwo);
    results.push((numberOne + numberTwo) % 2 == 0 ? `par: ${results[0]}` : `ímpar: ${results[0]}`);
    results.push(numberOne == numberTwo ? 'iguais' : 'diferentes');
}

calculate(numberOne, numberTwo);

for(i = 0; i < questions.length; i++){
    alert(questions[i] + ' ' + results[i])
}