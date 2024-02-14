const risposteDate = localStorage.getItem('risposte');
const arrayRisposte = risposteDate.split(',');


let documentRisultatoPositivo = document.querySelector('#correct p');
let documentRisultatoNegativo = document.querySelector('#wrong p');
let documentPercentualePositiva = document.querySelector('#correct h3 span');
let documentPercentualeNegativa = document.querySelector('#wrong h3 span')

function stampa() {
    let iPositivo = 0;
    let iNegativo = 0;
    arrayRisposte.forEach(risposta => {

        if (iPositivo == 0) {
            documentRisultatoPositivo.innerText = `${iPositivo} /10 questions`
        }

        if (risposta == 'true') {
            iPositivo++;
            documentRisultatoPositivo.innerText = `${iPositivo} /10 questions`
        } else {
            iNegativo++;
            documentRisultatoNegativo.innerText = `${iNegativo} /10 questions`
        }
    });

    iPositivo = (iPositivo / 10) * 100;
    iNegativo = (iNegativo / 10) * 100;
    documentPercentualePositiva.innerText = `${iPositivo}%`;
    documentPercentualeNegativa.innerText = `${iNegativo}%`;
}
stampa();