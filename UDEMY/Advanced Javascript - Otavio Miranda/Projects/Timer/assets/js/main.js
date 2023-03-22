// Esse projeto cria um timer com botões (Iniciar - Pausar - Zerar)

// Salvando o que acontece nos botões:
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const form = document.querySelector('#formulario');

let timer, timerSeconds, dias = 0, horas, minutos, segundos;

iniciar.addEventListener('click', function (event) {
    //alert('Iniciar contador');
    iniciar.classList.add('select');
    pausar.classList.remove('select');
    zerar.classList.remove('select');
    relogio.classList.remove('pausado');
    // Precisa-se iniciar um contador setInterval aqui

    if (criaRelogio(timerSeconds) === 'Invalid Date') { alert('Tempo Inválido'); }
    else { iniciarContador(); }
});

pausar.addEventListener('click', function (event) {
    iniciar.classList.remove('select');
    pausar.classList.add('select');
    zerar.classList.remove('select');
    relogio.classList.add('pausado');
    //alert('Pausar contador');
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    //alert('Zerar contador');
    iniciar.classList.remove('select');
    pausar.classList.remove('select');
    zerar.classList.add('select');
    relogio.classList.remove('pausado');
    clearInterval(timer);
    zerarVariaveis();
    relogio.innerHTML = criaRelogio(0);
});

// Event listener do input:
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputTime = String(e.target.querySelector('#input_time').value);
    horas = Number(inputTime[0] + inputTime[1]);
    if (horas > 23) { dias = Math.floor(horas / 24); }
    minutos = Number(inputTime[3] + inputTime[4]);
    segundos = Number(inputTime[6] + inputTime[7]);
    timerSeconds = horas * 3600 + minutos * 60 + segundos;
});

function iniciarContador() {
    function contador() {
        timerSeconds--;
        if (criaRelogio(timerSeconds) === '00:00:00' && dias > 0) { dias--; };
        relogio.innerHTML = dias + 'D ' + criaRelogio(timerSeconds);
        endContador();
        console.log(criaRelogio(timerSeconds));
        return relogio.innerHTML;
    }
    timer = setInterval(function () { contador() }, 1000);
}

function endContador() {
    if (timerSeconds < 0) {
        iniciar.classList.remove('select');
        pausar.classList.remove('select');
        zerar.classList.remove('select');
        relogio.classList.add('pausado');
        clearInterval(timer);
        zerarVariaveis();
        alert('Esgotado');
    }
}

function zerarVariaveis() {
    dias = 0;
    horas = 0;
    minutos = 0;
    segundos = 0;
    timerSeconds = 0;
    relogio.innerHTML = '0D ' + criaRelogio(0);
}

// Função Date para criar formatação do relógio 
function criaRelogio(timerSeconds) {
    let data = new Date(timerSeconds * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


