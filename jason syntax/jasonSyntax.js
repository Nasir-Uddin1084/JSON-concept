// JSON Syntax

// JS Object formate
var student = {
	name: 'Nasir',
	age: 23,
	homeTown: 'Noakhali',
};
console.log(student);

// JSON formate (Hard Core)
// var student_json = {
// 	name: 'Nasir',
// 	age: 23,
// 	homeTown: 'Noakhali',
// };

// convert JS obj to JSON
var student_json = JSON.stringify(student);
console.log(student_json);

// convert JSON to JS obj
var student_new = JSON.parse(student_json);
console.log(student_new);
