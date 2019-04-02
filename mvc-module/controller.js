function Controller(model, view) {
	this.view = view;
	this.model = model;
}

Controller.prototype.clickNext = function clickNext() {
	this.model.increaseIndex();
	this.model.getData()
		.then((resp) => {
			this.view.render(resp);
		});
};

Controller.prototype.init = function init() {
	this.view.clickNext = this.clickNext.bind(this);
	this.model.getData()
		.then((resp) => {
			this.view.render(resp);
		});
};

export default Controller;
