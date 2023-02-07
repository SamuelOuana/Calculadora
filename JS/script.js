var estado;
var op1;
var op2;
var resultado;
var operacao;


let calculadora = {
    numeroArray: new Array(),

    inicializacao: function () {
        estado = 'inicializacao';
        this.tela();
    },

    adicao: function () {
        operacao = 'adicao';
        estado = 'operando2';
        this.numeroArray = []; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },

    subtracao: function () {
        operacao = 'subtracao';
        estado = 'operando2';
        this.numeroArray = []; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },

    divisao: function () {
        operacao = 'divisao';
        estado = 'operando2';
        this.numeroArray = []; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },

    multiplicacao: function () {
        operacao = 'multiplicacao';
        estado = 'operando2';
        this.numeroArray = []; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },

    limpar: function () {
        calculadora.inicializacao();
        this.numeroArray = [];
    },

    apagar: function () {
        this.numeroArray.pop();
        this.proximoNumero();
        this.tela();
    },

    igual: function () {
        switch (operacao) {

            case 'adicao':
                resultado = op1 + op2;
                estado = 'resultado';
                this.tela();
                break;

            case 'subtracao':
                resultado = op1 - op2;
                estado = 'resultado';
                this.tela();
                break;

            case 'divisao':
                resultado = op1 / op2;
                estado = 'resultado'
                this.tela();
                break;

            case 'multiplicacao':
                resultado = op1 * op2;
                estado = 'resultado'
                this.tela();
                break;

        }

    },
    tela: function () {
        switch (estado) {

            case 'inicializacao':
                document.getElementById("tela").innerText = ' ';
                estado = 'operando1';
                break;

            case 'operando1':
                document.getElementById("tela").innerText = op1;
                break;

            case 'operando2':
                document.getElementById("tela").innerText = op2;
                break;

            case 'resultado':
                document.getElementById("tela").innerText = resultado;
                estado = 'operando1';
                break;
        }

    },


    proximoNumero: function (digito) {
        switch (estado) {
            case 'operando1':
                this.numeroArray.push(digito);
                op1 = parseFloat(this.numeroArray.join(''));
                this.tela();
                break
            case 'operando2':
                this.numeroArray.push(digito);
                op2 = parseFloat(this.numeroArray.join(''));
                this.tela();
                break
        }


    },

}