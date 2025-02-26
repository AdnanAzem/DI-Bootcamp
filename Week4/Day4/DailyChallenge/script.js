let form = document.querySelector('#libform');
let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let person = document.getElementById('person');
let verb = document.getElementById('verb');
let place = document.getElementById('place');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const noun_game = noun.value;
    const adjective_game = adjective.value;
    const person_game = person.value;
    const verb_game = verb.value;
    const place_game = place.value;
    if (noun_game === '' || adjective_game === '' || person_game === '' || verb_game === '' || place_game === '') {
        alert('You have to enter values in empty fields')
        return
    }
    generated_story(noun_game, adjective_game, person_game, verb_game, place_game);
})


function generated_story(noun_game, adjective_game, person_game, verb_game, place_game){
    const story = document.getElementById('story');
    story.textContent =`The ${adjective_game} ${noun_game} of ${person_game} ${verb_game} in ${place_game}.`;
    let random_number = Math.floor(Math.random() * 6);
}