// Daily challenge: Go Wildcats

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
const usernames = [];
const users = gameInfo.forEach(user => usernames.push(`${user.username}!`));
console.log(usernames);

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
const winners = [];
const winnersUsers = gameInfo.forEach(user => user.score > 5 ? winners.push(`${user.username}`) : '');
console.log(winners);


// Find and display the total score of the users.
const totalScore = gameInfo.reduce((acc, user) => acc + user.score, 0);
console.log(`The total score is ${totalScore}`);