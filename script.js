let body = document.getElementsByTagName('body')[0];


const keys = [
	[{ value: '`', valueShift: '~', code: 192}, 
	{ value: '1', valueShift: '!', code: 49 }, 
	{ value: '2', valueShift: '@', code: 50 },
	{ value: '3', valueShift: '#', code: 51 }, 
	{ value: '4', valueShift: '$', code: 52 }, 
	{ value: '5', valueShift: '%', code: 53 },
	{ value: '6', valueShift: '^', code: 54 }, 
	{ value: '7', valueShift: '&', code: 55 }, 
	{ value: '8', valueShift: '*', code: 56 },
	{ value: '9', valueShift: '(', code: 57 }, 
	{ value: '0', valueShift: ')', code: 48 }, 
	{ value: '-', valueShift: '_', code: 189 },
	{ value: '=', valueShift: '+', code: 187 }, 
	{ value: 'Backspace', code: 8 }],
	[{ value: 'Tab', code: 9 }, 
	{ value: 'q', valueShift: 'Q', code: 81 }, 
	{ value: 'w', valueShift: 'W', code: 87 },
	{ value: 'e', valueShift: 'E', code: 69 }, 
	{ value: 'r', valueShift: 'R', code: 82 }, 
	{ value: 't', valueShift: 'T', code: 84 },
	{ value: 'y', valueShift: 'Y', code: 89 }, 
	{ value: 'u', valueShift: 'U', code: 85 }, 
	{ value: 'i', valueShift: 'I', code: 73 },
	{ value: 'o', valueShift: 'O', code: 79 }, 
	{ value: 'p', valueShift: 'P', code: 80 }, 
	{ value: '[', valueShift: '{', code: 219 },
	{ value: ']', valueShift: '}', code: 221 }, 
	{ value: '\\', valueShift: '|', code: 220 }, 
	{ value: 'Del', code: 46 }],
	[{ value: 'Caps Lock', code: 20 }, 
	{ value: 'a', valueShift: 'A', code: 65 }, 
	{ value: 's', valueShift: 'S', code: 83 },
	{ value: 'd', valueShift: 'D', code: 68 }, 
	{ value: 'f', valueShift: 'F', code: 70 }, 
	{ value: 'g', valueShift: 'G', code: 71 },
	{ value: 'h', valueShift: 'H', code: 72 }, 
	{ value: 'j', valueShift: 'J', code: 74 }, 
	{ value: 'k', valueShift: 'K', code: 75 },
	{ value: 'l', valueShift: 'L', code: 76 }, 
	{ value: ';', valueShift: ':', code: 186 }, 
	{ value: '\'', valueShift: '"', code: 222 },
	{ value: 'Enter', code: 13 }],
	[{ value: 'Shift', code: 'ShiftLeft'}, 
	{ value: 'z', valueShift: 'Z', code: 90 }, 
	{ value: 'x', valueShift: 'X', code: 88 },
	{ value: 'c', valueShift: 'C', code: 67 }, 
	{ value: 'v', valueShift: 'V', code: 86 }, 
	{ value: 'b', valueShift: 'B', code: 66 },
	{ value: 'n', valueShift: 'N', code: 78 }, 
	{ value: 'm', valueShift: 'M', code: 77 }, 
	{ value: ',', valueShift: '<', code: 188 },
	{ value: '.', valueShift: '>', code: 190 }, 
	{ value: '/', valueShift: '?', code: 186 }, 
	{ value: '▲', code: 38 }, 
	{ value: 'Shift', code: "ShiftRight" }],
	[{ value: 'Ctrl', code: 'ControlLeft' }, 
	{ value: 'Win', code: 91 }, 
	{ value: 'Alt', code: 'AltLeft'  }, 
	{ value: ' ', code: 32 },
	{ value: 'Alt', code: 'AltRight'}, 
	{ value: '◄', code: 37 }, { value: '▼', code: 40 },
	 { value: '►', code: 39 },
	{ value: 'Ctrl', code: 'ControlRight'}]
];


let container = document.createElement('div');
container.setAttribute('class', 'container');
body.prepend(container);

let textArea = document.createElement('textarea');
textArea.setAttribute('class', 'field-enter');

let keyboardWrapper = document.createElement('div');
keyboardWrapper.setAttribute('class', 'keyboard');

container.appendChild(textArea);
container.appendChild(keyboardWrapper);

