let tempcamporeal = false;
let tempBtn1 = false;
let tempBtn2 = false;
let tempBtn3 = false;
let tempBtn4 = false;
let tempBtn5 = false;
let tempBtn6 = false;
let buttonBackState = true;
let buttonConvState = true;

mostraCampoReal();
mostraCampoDolar();
mostraCampoDolarCan();
mostraCampoEuro();
mostraCampoLibra();
mostraCampoPeso();
mostraCampoBit();
changeButton();

let valorDolar = 0;
let valorDolarCan = 0;
let valorEuro = 0;
let valorLibra = 0;
let valorPeso = 0;
let valorBit = 0;


const url = "https://economia.awesomeapi.com.br/json/all";

function carregaMoedas() {
    fetch(url).then(response => {
        return response.json();
    }).then(cotacoes => mostraMoedas(cotacoes));
}

carregaMoedas();

function mostraMoedas(cot) {
    valorDolar = (cot.USD['high']);
    valorDolarCan = (cot.CAD['high']);
    valorEuro = (cot.EUR['high']);
    valorLibra = (cot.GBP['high']);
    valorPeso = (cot.ARS['high']);
    valorBit = (cot.BTC['high']);
}


let bt1 = document.getElementById('btn1');
bt1.addEventListener("click", () => {
    tempBtn1 = !tempBtn1;
    if (tempBtn1 == false) {
        bt1.style.backgroundColor = "orange";
    } else {
        bt1.style.backgroundColor = "green";
    }
    mostraCampoDolar();
});

let bt2 = document.getElementById('btn2');
bt2.addEventListener("click", () => {
    tempBtn2 = !tempBtn2;
    if (tempBtn2 == false) {
        bt2.style.backgroundColor = "orange";
    } else {
        bt2.style.backgroundColor = "green";
    }
    mostraCampoDolarCan();
});

let bt3 = document.getElementById('btn3');
bt3.addEventListener("click", () => {
    tempBtn3 = !tempBtn3;
    if (tempBtn3 == false) {
        bt3.style.backgroundColor = "orange";
    } else {
        bt3.style.backgroundColor = "green";
    }
    mostraCampoEuro();
});

let bt4 = document.getElementById('btn4');
bt4.addEventListener("click", () => {
    tempBtn4 = !tempBtn4;
    if (tempBtn4 == false) {
        bt4.style.backgroundColor = "orange";
    } else {
        bt4.style.backgroundColor = "green";
    }
    mostraCampoLibra();
});

let bt5 = document.getElementById('btn5');
bt5.addEventListener("click", () => {
    tempBtn5 = !tempBtn5;
    if (tempBtn5 == false) {
        bt5.style.backgroundColor = "orange";
    } else {
        bt5.style.backgroundColor = "green";
    }
    mostraCampoPeso();
});

let bt6 = document.getElementById('btn6');
bt6.addEventListener("click", () => {
    tempBtn6 = !tempBtn6;
    if (tempBtn6 == false) {
        bt6.style.backgroundColor = "orange";
    } else {
        bt6.style.backgroundColor = "green";
    }
    mostraCampoBit();
});


let buttonConvert = document.getElementById('button');
let buttonBack = document.getElementById('buttonBack');



buttonConvert.addEventListener('click', () => {

    if (tempBtn1 == false && tempBtn2 == false && tempBtn3 == false && tempBtn4 == false &&
        tempBtn5 == false && tempBtn6 == false) {
        //alert("Selecione as moedas para converter!");
        Swal.fire(
            'MoneyConvert',
            'Selecione as moedas para converter!',
            'error'
        );
    } else {
        buttonConvState = !buttonConvState;
        buttonBackState = !buttonBackState;
        changeButton();
        if (buttonConvState == true) {
            document.getElementById('menu').style.display = 'flex';
            document.getElementById('formMoedas').style.display = 'none';
            document.getElementById('button').style.display = 'block';
        } else {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('formMoedas').style.display = 'block';
            document.getElementById('button').style.display = 'none';
            tempcamporeal = true;
            buttonBackState = !buttonBackState;
            mostraCampoReal();
            mostraCampoDolar();
            mostraCampoDolarCan();
            mostraCampoEuro();
            mostraCampoLibra();
            mostraCampoPeso();
            mostraCampoBit();
        }
    }
});

