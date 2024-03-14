const player = document.getElementById('player');
const btnPlay = document.getElementById('btnPlay');
const volume = document.getElementById('volume');
const search = document.getElementById('search');
const documentCard1 = document.getElementById('containerCard1')
const documentCard2 = document.getElementById('containerCard2')
const documentCard3Box = document.getElementById('containerCard3')
const documentCard3_2Box = document.getElementById('containerCard3_2')
const documentCard4 = document.getElementById('containerCard4')
const documentPlayerBtns = document.getElementsByClassName('bi-play-circle-fill');
const documentPlayerImg = document.getElementById('playerImg');
const documentPlayerArtist = document.getElementById('playerArtist');
const documentPlayerTitle = document.getElementById('playerTitle');
let albumData;


idBraniPreferiti = [];
let colors = ['#DC148C', '#8400E7', '#27856A', '#0D73EC', '#777777', '#E13300'];
let algorithmUserFeed = [
    '426683117',
    '13420001',
    '60357832',
    '13943974',
    '13994766',
    '100111992',
    '74308932',
    '309377597',
    '557619402',
    '517196372',
    '61419582',
    '446034935',
    '171945282',
    '124513502',
]

const getFetch = async (category, id) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/${category}/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '835a0e9802msh157b5b5d7ff5689p1402cfjsna720f5edd6fa',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        return result = await response.json();
    } catch (error) {
        console.error(error);
    }
};


function createCard1(albumData) {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('d-flex', 'cardHover', 'p-2', 'rounded');


    const imageDiv = document.createElement('div');
    imageDiv.classList.add('me-3');

    const img = document.createElement('img');
    img.classList.add('rounded-5');
    img.setAttribute('src', albumData.artist.picture_small);
    img.setAttribute('alt', 'Artista');
    imageDiv.appendChild(img);

    const textDiv = document.createElement('div');

    const namePara = document.createElement('p');
    namePara.classList.add('m-0', 'text-white');
    namePara.textContent = albumData.artist.name;
    textDiv.appendChild(namePara);

    const typePara = document.createElement('p');
    typePara.classList.add('m-0', 'text-white-50');
    typePara.textContent = 'Artista';
    textDiv.appendChild(typePara);

    outerDiv.appendChild(imageDiv);
    outerDiv.appendChild(textDiv);

    documentCard1.appendChild(outerDiv);
}


function createCard2(albumData) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('col-3', 'px-3', 'circular-regular');

    const div = document.createElement('div');
    div.classList.add('card2', 'd-flex', 'align-items-center', 'bgBanner', 'rounded-2', 'p-0', 'mt-2', 'w-20');
    newDiv.appendChild(div);

    const img = document.createElement('img');
    img.setAttribute('src', albumData.artist.picture_small);
    img.setAttribute('width', '80px');
    img.setAttribute('height', '80px');
    img.classList.add('ms-0', 'rounded-start-2');
    div.appendChild(img);

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'w-100');
    div.appendChild(innerDiv);

    const p = document.createElement('p');
    p.classList.add('m-0', 'ms-2');
    p.textContent = albumData.artist.name;
    innerDiv.appendChild(p);

    const playIcon = document.createElement('i');
    playIcon.classList.add('bi', 'bi-play-circle-fill', 'icon-size-bigger', 'mx-3', 'playerCard2', 'custom-4');
    playIcon.setAttribute('onclick', `togglePlayer('${albumData.tracks.data[0].preview}', this, '${albumData.tracks.data[0].title}','${albumData.artist.name}', '${albumData.cover}' )`);
    innerDiv.appendChild(playIcon);


    documentCard2.appendChild(newDiv);
}

