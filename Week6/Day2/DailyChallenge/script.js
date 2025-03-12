// Select DOM elements
const gifForm = document.getElementById('gif-form');
const categoryInput = document.getElementById('category');
const gifContainer = document.getElementById('gif-container');
const deleteAllButton = document.getElementById('delete-all-btn');

// Giphy API configuration
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const BASE_URL = 'https://api.giphy.com/v1/gifs/random';

// Function to fetch a random GIF based on a category
async function fetchRandomGif(category) {
    try{
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&tag=${encodeURIComponent(category)}`);
        if(!response.ok){
            throw new Error('Failed to fetch GIF');
        }
        const data = await response.json();
        return data.data.images.original.url;
    } catch (error){
        console.log('Error fetching GIF:' ,error);
        alert('Failed to fetch GIF. Please try again.');
    }
}


// Function to append a GIF to the page
function appendGif(gifUrl){
    // Create a container for the GIF and delete button
    const gifItem = document.createElement('div');
    gifItem.classList.add('gif-item');

    // Create an image element for the GIF
    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = 'Random GIF';

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        gifContainer.removeChild(gifItem);
    });

    // Append the image and delete button to the container
    gifItem.appendChild(img);
    gifItem.appendChild(deleteButton);

    // Append the container to the main GIF container
    gifContainer.appendChild(gifItem);
}

// Event listener for the form submission
gifForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const category = categoryInput.value.trim();
    if(!category){
        alert('Please enter a valid category.');
        return;
    }

    const gifUrl = await fetchRandomGif(category);
    if(gifUrl){
        appendGif(gifUrl);
        categoryInput.value = ''
    }
});

// Event listener for the "Delete All" button
deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});
