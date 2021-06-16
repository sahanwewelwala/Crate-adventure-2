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
    const img = document.getElementById("model-img");
    img.src = "./assets/mountain-view-1.jpg";
});

document.querySelector('.close').addEventListener('click', 
function (){
    document.querySelector('.bg-modal').style.display =  'none';
    const img = document.getElementById("model-img");
    img.src = "./assets/mountain-view-1.jpg";
});


document.getElementById("button-2").addEventListener('click',
function (){
    document.querySelector('.bg-modal').style.display = 'flex';
    const img = document.getElementById("model-img");
    img.src = "./assets/gallery-3.PNG";
});