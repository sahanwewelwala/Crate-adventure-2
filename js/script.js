function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 ) {
        if (element.innerHTML === 'VIEW MORE') element.innerHTML = 'Close';
        else {
            element.innerHTML = 'VIEW MORE';
        }
    }
}
document.getElementById("button").addEventListener('click',
function (){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function (){
    document.querySelector('.bg-modal').style.display =  'none';
});

 
