function makeElephant(name, size, color, legCount, weight, tailWeight, tailLength, trunkWeight, trunkLength, bodyWeight, bodyLength) {

	var elephant = {};

	elephant.name = name;
	elephant.size = size;
	elephant.color = color;
	elephant.legCount = legCount;
	elephant.weight = weight;
	elephant.tail = {
		weight: tailWeight,
		legth: tailLength
	};
	elephant.trunk = {
		weight: trunkWeight,
		legth: trunkLength
	};
	elephant.body = {
		weight: bodyWeight,
		legth: bodyLength
	};

	return elephant;
}

function eatElephant (elephantName) {
	delete elephantName.tail;
	delete elephantName.trunk;
	delete elephantName.body;
}

var dumbo = makeElephant('Dumbo', 8, 'slategray', 3, 180, 10, 2, 20, 3, 299, 29);
var slappy = makeElephant('slappy', 8, 'blue', 4, 190, 10, 2, 20, 3, 300, 30);
var fluffy = makeElephant('fluffy', 8, 'pink', 4, 200, 10, 2, 20, 3, 301, 31);

var elephantMenu = [dumbo, fluffy, slappy];

console.log("Welcome to Eataphant, look at our menu");
	

function isElephantAvailableToBeEaten (whichElephant) {
		if (whichElephant.weight >= 200 && whichElephant.legCount === 4) {
			return true;
		} 
		return false;
}

function orderElephant (customerPreference) {
	for (var i = 0; i < elephantMenu.length; i++) {
		if (elephantMenu[i].color === customerPreference && isElephantAvailableToBeEaten(elephantMenu[i])) {
			eatElephant(elephantMenu[i]);
			console.log(`${elephantMenu[i].name} was eaten`);
		}
	}
}

var joe = {};
joe.hungryLevel = 10;
joe.money = 30;
joe.preference = "pink";
orderElephant(joe.preference);

var brenda = {};
brenda.hungryLevel = 6;
brenda.money = 70;
brenda.preference = "white"