function createCard3(albumData, isNone, targetElement) {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('card3', 'd-flex', 'm-1');
    if (isNone) {
        outerDiv.classList.add('d-xxl-none', 'card-3XL');
    }

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('card', 'p-2', 'cardHover');
    innerDiv.style.width = '191px';
    innerDiv.style.height = '260px';

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('text-center');

    const img = document.createElement('img');
    img.setAttribute('src', albumData.cover_medium);
    img.setAttribute('alt', '...');
    img.classList.add('object-fit-cover');
    img.style.width = '161px';
    img.style.height = '161px';
    imageDiv.appendChild(img);

    const playIcon = document.createElement('i');
    playIcon.classList.add('bi', 'bi-play-circle-fill', 'icon-size-bigger', 'mx-3', 'playerCard3');
    playIcon.setAttribute('onclick', `togglePlayer('${albumData.tracks.data[0].preview}', this, '${albumData.tracks.data[0].title}','${albumData.artist.name}', '${albumData.cover}' )`);
    playIcon.style.position = 'absolute';
    playIcon.style.transform = 'translate(-94px, 71px)';
    playIcon.style.fontSize = '3.5rem';
    imageDiv.appendChild(playIcon);

    const textDiv = document.createElement('div');
    textDiv.classList.add('mt-2', 'ms-1');

    const title = document.createElement('h5');
    title.classList.add('card-title', 'text-white', 'fs-6');
    title.textContent = albumData.title;
    textDiv.appendChild(title);

    const artist = document.createElement('p');
    artist.classList.add('card-text', 'text-white-50', 'text-size-2');
    artist.textContent = albumData.artist.name;
    textDiv.appendChild(artist);

    innerDiv.appendChild(imageDiv);
    innerDiv.appendChild(textDiv);

    outerDiv.appendChild(innerDiv);

    targetElement.appendChild(outerDiv);
}



function createCard4(albumData, index) {
    // Creazione dell'elemento div con le classi specificate
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('rounded-3', 'cardGener', 'mb-3');
    // Assegna un colore di sfondo dalla lista di colori in base all'indice della card
    cardDiv.style.backgroundColor = colors[index % colors.length];


    // Creazione dell'elemento h4 con la classe specificata e il testo "Musica"
    const h4Element = document.createElement('h4');
    h4Element.classList.add('mt-2', 'ms-1', 'text-white', 'circular-regular');
    h4Element.textContent = albumData.artist.name;

    // Creazione dell'elemento img con la classe specificata, l'attributo src e l'attributo alt
    const imgElement = document.createElement('img');
    imgElement.classList.add('shadow');
    imgElement.setAttribute('src', albumData.artist.picture);
    imgElement.setAttribute('alt', '');

    // Aggiunta degli elementi figlio al div principale
    cardDiv.appendChild(h4Element);
    cardDiv.appendChild(imgElement);

    // Aggiunta del div principale al genitore specificato
    documentCard4.appendChild(cardDiv);
}


/* async function fillMain(albums) {
    // CARD
    for (let i = 0; i < 4; i++) {
        const albumData = await getFetch('album', albums[i]);
        createCard1(albumData);
    }

    // CARD 2 
    for (let i = 0; i < 8; i++) {
        const albumData = await getFetch('album', albums[i]);
        createCard2(albumData);
    }

    // CARD 3 
    for (let i = 0; i < 7; i++) {
        const albumData = await getFetch('album', albums[i]);
        createCard3(albumData, false, documentCard3Box);
        if (i > 6) {
            createCard3(albumData, true, documentCard3Box);
        }
    }

    for (let i = 7; i < 12; i++) {
        const albumData = await getFetch('album', albums[i]);
        createCard3(albumData, false, documentCard3_2Box);
        if (i > 11) {
            createCard3(albumData, true, documentCard3_2Box);
        }
    }
} */

async function fillMain() {
    for (let i = 0; i < algorithmUserFeed.length; i++) {
        albumData = await getFetch('album', algorithmUserFeed[i]);
        createCard1(albumData);
    }
    // Creazione delle card di tipo 2
    for (let i = 0; i < 8; i++) {
        albumData = await getFetch('album', algorithmUserFeed[i]);
        createCard2(albumData);
    }

    // Fetch dei dati degli album e popolamento delle card di tipo 3
    for (let i = 0; i < algorithmUserFeed.length - 7; i++) {
        albumData = await getFetch('album', algorithmUserFeed[i]);
        createCard3(albumData, i < 5 ? false : true, documentCard3Box);
    }

    for (let i = 7; i < algorithmUserFeed.length; i++) {
        albumData = await getFetch('album', algorithmUserFeed[i]);
        createCard3(albumData, i < 12 ? false : true, documentCard3_2Box);
    }
}






window.addEventListener('load', init);

async function init() {
    await fillMain(algorithmUserFeed);
}


