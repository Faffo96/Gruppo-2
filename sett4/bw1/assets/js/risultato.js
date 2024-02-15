const risposteDate = localStorage.getItem('risposte');
const arrayRisposte = risposteDate.split(',');
let ctxGrafico;

let documentRisultatoPositivo = document.querySelector('#correct p');
let documentRisultatoNegativo = document.querySelector('#wrong p');
let documentPercentualePositiva = document.querySelector('#correct h3 span');
let documentPercentualeNegativa = document.querySelector('#wrong h3 span');
let documentGrafico = document.getElementById('graficoCanvas');
let documentScrittaGrafico_h4 = document.querySelector('#scritteGrafico h4')
let documentScrittaGrafico_span = document.querySelector('#scritteGrafico_span')
let documentScrittaGrafico_p = document.querySelector('#scritteGrafico p')

Chart.defaults.global.tooltips.enabled = false;


let myData = [];
let chart = new Chart(documentGrafico, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: myData,
            backgroundColor: ['#d20094', '#00FFFF'],
            borderWidth: 0,
        }]
    },
    options: {
        maintainAspectRatio: false,
        hover: { mode: null },
        animation: { duration: 0, },
        cutoutPercentage: 75,
    }
});

function stampa() {
    let iPositivo = 0;
    let iNegativo = 0;
    arrayRisposte.forEach(risposta => {

        if (iPositivo == 0) {
            documentRisultatoPositivo.innerText = `0/10 questions`
        }

        if (risposta == 'true') {
            iPositivo++;
        } else {
            iNegativo++;
        }
    });
    documentRisultatoPositivo.innerText = `${iPositivo}/${arrayRisposte.length} questions`
    documentRisultatoNegativo.innerText = `${iNegativo}/${arrayRisposte.length} questions`

    iPositivo = (iPositivo / arrayRisposte.length) * 100;
    iNegativo = (iNegativo / arrayRisposte.length) * 100;
    documentPercentualePositiva.innerText = `${iPositivo}%`;
    documentPercentualeNegativa.innerText = `${iNegativo}%`;
    myData = [iNegativo / 100, iPositivo / 100];
    chart.data.datasets[0].data = myData;
    chart.update();


    if(iPositivo >= 60){
        documentScrittaGrafico_h4.innerText = 'Congratulations!'
        documentScrittaGrafico_span.innerText = 'You passed the exam'
        documentScrittaGrafico_p.innerText = `We'll send you the certificare in few minutes. Check your email (including promotions / spam folder)`
    }else {
        documentScrittaGrafico_h4.innerText = 'Oh sorry!'
        documentScrittaGrafico_span.innerText = 'You failed the exam'
        documentScrittaGrafico_p.innerText = `The teacher will get in touch with you to understand your mistakes, you will definitely improve in the future.`
    }
}

function init() {
    ctxGrafico = documentGrafico.getContext('2d');
    stampa();
}

addEventListener('load', init);
