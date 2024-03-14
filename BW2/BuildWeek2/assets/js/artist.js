const documentContainerCardTrack = document.getElementById('containerCardTrack')
function fillArtistPage() {
    clearMain();
    const mainArtist = document.getElementById('mainArtist');
    mainArtist.style.display = 'initial';
}

function createCardTrack(albumData) {

    // Create the li element
    let liElement = document.createElement("li");
    liElement.classList.add("list-style-position-inside", "container-fluid", "mb-3", "cardHover", "rounded", "opacityHover");

    // Create the div element with the row and align-items-center classes
    let divElement = document.createElement("div");
    divElement.classList.add("row", "align-items-center");

    // Create the p element for the number
    let pElementNumber = document.createElement("p");
    pElementNumber.classList.add("col-1", "mb-0", "opacity-50");
    pElementNumber.textContent = "1";
    divElement.appendChild(pElementNumber);

    // Create the img element
    let imgElement = document.createElement("img");
    imgElement.classList.add("img-2", "col-1", "object-fit-cover");
    imgElement.src = "assets/imgs/artisti/Articolo31.jpg";
    imgElement.alt = "";
    divElement.appendChild(imgElement);

    // Create the h5 element for the title
    let h5Element = document.createElement("h5");
    h5Element.classList.add("col-6", "mb-0", "lh-1");
    h5Element.textContent = "Titolo";
    divElement.appendChild(h5Element);

    // Create the p element for the view count
    let pElementViewCount = document.createElement("p");
    pElementViewCount.classList.add("col-2", "mb-0", "opacity-50");
    pElementViewCount.textContent = "45.826.239";
    divElement.appendChild(pElementViewCount);

    // Create the div element for the duration
    let divElementDuration = document.createElement("div");
    divElementDuration.classList.add("col-2", "d-flex", "align-items-center");

    // Create the svg element
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "24");
    svgElement.setAttribute("height", "20");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("stroke-linecap", "round");
    svgElement.setAttribute("stroke-linejoin", "round");
    svgElement.setAttribute("stroke-width", "2");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.classList.add("bg-custom-3", "border-custom", "me-5", "border-custom-2");

    // Create the path element within the svg
    let pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z");
    svgElement.appendChild(pathElement);

    divElementDuration.appendChild(svgElement);

    // Create the p element for the duration time
    let pElementDuration = document.createElement("p");
    pElementDuration.classList.add("mb-0", "opacity-50");
    pElementDuration.textContent = "3:07";
    divElementDuration.appendChild(pElementDuration);

    divElement.appendChild(divElementDuration);

    liElement.appendChild(divElement);

    documentContainerCardTrack.appendChild(liElement);

}