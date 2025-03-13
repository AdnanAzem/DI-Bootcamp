

const base_url = 'https://www.swapi.tech/api/people';
const nameElement = document.getElementById('name');
const heightElement = document.getElementById('height');
const genderElement = document.getElementById('gender');
const birthYearElement = document.getElementById('birth-year');
const homeworldElement = document.getElementById('home-world');


const getUser = async (number) => {
    try {
        handleLoading();
        const url = `${base_url}/${number}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        const {name, height, gender, birth_year, homeworld} = data.result.properties;
        const home_world = await fetchHomeWorld(homeworld);
        displayUser(name, height, gender, birth_year, home_world);
    } catch (error) {
        console.error('Error fetching data:', error);
        handleError();
    }
}
 const fetchHomeWorld = async (homeworld) => {
    try {
        const response = await fetch(homeworld);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.result.properties.name;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
 }

const displayUser = (name, height, gender, birth_year, homeworld) => {
    nameElement.innerText = 'Name: ' + name;
    heightElement.innerText = 'Height: ' + height;
    genderElement.innerText = 'Gender: ' + gender;
    birthYearElement.innerText = 'Birth Year: ' + birth_year;
    homeworldElement.innerText = 'Homeworld: ' + homeworld;
}

// display the information of the random person when click on the button
const handleClick = () => {
    // generate random number between 1 and 82
    const random_number = Math.floor(Math.random() * 90) + 1;
    getUser(random_number);
}

//Display when Error
function handleError(){
    nameElement.innerText = `Oh No! That person isn't available.`;
    heightElement.innerText = ''
    genderElement.innerText = ''
    birthYearElement.innerText = ''
    homeworldElement.innerText = ''
}
  
// Display when updating info (pending data)
function handleLoading(){
    nameElement.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    heightElement.innerText = ''
    genderElement.innerText = ''
    birthYearElement.innerText = ''
    homeworldElement.innerText = ''
}

const button = document.getElementById('button');
button.addEventListener('click', handleClick);
