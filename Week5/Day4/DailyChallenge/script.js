// Daily challenge : HTML Form

// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
const form = document.querySelector('form');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    const data = {name, lastName};
    const json = JSON.stringify(data);

    const p = document.createElement('p');
    p.textContent = json;
    document.body.appendChild(p);
});