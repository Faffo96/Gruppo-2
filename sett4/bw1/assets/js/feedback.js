const stelle = document.querySelectorAll('#stelle img');
const stelleArray = Array.from(stelle);
const documentFeedbackUtente = document.getElementById('commentoUtente');
const documentBtnFeedback = document.getElementById('btnFeedback');

let stelleAttive = 0;

const gestisciHover = (indice) => {
    for (let j = 0; j <= indice; j++) {
        stelleArray[j].setAttribute('src', 'assets/img/star.svg');
    }
};

const gestisciUscita = (indice) => {
    if (stelleAttive <= indice) {
        for (let j = 0; j <= indice; j++) {
            stelleArray[j].setAttribute('src', 'assets/img/star2.svg');
        }
    }
};

/* const verificaForm = () => {
    var valoreInput = document.getElementById("documentFeedbackUtente").value;

    if (stelleAttive > 0 && valoreInput.trim() !== '') {
        documentBtnFeedback.disabled = true;
        window.location.href = 'index.html';
    } else {
        documentBtnFeedback.disabled = false;
    }
} */

const gestisciClick = (indice) => {
    stelleArray.forEach(element => {
        element.setAttribute('src', 'assets/img/star2.svg');
    });

    stelleAttive = indice + 1;
    for (let j = 0; j <= indice; j++) {
        stelleArray[j].setAttribute('src', 'assets/img/star.svg');
    }

    verificaForm();
};

stelleArray.forEach((stella, i) => {
    stella.addEventListener("mouseover", () => gestisciHover(i));
    stella.addEventListener("mouseout", () => gestisciUscita(i));
    stella.addEventListener("click", () => gestisciClick(i));

});

documentFeedbackUtente.addEventListener("input", function() {
    verificaForm();
});





/* const accendiStelle = (index) => {
    console.log(index)
} */



/* console.log(stelleArray)
stella.setAttribute('src', 'assets/img/star2.svg');

stella.addEventListener("mouseover", function () {
    stella.setAttribute('src', 'assets/img/star.svg')
})

stella.addEventListener("mouseout", function () {
    stella.setAttribute('src', 'assets/img/star2.svg')
})
 */



/* elencoTask.forEach((element, index) => {
    //task eseguito: font barrato
    if (elencoTaskEseguiti[index]) {
        lista.innerHTML += <div>
            <li class="testo-barrato" onclick="barraTask(${index});" >${element}</li>
            <p><i onclick="eliminaTask(${index});" class="fa-solid fa-trash-can"></i></p>
        </div>;
    } else {
        lista.innerHTML += <div>
            <li class="testo-normale" onclick="barraTask(${index});" >${element}</li>
            <p><i onclick="eliminaTask(${index});" class="fa-solid fa-trash-can"></i></p>
        </div>;
    }
}); */