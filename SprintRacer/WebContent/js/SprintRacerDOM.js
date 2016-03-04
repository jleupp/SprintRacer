onload = function() {
	console.log('IN ONLOAD');
	init();
};

function init() {
	var body = document.body;
	document.loginBox.submit.addEventListener("click", login);
}

var xhrMethod = function(method, url, obj) {

	if (obj){
		console.log("IN xhrMETHOD" + method + url + obj);
		user =JSON.stringify(obj);
	} else {
		console.log("IN XHR***" + method + url);
	}

	var xhr = new XMLHttpRequest();
//	JSON.stringify(obj);
	xhr.open(method, url);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
		console.log(xhr.status);
		if(xhr.readyState === 4) {
		
			}
		}
	if(obj) {
		xhr.send(user);
	} else {
		xhr.send();
	}
};

var test = function(event) {
	event.preventDefault();
};

var createButton = function(buttonValue) {
	var button = document.createElement('input');
		button.setAttribute('name', 'submit');
		button.setAttribute('class', 'submit');
		button.setAttribute('type', 'submit');
		button.setAttribute('id', 'BUTTON');
		button.setAttribute('value', buttonValue);
		return button;
};
var login = function(event) {
	event.preventDefault();
	console.log('IN LOGIN EVENT');
};