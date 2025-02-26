// Exercise 2 : Move the box

// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
const container = document.getElementById('container');
const animateBox = document.getElementById('animate');
const startButton = document.querySelector('button');

let interval;
function myMove(){
    const currentLeft = parseInt(window.getComputedStyle(animateBox).left, 10);
    const maxLeft = container.offsetWidth - animateBox.offsetWidth;

    if(currentLeft < maxLeft){
        animateBox.style.left = currentLeft + 1 + 'px';
    } else{
        clearInterval(interval)
    }

}

startButton.addEventListener('click', () => {
    animateBox.style.left = '0px';
    interval = setInterval(myMove, 1);
})