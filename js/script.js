function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 ) {
        if (element.innerHTML === 'VIEW MORE') element.innerHTML = 'Close';
        else {
            element.innerHTML = 'VIEW MORE';
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let lightbox = new Dbox();
    lightbox.run();
});