buttonBack.addEventListener('click', () => {
    buttonConvState = !buttonConvState;
    buttonBackState = !buttonBackState;
    changeButton();
    if (buttonConvState == false) {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('formMoedas').style.display = 'block';
        document.getElementById('button').style.display = 'none';
    } else {
        document.getElementById('menu').style.display = 'flex';
        document.getElementById('formMoedas').style.display = 'none';
        document.getElementById('button').style.display = 'block';
        tempcamporeal = true;
        mostraCampoReal();
        mostraCampoDolar();
        mostraCampoDolarCan();
        mostraCampoEuro();
        mostraCampoLibra();
        mostraCampoPeso();
        mostraCampoBit();
    }
    campoBit.value = "";
    campoDolar.value = "";
    campoDolarCan.value = "";
    campoEuro.value = "";
    campoLibra.value = "";
    campoPeso.value = "";
    campoReal.value = "";
});


function changeButton() {
    if (buttonConvState == true) {
        document.getElementById('buttonBack').style.display = 'none';
        document.getElementById('button').style.display = 'block';
    } else {
        document.getElementById('buttonBack').style.display = 'block';
        document.getElementById('button').style.display = 'none';
    }
}



function mostraCampoReal() {
    if (tempcamporeal == true) {
        document.getElementById('real').style.display = 'block';
    } else {
        document.getElementById('real').style.display = 'none';
    }
}


function mostraCampoDolar() {

    if (tempBtn1 == true && buttonConvState == false) {
        document.getElementById('dolar').style.display = 'block';
    } else {
        document.getElementById('dolar').style.display = 'none';
    }
}

function mostraCampoDolarCan() {

    if (tempBtn2 == true && buttonConvState == false) {
        document.getElementById('dolarCan').style.display = 'block';
    } else {
        document.getElementById('dolarCan').style.display = 'none';
    }
}

function mostraCampoEuro() {
    if (tempBtn3 == true && buttonConvState == false) {
        document.getElementById('euro').style.display = 'block';
    } else {
        document.getElementById('euro').style.display = 'none';
    }
}

function mostraCampoLibra() {
    if (tempBtn4 == true && buttonConvState == false) {
        document.getElementById('libra').style.display = 'block';
    } else {
        document.getElementById('libra').style.display = 'none';
    }
}

function mostraCampoPeso() {
    if (tempBtn5 == true && buttonConvState == false) {
        document.getElementById('peso').style.display = 'block';
    } else {
        document.getElementById('peso').style.display = 'none';
    }
}

function mostraCampoBit() {
    if (tempBtn6 == true && buttonConvState == false) {
        document.getElementById('bit').style.display = 'block';
    } else {
        document.getElementById('bit').style.display = 'none';
    }
}


let campoReal = document.getElementById('realValue');
let campoDolar = document.getElementById('dolarValue');
let campoDolarCan = document.getElementById('dolarCanValue');
let campoEuro = document.getElementById('euroValue');
let campoLibra = document.getElementById('libraValue');
let campoPeso = document.getElementById('pesoValue');
let campoBit = document.getElementById('bitValue');


campoReal.addEventListener("keydown", (evt) => {
    evt.preventDefault();
    console.log(evt.key);



    if (evt.key != "Backspace") {
        let teclaPressionada = evt.key;
        campoReal.value += teclaPressionada;
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(4);
    } else {
        campoReal.value = campoReal.value.substring(0, campoReal.value.length - 1);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(4);

    }
    if (campoReal.value == 0) {
        campoDolar.value = "";
        campoDolarCan.value = "";
        campoEuro.value = "";
        campoLibra.value = "";
        campoPeso.value = "";
        campoBit.value = "";
    }
});

campoDolar.addEventListener("keydown", (evt) => {
    evt.preventDefault();

    if (evt.key != "Backspace") {
        let teclaPressionadaUS = evt.key;
        campoDolar.value += teclaPressionadaUS;
        campoReal.value = (campoDolar.value * valorDolar).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    } else {
        campoDolar.value = campoDolar.value.substring(0, campoDolar.value.length - 1);
        campoReal.value = (campoDolar.value * valorDolar).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    }
    if (campoDolar.value == 0) {
        campoReal.value = "";
        campoDolarCan.value = "";
        campoEuro.value = "";
        campoLibra.value = "";
        campoPeso.value = "";
        campoBit.value = "";
    }
});