function changeShift() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueShift;
		if (keys.flat()[i].valueShift == null) {
			el.textContent = keys.flat()[i].value;
		}
	});
};
function changeShiftReturn() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value;
	});
};


var isCaps=false;

function changeCaps() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value.toUpperCase();
		if (keys.flat()[i].valueShift == null) {
			el.textContent = keys.flat()[i].value;
		}
	});
	isCaps =true;
};

function changeCapsReturn() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value;
	});
	isCaps=false;
};

keys.forEach(line => {
	let lines = document.createElement('div');
	keyboardWrapper.appendChild(lines);
	lines.setAttribute('class', 'lines');
	line.forEach(key => {
		let button = document.createElement('div');
		lines.appendChild(button);
		button.setAttribute('class', 'button');
		button.setAttribute('id', key.code);
		button.textContent = key.value;
		button.setAttribute('Data',location);
		if (key.code == 8 || key.code == 20 || key.code == "ShiftLeft" || key.code == "ShiftRight" || key.code == 13) {
			button.classList.add('func-button');
		}
		if (key.code == 32) {
			button.classList.add('space');
		}
		button.addEventListener('mousedown', (e) => {
			button.classList.add('active');
			if (key.code == 9) {
				textArea.value += '  ';
			}
			else if (key.code == 8) {
				textArea.value = textArea.value.slice(0,selectionStart);
				textArea.setCursorPosition(textArea.selectionStart);
			}
			else if (key.code == 20) {
				if(isCaps == false){
					changeCaps();
				}
				else if(isCaps == true){
					changeCapsReturn();
				}
			}
			else if(e.code == "ShiftLeft"){
				changeCaps();
			}
			else if(e.code == "ShiftRight"){
				changeCaps();
			}
			else if (key.code == 17) {
				button.classList.add('active');
			}
			else if (key.code == 91) {
				button.classList.add('active');
			}
			else if (key.code == 18) {
				button.classList.add('active');
			}
			else if (key.code == 13) {
				textArea.value += '\n';
				button.classList.add('active');
			}
			else if (key.code == 46) {
				textArea.value = textArea.value.slice(selectionStart,1);
				textArea.setCursorPosition(textArea.selectionStart);
			}
			else {
				textArea.value += button.textContent;
			}
		});
		button.addEventListener('mouseup', (e) => {
				button.classList.remove('active');
				if(e.code=="ShiftLeft"){
					changeCapsReturn();
				}
				else if(e.code == "ShiftRight"){
					changeCapsReturn();
				}
		});




		document.addEventListener('keydown', (e) => {
			if (button.id == e.keyCode || button.id == e.code) {
				textArea.blur();
				button.classList.add('active');
				if (key.code == 9) {
					event.preventDefault();
					textArea.value += '  ';
				}
				else if(e.code == "ShiftLeft"){
					changeCaps();
				}
				else if(e.code == "ShiftRight"){
					changeCaps();
				}
				else if (key.code == 8) {
					textArea.focus();
					textArea.value = textArea.value.slice(0,selectionStart);
					textArea.setCursorPosition(textArea.selectionStart);
				}
				else if (key.code == 20) {
					if(isCaps == false){
						changeCaps();
					}
					else if(isCaps == true){
						changeCapsReturn();
					}
				}
				else if (e.code=="ControlLeft") {
					button.classList.add('active');
				}
				else if (e.code=="ControlRight") {
					button.classList.add('active');
				}
				else if (key.code == 91) {
					button.classList.add('active');
				}
				else if (e.code=="AltLeft") {
					event.preventDefault();
					button.classList.add('active');
				}
				else if (e.code=="AltRight") {
					event.preventDefault();
					button.classList.add('active');
				}
				else if (key.code == 13) {
					textArea.value += '\n';
					button.classList.add('active');
				}
				else if (key.code == 46) {
					textArea.focus();
					textArea.value = textArea.value.slice(selectionStart,1);
					textArea.setCursorPosition(textArea.selectionStart);
				}
				else {
					textArea.value += button.textContent;
				}

				if(key.code==37 || key.code == 38 || key.code == 39 || key.code==40){
					event.preventDefault();
				}
			}
		});

		document.addEventListener('keyup', (e) => {
			if (button.id == e.keyCode || button.id == e.code) {
				button.classList.remove('active');
				if(e.code=="ShiftLeft"){
					changeCapsReturn();
				}
				else if(e.code == "ShiftRight"){
					changeCapsReturn();
				}
			}
		});
	});
});