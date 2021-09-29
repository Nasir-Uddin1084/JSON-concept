//  <<<<< JSON Object & Array >>>>>

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let data = this.responseText;
		console.log(data);
		jsonData(data);
	}
};
xmlhttp.open('GET', 'data.json', true);
xmlhttp.send();

function jsonData(json_obj) {
	// console.log(json_obj);
	let js_obj = JSON.parse(json_obj);
	// console.log(js_obj)
	for (x in js_obj.person) {
		// person access
		let person = js_obj.person;
		// console.log(person[x]);
		for (y in person[x]) {
			// person element access
			console.log(person[x][y]);
		}
	}
}