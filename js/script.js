function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
    const img = document.getElementById("image-gallery-1");
    img.src = "./assets/gallery-4.PNG";
    var abc = '#';
    document.getElementById('clear').innerHTML = '<a href="' + abc + '"></a>';
    

}
function addcontent(elementID) {
    document.getElementById("clear").innerHTML = "View More";
    const img = document.getElementById("image-gallery-1");
    img.src = "./assets/gallery-4-text-center.png";
    var abc = '#collapseExample';
    var toggle = "collapse";
    var clear ="clearcontent('clear')";
    document.getElementById('clear').innerHTML = '<a data-toggle="'+toggle+'" + onClick="'+clear+'" +  href="' + abc + '" > VIEW MORE </a>';
    
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