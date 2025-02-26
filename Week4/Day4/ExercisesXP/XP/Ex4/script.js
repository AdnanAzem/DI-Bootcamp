// Exercice 4 : Volume of a sphere

// Write a JavaScript program to calculate the volume of a sphere. 
let form = document.querySelector('form');
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

form.addEventListener('submit', function(e){
    e.preventDefault();
    // let rad = parseFloat(e.target.elements['radius'].value);
    let rad = parseFloat(radius.value);
    if( isNaN(rad) || rad <= 0){
        alert('Please populate the radius field with a positive number');
        return;
    }
    console.log('Radius:', radius.value);

    Volume(rad);
});

function Volume(radius){
    let vol = (4/3) * Math.PI * Math.pow(radius, 3);
    volume.value = vol.toFixed(2);
}
