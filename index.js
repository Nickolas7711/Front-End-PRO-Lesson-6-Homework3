sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summerSports = sports.slice(5);
winterSports = sports.slice(0, 5);
fruits = winterSports.splice(2, 1).concat(summerSports.splice(2, 2));

console.log('*** Winter sports ***');

for (i = 0; i < winterSports.length; i++) {
    console.log(`${winterSports[i][0]}: ${winterSports[i][1]}`);
}
console.log('');

console.log('*** Summer sports ***');

for (i = 0; i < summerSports.length; i++) {
    console.log(`${summerSports[i][0]}: ${summerSports[i][1]}`);
}
console.log('');

console.log('*** Fruits ***');

for (i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i][0]}: ${fruits[i][1]}`);
}