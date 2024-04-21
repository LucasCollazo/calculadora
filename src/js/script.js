document.querySelector('.limpa').addEventListener('click', function () {
    document.getElementById('display').value = '';
});

const backspace = document.getElementById('display');

document.querySelector('.apaga').addEventListener('click', function () {
    backspace.value = backspace.value.slice(0, -1);
});

const botoes = document.querySelectorAll('.btn:not(.limpa):not(.igual):not(.operadores):not(.apaga)');

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        const valor = this.textContent;
        document.getElementById('display').value += valor;
    });
});

const operadores = document.querySelectorAll('.operadores');

operadores.forEach(operador => {
    operador.addEventListener('click', function () {
        const valorDisplay = document.getElementById('display').value;
        const valorOperador = this.textContent;

        if (valorDisplay.length > 0 && !valorDisplay.includes('+') && !valorDisplay.includes('-') && !valorDisplay.includes('*') && !valorDisplay.includes('/')) {
            document.getElementById('display').value += valorOperador;
        }
    });
});

document.querySelector('.igual').addEventListener('click', function () {
    const exp = document.getElementById('display').value;

    let op = exp.indexOf('+');
    if (op === -1) { op = exp.indexOf('-'); }
    if (op === -1) { op = exp.indexOf('*'); }
    if (op === -1) { op = exp.indexOf('/'); }

    if (exp === '' || op === -1) {

        return;

    } else {

        const operador = exp[op];
        const num1 = parseFloat(exp.substring(0, op));
        const num2 = parseFloat(exp.substring(op + 1));

        if (isNaN(num1) || isNaN(num2)) { return; }

        let resultado;
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = '';
                }
            default: '';
        }
        document.getElementById('display').value = resultado;
    }
});