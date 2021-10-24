function openImage(event) {
    console.log(event);

    const gallery = document.getElementsByClassName("gallery")[0];
    gallery.innerHTML = "";
    const target = event.target;
    const seed = target.dataset.seed;
    if (!seed) {
        return;
    }
    const image = document.createElement("img");
    image.id = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/800`;
    image.alt = `Изображение ${seed}`
    gallery.appendChild(image);
}

function init() {
    const images = document.querySelectorAll(".thumbnails > img");
    for (let image of images) {
        image.addEventListener('click', openImage);
    }
}

window.addEventListener('load', init);