search.addEventListener('click', async (e) => {
    e.preventDefault();
    const main2 = document.getElementById('main2')
    const search2 = document.getElementById('search2')
    const mainNoFooter = document.querySelectorAll('#main > :not(#footer)');
    mainNoFooter.forEach(element => {
        element.style.display = 'none';
    });

    for (let i = 0; i < algorithmUserFeed.length; i++) {
        const albumData = await getFetch('album', algorithmUserFeed[i]);
        createCard4(albumData, i);
    }
    main2.style.display = 'inline';
    search2.style.display = 'inline';
})

console.log('Geolier:', getFetch('album', '426683117'));
console.log('Gue, Marra:', getFetch('album', '13420001'));
console.log('Co Sang:', getFetch('album', '60357832'));
console.log('Lazza:', getFetch('album', '309377597'));
console.log('Club Dogo:', getFetch('album', '534017402'));
console.log('Lee Scratch Perry:', getFetch('album', '13943974'));
console.log('Sfera Ebbasta:', getFetch('album', '13994766'));
console.log('Luche:', getFetch('album', '100111992'));
console.log('Articolo 31:', getFetch('album', '74308932'));

function playPause() {
    if (player.paused) { //check audio is playing
        player.play();

    } else {
        player.pause();


    }
}

player.addEventListener('play', function () {
    btnPlay.classList.remove('bi-play-circle-fill');
    btnPlay.classList.add('bi-pause-circle-fill');
});

player.addEventListener('pause', function () {
    btnPlay.classList.add('bi-play-circle-fill');
    btnPlay.classList.remove('bi-pause-circle-fill');
});


function togglePlayer(albumPreview, i, albumTitle, albumArtist, albumImg) {
    const player = document.getElementById('player');
    documentPlayerImg.setAttribute('src', albumImg);
    documentPlayerTitle.innerText = albumTitle;
    documentPlayerArtist.innerText = albumArtist;
    if (player.src !== albumPreview) {
        player.src = albumPreview;
        player.load();
        player.play();
        i.classList.remove('bi-play-circle-fill');
        i.classList.add('bi-pause-circle-fill');

    } else {
        if (player.paused) {
            player.play();
            player.addEventListener('play', function () {
                i.classList.remove('bi-play-circle-fill');
                i.classList.add('bi-pause-circle-fill');
            });
        } else {
            player.pause();
            player.addEventListener('pause', function () {
                i.classList.add('bi-play-circle-fill');
                i.classList.remove('bi-pause-circle-fill');
            });
        }
    }
}






function secondsToTime(duration) {
    const minuti = parseInt(duration / 60);
    let secondi = parseInt(duration % 60); // Utilizziamo parseInt per assicurarci che i secondi siano un numero intero

    if (secondi < 10) {
        secondi = "0" + secondi;
    }
    return minuti + ":" + secondi;
}


player.addEventListener("timeupdate", (event) => {

    const curTime = document.getElementById('currentTime');
    const remainingTime = document.getElementById('remainingTime');

    const currentTime = event.currentTarget.currentTime;
    const duration = event.currentTarget.duration;
    if (!isNaN(duration)) {
        let remTime = duration - currentTime;

        curTime.innerText = secondsToTime(currentTime);
        if (remTime < 0) {
            remTime = 0; // Impostiamo il tempo rimanente a zero se è negativo
        }
        remainingTime.innerText = secondsToTime(remTime);
    }

    // Regoliamo il volume
    const inputRange = document.getElementById('inputRange').value;
    if (inputRange > 1) {
        event.currentTarget.volume = inputRange / 100;
    }
    
    // Visualizziamo la barra della durata
    const barraDurata = document.querySelector('.elapsed');
    const perc = currentTime / duration * 100;
    barraDurata.style.width = perc + "%";
});


const barraGrigia = document.querySelector(".time");
barraGrigia.addEventListener("click", function (e) {
    const offset = e.offsetX;
    const perc = (offset / barraGrigia.offsetWidth) * 100;
    const barraVerde = document.querySelector(".elapsed");
    barraVerde.style.width = perc + "%";

    const durata = player.duration;
    const nuovaDurata = (durata * perc) / 100;
    player.currentTime = nuovaDurata;
});



/* function nextTrack(){

}

function previousTrack(){

}

function volume(){

}

function fillPlayerInfo(){

}  */