


async function fillAlbumPage(id) {
    const fabio = await getFetch('album', id);
    console.log(fabio)
    clearMain();
    const mainAlbum = document.getElementById('mainAlbum');
    mainAlbum.style.display = 'initial';
}


