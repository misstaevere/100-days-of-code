// Complete the below questions using this array:
const array = [
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

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let addExclamationMark = []
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  addExclamationMark.push(username);
})
console.log(addExclamationMark);
//Create an array using map that has all the usernames with a "? to each of the usernames
const addQuestionMark = array.map(user => {
  let { username } = user;
  return username + "?";
})
console.log(addQuestionMark);

//Filter the array to only include users who are on team: red
const findRedTeamUsers = array.filter(user => {
  return user.team === "red";
})
console.log(findRedTeamUsers);
//Find out the total score of all users using reduce
const totalScore = array.reduce((accumulator, user) => {
  return accumulator + user.score;
}, 0);
console.log(totalScore);
// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const myArray = [
  {
    username: "Malle",
    items: ["lipstick", "hat", "flowers"]
  },
  {
    username: "Kalle",
    items: ["bag", "glasses", "ring"]
  },
  {
    username: "Jaan",
    items: ["necklace", "socks", "pan"]
  },
  {
    username: "Kalev",
    items: ["lamp", "remote"]
  },
];

let addExclamationMarkToItems = myArray.map(user => {
  user.items = user.items.map(item => {
    return item + "!"
  });
  return user;
})
console.log(addExclamationMarkToItems);
