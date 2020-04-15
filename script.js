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
			textArea.blur();
			switch(buttons[i].id == e.keyCode || buttons[i].id == e.code){
				case buttons[i].id == 9:
					console.log(buttons[i].id);
					event.preventDefault();
					addChar('\t');
					isPressed = false;
					buttons[i].classList.add('active');
					break;
				case e.code == "ShiftLeft":
				case e.code == "ShiftRight":
					buttons[i].classList.add('active');
					flag =true;
					shiftHandler(flag);
					isPressed = false;
					break;
				case e.code == "ControlLeft":
					isPressed = true;
					buttons[i].classList.add('active');
					break;
				case e.code == "ControlRight":
					buttons[i].classList.add('active');
					isPressed = false;
					break;
				case buttons[i].id == 20:
					capsHandler();
					buttons[i].classList.add('active');
					break;
				case buttons[i].id == 91:
					event.preventDefault();
					buttons[i].classList.add('active');
					break;
				case e.code == "AltLeft":
					buttons[i].classList.add('active');
					event.preventDefault();
					if(isPressed){
						langHandler();
					}
					isPressed = false;
					break;
				case e.code == "AltRight":
					buttons[i].classList.add('active');
					break;
				case buttons[i].id == 8:
					textArea.focus();
					buttons[i].classList.add('active');
					break;
				case buttons[i].id == 46:
					textArea.focus();
					buttons[i].classList.add('active');
					break;
				case buttons[i].id == 13:
					addChar('\n');
					buttons[i].classList.add('active');
					break;
				default:
					addChar(buttons[i].textContent);
					buttons[i].classList.add('active');
					isPressed = false;
			}
		}
	}
});
document.addEventListener('keyup',(e)=>{
	for(let i=0;i<buttons.length;i++){
		if (buttons[i].id == e.keyCode || buttons[i].id == e.code){
			textArea.blur();
			switch(buttons[i].id == e.keyCode || buttons[i].id == e.code){
				case e.code == "ShiftLeft":
				case e.code == "ShiftRight":
					flag =false;
					shiftHandler(flag);
					buttons[i].classList.remove('active');
					break;
				case e.code == "ControlLeft":
					isPressed = true;
					buttons[i].classList.remove('active');
					break;
				case e.code == "ControlRight":
					buttons[i].classList.remove('active');
					break;
				case buttons[i].id == 20:
					buttons[i].classList.remove('active');
					break;
				case e.code == "AltLeft":
					buttons[i].classList.remove('active');
					break;
				case e.code == "AltRight":
					buttons[i].classList.remove('active');
					break;
				case buttons[i].id == 8:
					buttons[i].classList.remove('active');
					break;
				case buttons[i].id == 46:
					buttons[i].classList.remove('active');
					break;
				case buttons[i].id == 13:
					buttons[i].classList.remove('active');
					break;
				default:
					buttons[i].classList.remove('active');
			}
		}
	}
});
/*
document.addEventListener('keydown', (e) => {
	for(let i=0;i<buttons.length;i++){
		if (buttons[i].id == e.keyCode || buttons[i].id == e.code) {
			textArea.blur();
			buttons[i].classList.add('active');
			if (buttons[i].id == 9) {
				event.preventDefault();
				textArea.value += '\t';
				isPressed = false;
			}
			else if(e.code == "ShiftLeft" || e.code == "ShiftRight"){
				flag =true;
				shiftHandler(flag);
				isPressed = false;
			}
			else if (buttons[i].id == 8) {
				textArea.focus();
				isPressed = false;
			}
			else if (buttons[i].id == 20) {
				capsHandler();
				isPressed = false;
			}
			else if (e.code=="ControlLeft") {
				isPressed = true;
				buttons[i].classList.add('active');
			}
			else if (e.code=="ControlRight") {
				buttons[i].classList.add('active');
				isPressed = false;
			}
			else if (buttons[i].id == 91) {
				buttons[i].classList.add('active');
				isPressed = false;
			}
			else if (e.code=="AltLeft") {
				event.preventDefault();
				if(isPressed == true){
					langHandler();
					isPressed = false;
				}
				buttons[i].classList.add('active');
			}
			else if (e.code=="AltRight") {
				event.preventDefault();
				buttons[i].classList.add('active');
				isPressed = false;
			}
			else if (buttons[i].id == 13) {
				textArea.value += '\n';
				buttons[i].classList.add('active');
				isPressed = false;
			}
			else if (buttons[i].id == 46) {
				textArea.focus();	
				isPressed = false;
			}
			else {
				addChar(buttons[i].textContent);
				isPressed = false;
			}
			if(buttons[i].id==37 ||buttons[i].id == 38 || buttons[i].id == 39 || buttons[i].id==40){
				event.preventDefault();
				isPressed = false;
			}
		}
	}
});

document.addEventListener('keyup', (e) => {
	for(let i =0;i<buttons.length;i++){
		if (buttons[i].id == e.keyCode || buttons[i].id == e.code) {
			buttons[i].classList.remove('active');
			if(e.code=="ShiftLeft" || e.code == "ShiftRight"){
				flag=false;
				shiftHandler(flag);
			}
		}
	}
});
*/
document.addEventListener('mousedown',(e)=>{
	e.target.tagName = 'div';
	if(e.target.className.indexOf('button') !=-1){
		if(e.target.id == 20){
			capsHandler();
			e.target.classList.add('active');
		}
		else if (e.target.id == 9){
			e.target.classList.add('active');
			textArea.value+='\t';
		}
		else if (e.target.id == "ShiftLeft" || e.target.id == "ShiftRight"){
			e.target.classList.add('active');
			flag =true;
			shiftHandler(flag);
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
			backspaceHandler();
		}
		else if(e.target.id == 46){
			e.target.classList.add('active');
			deleteHandler();
		}
		else if (e.target.id == 91){
			e.target.classList.add('active');
			langHandler();
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
			flag =false;
			shiftHandler(flag);
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