campoDolarCan.addEventListener("keydown", (evt) => {
    evt.preventDefault();

    if (evt.key != "Backspace") {
        let teclaPressionadaCAN = evt.key;
        campoDolarCan.value += teclaPressionadaCAN;
        campoReal.value = (campoDolarCan.value * valorDolarCan).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    } else {
        campoDolarCan.value = campoDolarCan.value.substring(0, campoDolarCan.value.length - 1);
        campoReal.value = (campoDolarCan.value * valorDolarCan).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    }
    if (campoDolarCan.value == 0) {
        campoDolar.value = "";
        campoReal.value = "";
        campoEuro.value = "";
        campoLibra.value = "";
        campoPeso.value = "";
        campoBit.value = "";
    }
});

campoEuro.addEventListener("keydown", (evt) => {
    evt.preventDefault();

    if (evt.key != "Backspace") {
        let teclaPressionadaEUR = evt.key;
        campoEuro.value += teclaPressionadaEUR;
        campoReal.value = (campoEuro.value * valorEuro).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    } else {
        campoEuro.value = campoEuro.value.substring(0, campoEuro.value.length - 1);
        campoReal.value = (campoEuro.value * valorEuro).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    }
    if (campoEuro.value == 0) {
        campoDolar.value = "";
        campoDolarCan.value = "";
        campoReal.value = "";
        campoLibra.value = "";
        campoPeso.value = "";
        campoBit.value = "";
    }
});

campoLibra.addEventListener("keydown", (evt) => {
    evt.preventDefault();

    if (evt.key != "Backspace") {
        let teclaPressionadaLIB = evt.key;
        campoLibra.value += teclaPressionadaLIB;
        campoReal.value = (campoLibra.value * valorLibra).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    } else {
        campoLibra.value = campoLibra.value.substring(0, campoLibra.value.length - 1);
        campoReal.value = (campoLibra.value * valorLibra).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    }

    if (campoLibra.value == 0) {
        campoDolar.value = "";
        campoDolarCan.value = "";
        campoEuro.value = "";
        campoReal.value = "";
        campoPeso.value = "";
        campoBit.value = "";
    }
});

campoPeso.addEventListener("keydown", (evt) => {
    evt.preventDefault();

    if (evt.key != "Backspace") {
        let teclaPressionadaPES = evt.key;
        campoPeso.value += teclaPressionadaPES;
        campoReal.value = (campoPeso.value * valorPeso).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    } else {
        campoPeso.value = campoPeso.value.substring(0, campoPeso.value.length - 1);
        campoReal.value = (campoPeso.value * valorPeso).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoBit.value = (campoReal.value / valorBit).toFixed(2);
    }
    if (campoPeso.value == 0) {
        campoDolar.value = "";
        campoDolarCan.value = "";
        campoEuro.value = "";
        campoLibra.value = "";
        campoReal.value = "";
        campoBit.value = "";
    }
});

campoBit.addEventListener("keydown", (evt) => {
    evt.preventDefault();

    if (evt.key != "Backspace") {
        let teclaPressionadaBIT = evt.key;
        campoBit.value += teclaPressionadaBIT;
        campoReal.value = (campoBit.value * valorBit).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
    } else {
        campoBit.value = campoBit.value.substring(0, campoBit.value.length - 1);
        campoReal.value = (campoBit.value * valorBit).toFixed(2);
        campoDolarCan.value = (campoReal.value / valorDolarCan).toFixed(2);
        campoDolar.value = (campoReal.value / valorDolar).toFixed(2);
        campoEuro.value = (campoReal.value / valorEuro).toFixed(2);
        campoLibra.value = (campoReal.value / valorLibra).toFixed(2);
        campoPeso.value = (campoReal.value / valorPeso).toFixed(2);
    }
    if (campoBit.value == 0) {
        campoDolar.value = "";
        campoDolarCan.value = "";
        campoEuro.value = "";
        campoLibra.value = "";
        campoPeso.value = "";
        campoReal.value = "";
    }
});