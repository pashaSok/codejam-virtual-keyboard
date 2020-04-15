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
	[{ value: 'Shift' , code: "ShiftLeft" ,valueRu :'Shift'}, 
	{ value: 'z', valueShift: 'Z', code: 90 ,valueRu :'я', valueShiftRu: 'Я'}, 
	{ value: 'x', valueShift: 'X', code: 88 ,valueRu :'ч', valueShiftRu: 'Ч'},
	{ value: 'c', valueShift: 'C', code: 67 ,valueRu :'с', valueShiftRu: 'С'}, 
	{ value: 'v', valueShift: 'V', code: 86 ,valueRu :'м', valueShiftRu: 'М'}, 
	{ value: 'b', valueShift: 'B', code: 66 ,valueRu :'и', valueShiftRu: 'И'},
	{ value: 'n', valueShift: 'N', code: 78 ,valueRu :'т', valueShiftRu: 'Т'}, 
	{ value: 'm', valueShift: 'M', code: 77 ,valueRu :'ь', valueShiftRu: 'Ь'}, 
	{ value: ',', valueShift: '<', code: 188 ,valueRu :'б', valueShiftRu: 'Б'},
	{ value: '.', valueShift: '>', code: 190 ,valueRu :'ю', valueShiftRu: 'Ю'}, 
	{ value: '/', valueShift: '?', code: 191 ,valueRu :'.', valueShiftRu: ','}, 
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


const body = document.getElementsByTagName('body')[0];
const textArea = document.createElement('textarea');
textArea.setAttribute('class', 'field-enter');

const keyboardWrapper = document.createElement('div');
keyboardWrapper.setAttribute('class', 'keyboard');

const instruction = document.createElement('span');
instruction.textContent ='Change language : Ctrl + Alt \n or Win on mousedown';
instruction.setAttribute('class','instruction');

function initContainer(){
	const container = document.createElement('div');
	container.setAttribute('class', 'container');
	body.prepend(container);
	container.appendChild(textArea);
	container.appendChild(keyboardWrapper);
	container.appendChild(instruction);
}
initContainer();


let isCaps=false;
let isPressed = false;
let lang = 'en';
let flag;

function shiftHandler(flag){
	if(flag == true){
		if(lang == 'en'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].valueShift;
				if (keys.flat()[i].valueShift == null) {
					el.textContent = keys.flat()[i].value;
				}
			});
		}
		else if( lang == 'ru'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].valueShiftRu;
				if (keys.flat()[i].valueShiftRu == null) {
					el.textContent = keys.flat()[i].valueRu;
				}
			});
		}
	}
	else if(flag == false){
		if(lang =='en'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].value;
			});
		}
		else if(lang == 'ru'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].valueRu;
			});
		}
	}
}
function capsHandler(){
	if(isCaps==false){
		if(lang == 'en'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].value.toUpperCase();
				if (keys.flat()[i].valueShift == null) {
					el.textContent = keys.flat()[i].value;
				}
			});
			isCaps =true;
		}
		else if(lang == 'ru'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].valueRu.toUpperCase();
				if (keys.flat()[i].valueShiftRu == null) {
					el.textContent = keys.flat()[i].valueRu;
				}
			});
			isCaps =true;
		}
	}
	else if(isCaps == true){
		if(lang == 'en'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].value;
			});
			isCaps=false;
		}
		else if(lang == 'ru'){
			document.querySelectorAll('.button').forEach(function (el, i) {
				el.textContent = keys.flat()[i].valueRu;
			});
			isCaps=false;
		}
	}
}
function langHandler(){
	if(lang == 'en'){
		document.querySelectorAll('.button').forEach(function (el, i) {
			el.textContent = keys.flat()[i].valueRu;
			if (keys.flat()[i].valueShift == null) {
				el.textContent = keys.flat()[i].value;
			}
		});
		lang ='ru';
	}
	else if(lang == 'ru'){
		document.querySelectorAll('.button').forEach(function (el, i) {
			el.textContent = keys.flat()[i].value;
			if (keys.flat()[i].valueShift == null) {
				el.textContent = keys.flat()[i].valueRu;
			}
		});
		lang ='en';
	}
}
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
function backspaceHandler() {
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
}
function deleteHandler() {
	const startSelection = textArea.selectionStart;
	const endSelection = textArea.selectionEnd;
	const textArr = textArea.value.split('');
	if (endSelection - startSelection > 0) {
		textArr.splice(startSelection, endSelection - startSelection);
	} 
	else {
		textArr.splice(endSelection, 1);
	}
	textArea.value = textArr.join('');
	textArea.selectionEnd = startSelection;
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
		const enter =13, caps = 20, backspace = 8, space = 32;
		if (key.code == enter || key.code == caps || key.code == "ShiftLeft" || key.code == "ShiftRight" || key.code == backspace) {
			button.classList.add('func-button');
		}
		if (key.code == space) {
			button.classList.add('space');
		}
	});
});

const buttons = document.getElementsByClassName('button');

