const player = document.getElementById('player');
const btnPlay = document.getElementById('btnPlay');
const volume = document.getElementById('volume');
const documentCard1 = document.getElementById('containerCard1')
const documentCard2 = document.getElementById('containerCard2')
const documentCard3 = document.getElementById('containerCard3')
const documentCard3_2 = document.getElementById('containerCard3_2')
idBraniPreferiti = [];
let cards3 = [
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
            'X-RapidAPI-Key': 'c776300d22mshd3bea6709348bbfp1dc7c8jsn11b2c60ef719',
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
    const newDiv = document.createElement('div')
    newDiv.classList.add('col-3', 'px-3', 'circular-regular')

    const div = document.createElement('div');
    div.classList.add('d-flex', 'align-items-center', 'bgBanner', 'rounded-2', 'p-0', 'mt-2', 'w-20');
    newDiv.appendChild(div);

    const img = document.createElement('img');
    img.setAttribute('src', albumData.artist.picture_small);
    img.setAttribute('width', '50px');
    img.setAttribute('height', '50px');
    img.classList.add('ms-0', 'rounded-start-2');
    div.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('m-0', 'ms-2');
    p.textContent = albumData.artist.name;
    div.appendChild(p);

    documentCard2.appendChild(newDiv);
}



function createCard3(albumData, isNone) {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('d-flex', 'm-1');
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

    documentCard3.appendChild(outerDiv);
}

function createCard3_2(albumData, isNone) {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('d-flex', 'm-1');
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

    documentCard3_2.appendChild(outerDiv);
}

async function fillMain() {
    for (let i = 0; i < cards3.length; i++) {
        const albumData = await getFetch('album', cards3[i]);
        createCard1(albumData);
    }
    // Creazione delle card di tipo 2
    for (let i = 0; i < 8; i++) {
        const albumData = await getFetch('album', cards3[i]);
        createCard2(albumData);
    }

    // Fetch dei dati degli album e popolamento delle card di tipo 3
    for (let i = 0; i < cards3.length - 7; i++) {
        const albumData = await getFetch('album', cards3[i]);
        createCard3(albumData,i < 5 ? false : true);
    }

    for (let i = 7; i < cards3.length; i++) {
        const albumData = await getFetch('album', cards3[i]);
        createCard3_2(albumData, i < 12 ? false : true);
    }
}


window.addEventListener('load', init);

function init() {
    fillMain();
}


console.log('Geolier:', getFetch('album', '426683117'));
console.log('Gue, Marra:', getFetch('album', '13420001'));
console.log('Co Sang:', getFetch('album', '60357832'));
console.log('Lazza:', getFetch('album', '309377597'));
console.log('Club Dogo:', getFetch('album', '534017402'));
console.log('Lee Scratch Perry:', getFetch('album', '13943974'));
console.log('Sfera Ebbasta:', getFetch('album', '13994766'));
console.log('Luche:', getFetch('album', '100111992'));
console.log('Articolo 31:', getFetch('album', '74308932'));

/* function playPause(){

}

function nextTrack(){

}

function previousTrack(){

}

function volume(){

}

function fillPlayerInfo(){

} */