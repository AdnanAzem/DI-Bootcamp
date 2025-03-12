// Exercises XP 

// 🌟 Exercise 1 : Giphy API

// Giphy API URL
const giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Function to fetch data from the Giphy API
async function fetchGiphyData() {
  try {
    const response = await fetch(giphyUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchGiphyData();


// 🌟 Exercise 2 : Giphy API

// Giphy API Base URL and API Key
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const baseUrl = 'https://api.giphy.com/v1/gifs/search';

// Function to fetch 10 GIFs about the "sun" with a starting position of 2
async function fetchSunGifs() {
  try {
    const url = `${baseUrl}?q=sun&limit=10&offset=2&rating=g&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchSunGifs();


// 🌟 Exercise 3 : Async function
// Async function to fetch data from the Star Wars API
async function fetchStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
  
fetchStarshipData();

// 🌟 Exercise 4: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Outcome: 
    // calling
    // resolved