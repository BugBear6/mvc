import Model from './mvc-module/model.js';
import View from './mvc-module/view.js';
import Controller from './mvc-module/Controller.js';

const rootElement = document.getElementById('mvc-view');
const model = new Model();
const view = new View(rootElement);
const myController = new Controller(model, view);

myController.init();

// run server:
// http-server .
// => http://10.0.10.37:8081/
