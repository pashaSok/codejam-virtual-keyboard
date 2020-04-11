let body = document.getElementsByTagName('body')[0];

const keys = [
	[{ value: '`', valueShift: '~', code: 192,valueRu :'`', valueShiftRu: 'Ё'}, 
	{ value: '1', valueShift: '!', code: 49,valueRu :'1' , valueShiftRu: '!'}, 
	{ value: '2', valueShift: '@', code: 50,valueRu :'2' , valueShiftRu: '"'},
	{ value: '3', valueShift: '#', code: 51,valueRu :'3' , valueShiftRu: '№'}, 
	{ value: '4', valueShift: '$', code: 52 ,valueRu :'4', valueShiftRu: ';'}, 
	{ value: '5', valueShift: '%', code: 53 ,valueRu :'5', valueShiftRu: '%'},
	{ value: '6', valueShift: '^', code: 54 ,valueRu :'6', valueShiftRu: ':'}, 
	{ value: '7', valueShift: '&', code: 55 ,valueRu :'7', valueShiftRu: '?'}, 
	{ value: '8', valueShift: '*', code: 56 ,valueRu :'8', valueShiftRu: '*'},
	{ value: '9', valueShift: '(', code: 57 ,valueRu :'9', valueShiftRu: '('}, 
	{ value: '0', valueShift: ')', code: 48 ,valueRu :'0', valueShiftRu: ')'}, 
	{ value: '-', valueShift: '_', code: 189 ,valueRu :'-', valueShiftRu: '_'},
	{ value: '=', valueShift: '+', code: 187 ,valueRu :'=', valueShiftRu: '+'}, 
	{ value: 'Backspace', code: 8 , valueRu :'Backspace'}],
	[{ value: 'Tab', code: 9 , valueRu :'Tab'}, 
	{ value: 'q', valueShift: 'Q', code: 81 ,valueRu :'й', valueShiftRu: 'Й'}, 
	{ value: 'w', valueShift: 'W', code: 87 ,valueRu :'ц', valueShiftRu: 'Ц'},
	{ value: 'e', valueShift: 'E', code: 69 ,valueRu :'у', valueShiftRu: 'У'}, 
	{ value: 'r', valueShift: 'R', code: 82 ,valueRu :'к', valueShiftRu: 'К'}, 
	{ value: 't', valueShift: 'T', code: 84 ,valueRu :'е', valueShiftRu: 'Е'},
	{ value: 'y', valueShift: 'Y', code: 89 ,valueRu :'н', valueShiftRu: 'Н'}, 
	{ value: 'u', valueShift: 'U', code: 85 ,valueRu :'г', valueShiftRu: 'Г'}, 
	{ value: 'i', valueShift: 'I', code: 73 ,valueRu :'ш', valueShiftRu: 'Ш'},
	{ value: 'o', valueShift: 'O', code: 79 ,valueRu :'щ', valueShiftRu: 'Щ'}, 
	{ value: 'p', valueShift: 'P', code: 80 ,valueRu :'з', valueShiftRu: 'З'}, 
	{ value: '[', valueShift: '{', code: 219 ,valueRu :'х', valueShiftRu: 'Х'},
	{ value: ']', valueShift: '}', code: 221 ,valueRu :'ъ', valueShiftRu: 'Ъ'}, 
	{ value: '\\', valueShift: '|', code: 220 ,valueRu :'\\', valueShiftRu: '/'}, 
	{ value: 'Del', code: 46 ,valueRu :'Del'}],
	[{ value: 'Caps Lock', code: 20 ,valueRu :'Caps Lock'}, 
	{ value: 'a', valueShift: 'A', code: 65 ,valueRu :'ф', valueShiftRu: 'Ф'}, 
	{ value: 's', valueShift: 'S', code: 83 ,valueRu :'ы', valueShiftRu: 'Ы'},
	{ value: 'd', valueShift: 'D', code: 68 ,valueRu :'в', valueShiftRu: 'В'}, 
	{ value: 'f', valueShift: 'F', code: 70 ,valueRu :'а', valueShiftRu: 'А'}, 
	{ value: 'g', valueShift: 'G', code: 71 ,valueRu :'п', valueShiftRu: 'П'},
	{ value: 'h', valueShift: 'H', code: 72 ,valueRu :'р', valueShiftRu: 'Р'}, 
	{ value: 'j', valueShift: 'J', code: 74 ,valueRu :'о', valueShiftRu: 'О'}, 
	{ value: 'k', valueShift: 'K', code: 75 ,valueRu :'л', valueShiftRu: 'Л'},
	{ value: 'l', valueShift: 'L', code: 76 ,valueRu :'д', valueShiftRu: 'Д'}, 
	{ value: ';', valueShift: ':', code: 186 ,valueRu :'ж', valueShiftRu: 'Ж'}, 
	{ value: '\'', valueShift: '"', code: 222 ,valueRu :'э', valueShiftRu: 'Э'},
	{ value: 'Enter', code: 13 ,valueRu :'Enter'}],
	[{ value: 'Shift', code: 'ShiftLeft',valueRu :'Shift'}, 
	{ value: 'z', valueShift: 'Z', code: 90 ,valueRu :'я', valueShiftRu: 'Я'}, 
	{ value: 'x', valueShift: 'X', code: 88 ,valueRu :'ч', valueShiftRu: 'Ч'},
	{ value: 'c', valueShift: 'C', code: 67 ,valueRu :'с', valueShiftRu: 'С'}, 
	{ value: 'v', valueShift: 'V', code: 86 ,valueRu :'м', valueShiftRu: 'М'}, 
	{ value: 'b', valueShift: 'B', code: 66 ,valueRu :'и', valueShiftRu: 'И'},
	{ value: 'n', valueShift: 'N', code: 78 ,valueRu :'т', valueShiftRu: 'Т'}, 
	{ value: 'm', valueShift: 'M', code: 77 ,valueRu :'ь', valueShiftRu: 'Ь'}, 
	{ value: ',', valueShift: '<', code: 188 ,valueRu :'б', valueShiftRu: 'Б'},
	{ value: '.', valueShift: '>', code: 190 ,valueRu :'ю', valueShiftRu: 'Ю'}, 
	{ value: '/', valueShift: '?', code: 186 ,valueRu :'.', valueShiftRu: ','}, 
	{ value: '▲', code: 38 ,valueRu :'▲'}, 
	{ value: 'Shift', code: "ShiftRight" ,valueRu :'Shift'}],
	[{ value: 'Ctrl', code: 'ControlLeft' ,valueRu :'Ctrl'}, 
	{ value: 'Win', code: 91 ,valueRu :'Win'}, 
	{ value: 'Alt', code: 'AltLeft'  ,valueRu :'Alt'}, 
	{ value: ' ', code: 32 ,valueRu :' '},
	{ value: 'Alt', code: 'AltRight',valueRu :'Alt'}, 
	{ value: '◄', code: 37 ,valueRu :'◄'}, { value: '▼', code: 40 ,valueRu :'▼'},
	 { value: '►', code: 39 ,valueRu :'►'},
	{ value: 'Ctrl', code: 'ControlRight',valueRu :'Ctrl'}]
];

