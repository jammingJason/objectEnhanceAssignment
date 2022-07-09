function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName
	};
}

// const favoriteNumber = 42;

// const instructor = {
// 	firstName: 'Colt',
// 	[favoriteNumber]: 'That is my favorite'
// };

// instructor[favoriteNumber] = "That is my favorite!"

const instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	}
};

function createAnimal(species, verb, noise) {
	const newObj = {
		species,
		[verb]() {
			console.log(noise);
		}
	};
	return newObj;
}

const d = createAnimal('dog', 'bark', 'Woooof!');
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"