document.addEventListener('keydown',(e)=>{
	for(let i=0;i<buttons.length;i++){
		if (buttons[i].id == e.keyCode || buttons[i].id == e.code){
			const buttonId = buttons[i].id;
			const buttonAddClass = buttons[i].classList.add('active');
			const keyboardButtonCode = e.code;
			textArea.blur();
			switch(buttonId == e.keyCode || buttonId == keyboardButtonCode){
				case buttonId == 9:
					event.preventDefault();
					addChar('\t');
					isPressed = false;
					buttonAddClass;
					break;
				case keyboardButtonCode == "ShiftLeft":
				case keyboardButtonCode == "ShiftRight":
					buttonAddClass;
					flag =true;
					shiftHandler(flag);
					isPressed = false;
					break;
				case keyboardButtonCode == "ControlLeft":
					isPressed = true;
					buttonAddClass;
					break;
				case keyboardButtonCode == "ControlRight":
					buttonAddClass;
					isPressed = false;
					break;
				case buttonId == 20:
					capsHandler();
					buttonAddClass;
					break;
				case buttonId == 91:
					event.preventDefault();
					buttonAddClass;
					break;
				case keyboardButtonCode == "AltLeft":
					buttonAddClass;
					event.preventDefault();
					if(isPressed){
						langHandler();
					}
					isPressed = false;
					break;
				case keyboardButtonCode == "AltRight":
					buttonAddClass;
					break;
				case buttonId == 8:
					textArea.focus();
					buttonAddClass;
					break;
				case buttonId == 46:
					textArea.focus();
					buttonAddClass;
					break;
				case buttonId == 13:
					addChar('\n');
					buttonAddClass;
					break;
				default:
					addChar(buttons[i].textContent);
					buttonAddClass;
					isPressed = false;
			}
		}
	}
});
document.addEventListener('keyup',(e)=>{
	for(let i=0;i<buttons.length;i++){
		if (buttons[i].id == e.keyCode || buttons[i].id == e.code){
			const buttonId = buttons[i].id;
			const buttonRemoveClass = buttons[i].classList.remove('active');
			const keyboardButtonCode = e.code;
			textArea.blur();
			switch(buttonId == e.keyCode || buttonId == keyboardButtonCode){
				case keyboardButtonCode == "ShiftLeft":
				case keyboardButtonCode == "ShiftRight":
					flag =false;
					shiftHandler(flag);
					buttonRemoveClass;
					break;
				case keyboardButtonCode == "ControlLeft":
					isPressed = true;
					buttonRemoveClass;
					break;
				case keyboardButtonCode == "ControlRight":
					buttonRemoveClass;
					break;
				case buttonId == 20:
					buttonRemoveClass;
					break;
				case keyboardButtonCode == "AltLeft":
					buttonRemoveClass;
					break;
				case keyboardButtonCode == "AltRight":
					buttonRemoveClass;
					break;
				case buttonId == 8:
					buttonRemoveClass;
					break;
				case buttonId == 46:
					buttonRemoveClass;
					break;
				case buttonId == 13:
					buttonRemoveClass;
					break;
				default:
					buttonRemoveClass;
			}
		}
	}
});

document.addEventListener('mousedown',(e)=>{
	e.target.tagName = 'div';
	if(e.target.className.indexOf('button') !=-1){
		const buttonId = e.target.id;
		const addButtonClass = e.target.classList.add('active');
		switch(e.target.className.indexOf('button') !=-1){
			case buttonId == 20:
				capsHandler();
				addButtonClass;
				break;
			case buttonId == 9:
				addButtonClass;
				addChar('\t');
				break;
			case buttonId == "ShiftLeft":
			case buttonId == "ShiftRight":
				addButtonClass;
				flag =true;
				shiftHandler(flag);
				break;
			case buttonId == "AltLeft":
			case buttonId == "AltRight":
			case buttonId == "ControlLeft":
			case buttonId == "ControlRight":
				addButtonClass;
				break;
			case buttonId == 13:
				addButtonClass;
				addChar('\n');
				break;
			case buttonId == 8:
				addButtonClass;
				backspaceHandler();
				break;
			case buttonId == 46:
				addButtonClass;
				deleteHandler();
				break;
			case buttonId == 91:
				addButtonClass;
				langHandler();
				break;
			default:
				addButtonClass;
 				addChar(e.target.textContent);
		}
	}
});
document.addEventListener('mouseup',(e)=>{
	e.target.tagName = 'div';
	if(e.target.className.indexOf('button') !=-1){
		const buttonId = e.target.id;
		const removeButtonClass = e.target.classList.remove('active');
		switch(e.target.className.indexOf('button') !=-1){
			case buttonId == 20:
				removeButtonClass
				break;
			case buttonId == 9:
				removeButtonClass
				break;
			case buttonId == "ShiftLeft":
			case buttonId == "ShiftRight":
				removeButtonClass
				flag =false;
				shiftHandler(flag);
				break;
			case buttonId == "AltLeft":
			case buttonId == "AltRight":
			case buttonId == "ControlLeft":
			case buttonId == "ControlRight":
				removeButtonClass
				break;
			case buttonId == 13:
				removeButtonClass
				break;
			case buttonId == 8:
				removeButtonClass
				break;
			case buttonId == 46:
				removeButtonClass
				break;
			case buttonId == 91:
				removeButtonClass
				break;
			default:
				removeButtonClass
				break;
		}
	}
})

