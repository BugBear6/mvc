function View(rootElement) {
	this.rootElement = rootElement;
	this.clickNext = null;
}

View.prototype.render = function render(data = {}) {
	const examples = data.examples.map(example => (`
		<li class="card__examples_pair">
			<p class="card__example">${example.es}</p>
			<p class="card__example card__example--ang">${example.ang}</p>
		</li>
	`));

	this.rootElement.innerHTML = `
		<div>
			<h4 class="card__definition">${data.es}<h4>
			<h4 class="card__definition card__definition--ang">${data.ang}<h4>
			<ul class="card__examples">${examples.join('')}</ul>

			<div class="buttons">
				<button class="button" id="next">Next</button>
			</div>
		</div>
	`;

	const next = document.getElementById('next');

	next.addEventListener('click', () => {
		this.clickNext();
	});
};

export default View;
