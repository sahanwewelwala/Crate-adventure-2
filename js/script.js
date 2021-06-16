function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
    const img = document.getElementById("image-gallery-1");
    img.src = "./assets/gallery-4.PNG";
}
function addcontent(elementID) {
    document.getElementById("clear").innerHTML = "VIEW MORE";
    const img = document.getElementById("image-gallery-1");
    img.src = "./assets/gallery-4-text-center.png";
}
document.getElementById("button").addEventListener('click',
function (){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function (){
    document.querySelector('.bg-modal').style.display =  'none';
});