let container = document.createElement('div');
container.setAttribute('class', 'container');
body.prepend(container);

let textArea = document.createElement('textarea');
textArea.setAttribute('class', 'field-enter');

let keyboardWrapper = document.createElement('div');
keyboardWrapper.setAttribute('class', 'keyboard');

let instruction = document.createElement('span');
instruction.textContent ='Change language : Ctrl + Alt \n or Win on mousedown';
instruction.setAttribute('class','instruction');


container.appendChild(textArea);
container.appendChild(keyboardWrapper);
container.appendChild(instruction);

var isCaps=false;
var isPressed = false;
var lang = 'en';

function changeShift() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueShift;
		if (keys.flat()[i].valueShift == null) {
			el.textContent = keys.flat()[i].value;
		}
	});
};

function changeShiftRu() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueShiftRu;
		if (keys.flat()[i].valueShiftRu == null) {
			el.textContent = keys.flat()[i].valueRu;
		}
	});
};

function changeShiftReturn() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value;
	});
};

function changeShiftReturnRu() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueRu;
	});
};

function changeCaps() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value.toUpperCase();
		if (keys.flat()[i].valueShift == null) {
			el.textContent = keys.flat()[i].value;
		}
	});
	isCaps =true;
};

function changeCapsRu(){
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueRu.toUpperCase();
		if (keys.flat()[i].valueShiftRu == null) {
			el.textContent = keys.flat()[i].valueRu;
		}
	});
	isCaps =true;
}

