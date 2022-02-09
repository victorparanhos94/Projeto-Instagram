let time = 3000,
inicial = 0,
images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[inicial].classList.remove("selected")

    inicial++

    if(inicial >= max)
    inicial = 0

    images[inicial].classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)