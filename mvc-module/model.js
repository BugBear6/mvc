function Model() {
	this.index = 0;
}

Model.prototype.getData = function getData() {
	const indextoGet = this.index;
	return fetch('https://codepen.io/BugBear6/pen/EMQxrP.js')
		.then(resp => resp.json())
		.then(resp => {
			return resp[indextoGet];
		});
};

Model.prototype.increaseIndex = function increaseIndex() {
	let newIndex = this.index + 1;
	if (newIndex >= 5) newIndex = 0;
	this.index = newIndex;
};

export default Model;