function changeCapsReturn() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value;
	});
	isCaps=false;
};

function changeCapsReturnRu() {
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueRu;
	});
	isCaps=false;
};

function changeLang(){
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].valueRu;
		if (keys.flat()[i].valueShift == null) {
			el.textContent = keys.flat()[i].value;
		}
	});
	lang ='ru';
}
function changeLangReturn(){
	document.querySelectorAll('.button').forEach(function (el, i) {
		el.textContent = keys.flat()[i].value;
		if (keys.flat()[i].valueShift == null) {
			el.textContent = keys.flat()[i].valueRu;
		}
	});
	lang ='en';
}

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
		if (key.code == 8 || key.code == 20 || key.code == "ShiftLeft" || key.code == "ShiftRight" || key.code == 13) {
			button.classList.add('func-button');
		}
		if (key.code == 32) {
			button.classList.add('space');
		}

		document.addEventListener('keydown', (e) => {
			if (button.id == e.keyCode || button.id == e.code) {
				textArea.blur();
				button.classList.add('active');
				if (key.code == 9) {
					event.preventDefault();
					textArea.value += '\t';
				}
				else if(e.code == "ShiftLeft"){
					if (lang == 'en'){
						changeShift();
					}
					else if(lang == 'ru'){
						changeShiftRu();
					}
				}
				else if(e.code == "ShiftRight"){
					if (lang == 'en'){
						changeShift();
					}
					else if(lang == 'ru'){
						changeShiftRu();
					}
				}
				else if (key.code == 8) {
					textArea.focus();
					textArea.value = textArea.value.slice(0,selectionStart);
					textArea.setCursorPosition(textArea.selectionStart);
				}
				else if (key.code == 20) {
					if(lang == 'en'){
						if(isCaps == false){
							changeCaps();
						}
						else if(isCaps == true){
							changeCapsReturn();
						}
					}
					if(lang == 'ru'){
						if(isCaps == false){
							changeCapsRu();
						}
						else if(isCaps == true){
							changeCapsReturnRu();
						}
					}
				}
				else if (e.code=="ControlLeft") {
					isPressed = true;
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
					if(isPressed == true){
						if(lang == 'en'){
							changeLang();
						}
						else if(lang == 'ru'){
							changeLangReturn();
						}
					}
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
				else if(e.keyCode==17 && e.keyCode==16){
					event.preventDefault();
					changeLang();
				}
				else {
					addChar(button.textContent);
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
					if(lang == 'en'){
						changeShiftReturn();
					}
					else if(lang == 'ru'){
						changeShiftReturnRu();
					}
				}
				else if(e.code == "ShiftRight"){
					if(lang == 'en'){
						changeShiftReturn();
					}
					else if(lang == 'ru'){
						changeShiftReturnRu();
					}
				}
			}
		});
	});
});

