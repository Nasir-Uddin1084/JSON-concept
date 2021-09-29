// JSON data types

// JSON does support >> string, number, object (JSON object), array, boolean, null

// JSON does not support >> date, undefined, function

// object declared
var person = {
	name: 'Nasir', // string
	age: 23, // number
	homeTown: 'Noakhali',
	married: false, // boolean
	dob: 1998 - 02 - 05, //date
	test_null: null, // null
	test_undefined: undefined, //undefined
	greet: function () {
		// function
		console.log(`hello ${this.name}`);
	},
};
console.log(person);
// person.greet();

// convert in JSON
var person_json = JSON.stringify(person);
console.log(person_json);

//  link to check which data type json support
// http://jsonlint.com
