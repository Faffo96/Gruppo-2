const btn = document.getElementById('btnPro');
const checkbox = document.getElementById('checkbox');


const cambioPagina = () => {
    if (checkbox.checked) {
        window.location.href = 'domande.html'
    } else {
        setTimeout(function () {
            document.getElementById('required').innerText = 'You must accept the conditions to proceed with the quiz.'
        }, 500)
    }
};

btn.addEventListener('click', function (e) {
    e.preventDefault;
    cambioPagina();
});