function addChar(e){
	const startSelection = textArea.selectionStart;
	const endSelection = textArea.selectionEnd;
	const textArr = textArea.value.split('');
	if (textArea.selectionEnd - textArea.selectionStart > 0) {
		textArr.splice(startSelection, endSelection - startSelection, e);
		textArea.value = textArr.join('');
		textArea.selectionEnd = startSelection + e.length;
	} 
	else if (textArea.value.length > endSelection) {
		textArr.splice(endSelection, 0, e);
		textArea.value = textArr.join('');
		textArea.selectionEnd = startSelection + e.length;
		textArea.selectionStart = textArea.selectionEnd;
	} else {
		textArea.value += e;
  }
}
function onBackspace() {
	const startSelection = textArea.selectionStart;
	const endSelection = textArea.selectionEnd;
	const textArr = textArea.value.split('');
	if (endSelection - startSelection > 0) {
		textArr.splice(startSelection, endSelection - startSelection);
	} 
	else {
		textArr.splice(endSelection - 1, 1);
	}
	textArea.value = textArr.join('');
	textArea.selectionEnd = startSelection - 1;
};

function onDelete() {
	const startSelection = textarea.selectionStart;
	const endSelection = textarea.selectionEnd;
	const textArr = textarea.value.split('');
	if (endSelection - startSelection > 0) {
		textArr.splice(startSelection, endSelection - startSelection);
	} 
	else {
		textArr.splice(endSelection, 1);
	}
	textarea.value = textArr.join('');
	textarea.selectionEnd = startSelection;
  };

document.addEventListener('mousedown',(e)=>{
	e.target.tagName = 'div';
	if(e.target.className.indexOf('button') !=-1){
		if(e.target.id == 20){
			if(isCaps == false){
				e.target.classList.add('active');
				if(lang == 'en'){
					changeCaps();
				}
				else if(lang == 'ru'){
					changeCapsRu();
				}
			}
			else if(isCaps == true){
				e.target.classList.add('active');
				if(lang =='en'){
					changeCapsReturn();
				}
				else if(lang =='ru'){
					changeCapsReturnRu();
				}
			}
		}
		else if (e.target.id == 9){
			e.target.classList.add('active');
			textArea.value+='\t';
		}
		else if (e.target.id == "ShiftLeft" || e.target.id == "ShiftRight"){
			e.target.classList.add('active');
			if(lang == 'en'){
				changeShift();
			}
			else if(lang == 'ru'){
				changeShiftRu();
			}
		}
		else if (e.target.id == "AltLeft" || e.target.id == "AltRight" || e.target.id == "ControlLeft" || e.target.id == "ControlRight"){
			e.target.classList.add('active');
		}
		else if (e.target.id == 13){
			e.target.classList.add('active');
			textArea.value+='\n';
		}
		else if(e.target.id == 8){
			e.target.classList.add('active');
			onBackspace();
		}
		else if(e.target.id == 46){
			e.target.classList.add('active');
			onDelete();
		}
		else if (e.target.id == 91){
			e.target.classList.add('active');
			if(lang == 'en'){
				changeLang();
			}
			else if(lang == 'ru'){
				changeLangReturn();
			}
		}
		else {
			e.target.classList.add('active');
			addChar(e.target.textContent);
		}
	}
});
document.addEventListener('mouseup',(e)=>{
	e.target.tagName = 'div';
	if(e.target.className.indexOf('button') !=-1){
		if (e.target.id == 9){
			e.target.classList.remove('active');
		}
		else if (e.target.id == "ShiftLeft" || e.target.id == "ShiftRight"){
			e.target.classList.remove('active');
			if(lang == 'en'){
				changeShiftReturn();
			}
			else if(lang == 'ru'){
				changeShiftReturnRu();
			}
		}
		else if (e.target.id == "AltLeft" || e.target.id == "AltRight" || e.target.id == "ControlLeft" || e.target.id == "ControlRight"){
			e.target.classList.remove('active');
		}
		else if (e.target.id == 13){
			e.target.classList.remove('active');
		}
		else if(e.target.id == 8){
			e.target.classList.remove('active');
		}
		else if(e.target.id == 46){
			e.target.classList.remove('active');
		}
		else if (e.target.id == 91){
			e.target.classList.remove('active');
		}
		else {
			e.target.classList.remove('active');
		}
	}
});

