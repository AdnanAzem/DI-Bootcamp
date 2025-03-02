
const colors = ['red', 'orangered', 'orange',
    'yellow', 'yellowgreen', 'lightgreen',
    'green', 'turquoise', 'cyan',
    'lightskyblue', 'dodgerblue', 'blue',
    'darkblue', 'indigo', 'darkmagenta',
    'violet', 'lightpink', 'lightgray',
    'gray', 'black', 'white'
];

let currentColor;
let isMousePressed = false;

const main = document.getElementById('main');
const sidebar = document.getElementById('sidebar');
const button = document.getElementById("clear");



function createColors(){
    
    for (let i = 0; i < colors.length; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = colors[i];
        div.dataset.color = colors[i];
        div.addEventListener('click', setCurrentColor);
        sidebar.appendChild(div);

      }
}

function setCurrentColor(e){
    const chosenColor = e.target.dataset.color;
    console.log(chosenColor);
    currentColor = chosenColor;
    
    button.style.backgroundColor = chosenColor;
}

function createCanvas(){
    for (var i = 0; i < 2500; i++) {
        let div = document.createElement('div');
        main.appendChild(div);
    }
}

function listenToMain(){
    main.addEventListener('mousedown', handleClick);
    main.addEventListener('mousemove', handleMove);
    document.body.addEventListener('mouseup', handleMouseRelease);
}

function handleClick(){
    if(currentColor == null) return;
    isMousePressed = true;
}

function handleMove(e){
    if(!isMousePressed) return;
    const hoveredDiv = document.elementFromPoint(e.x, e.y);
    hoveredDiv.style.backgroundColor = currentColor;
}

function handleMouseRelease(){
    isMousePressed = false;
}

function listenToClearButton(){
    button?.addEventListener('click', clearCanvas);

}

function clearCanvas(){
    currentColor = null;
    const squares = document.querySelectorAll("#main > div");
    for (const square of squares){
        square.style.backgroundColor = "white";
    }
    button.style.backgroundColor = "white";
}

createColors();
createCanvas();
listenToMain();
listenToClearButton();