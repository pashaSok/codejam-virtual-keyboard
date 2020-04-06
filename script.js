let body = document.getElementsByTagName('body')[0];

let lang = 'en';
let Caps = false;

const keys = [
    [{ value: '`', code: 192 }, { value: '1', code: 49 }, { value: '2', code: 50 }, { value: '3', code: 51 }, { value: '4', code: 52 }, { value: '5', code: 53 }, { value: '6', code: 54 }, { value: '7', code: 55 }, { value: '8', code: 56 }, { value: '9', code: 57 }, { value: '0', code: 48 }, { value: '-', code: 189 },{value:'=',code:187},{value:'Backspace',code:8}],
    [{ value: 'Tab', code: 9 }, { value: 'q', code: 81 }, { value: 'w', code: 87 }, { value: 'e', code: 69 }, { value: 'r', code: 82 }, { value: 't', code: 84 }, { value: 'y', code: 89 }, { value: 'u', code: 85 }, { value: 'i', code: 73 }, { value: 'o', code: 79 }, { value: 'p', code: 80 }, { value: '[', code: 219 },{value:']',code:221},{value:'\\',code:220},{value:'Del',code:46}],
    [{ value: 'Caps Lock', code: 20 }, { value: 'a', code: 65 }, { value: 's', code: 83 }, { value: 'd', code: 68 }, { value: 'f', code: 70 }, { value: 'g', code: 71 }, { value: 'h', code: 72 }, { value: 'j', code: 74 }, { value: 'k', code: 75 }, { value: 'l', code: 76 }, { value: ';', code: 186 }, { value: '\'', code: 222 },{value:'Enter',code:13}],
    [{ value: 'Shift', code: 16,location:1 }, { value: 'z', code: 90 }, { value: 'x', code: 88 }, { value: 'c', code: 67 }, { value: 'v', code: 86 }, { value: 'b', code: 66 }, { value: 'n', code: 78 }, { value: 'm', code: 77 }, { value: ',', code: 188 }, { value: '.', code: 190 }, { value: '/', code: 186 },{value:'▲',code:38},{value:'Shift',code:16,location:2}],
    [{ value: 'Ctrl', code: 17,location:1 }, { value: 'Win', code: 91 }, { value: 'Alt', code: 18,location:1 }, { value: ' ', code: 32 }, { value: 'Alt', code: 18,location:2 }, { value: '◄', code: 37 }, { value: '▼', code: 40 }, { value: '►', code: 39 }, { value: 'Ctrl', code: 17,location:2 }]
];
const keysCaps = [
    [{ value: '`', code: 192 }, { value: '!', code: 49 }, { value: '@', code: 50 }, { value: '#', code: 51 }, { value: '$', code: 52 }, { value: '%', code: 53 }, { value: '^', code: 54 }, { value: '&', code: 55 }, { value: '*', code: 56 }, { value: '(', code: 57 }, { value: ')', code: 48 }, { value: '_', code: 189 },{value:'+',code:187},{value:'Backspace',code:8}],
    [{ value: 'Tab', code: 9 }, { value: 'Q', code: 81 }, { value: 'W', code: 87 }, { value: 'E', code: 69 }, { value: 'R', code: 82 }, { value: 'T', code: 84 }, { value: 'Y', code: 89 }, { value: 'U', code: 85 }, { value: 'I', code: 73 }, { value: 'O', code: 79 }, { value: 'P', code: 80 }, { value: '{', code: 219 },{value:'}',code:221},{value:'|',code:220},{value:'Del',code:46}],
    [{ value: 'Caps Lock', code: 20 }, { value: 'A', code: 65 }, { value: 'S', code: 83 }, { value: 'D', code: 68 }, { value: 'F', code: 70 }, { value: 'G', code: 71 }, { value: 'H', code: 72 }, { value: 'J', code: 74 }, { value: 'K', code: 75 }, { value: 'L', code: 76 }, { value: ':', code: 186 }, { value: '"', code: 222 },{value:'Enter',code:13}],
    [{ value: 'Shift', code: 16,location:1 }, { value: 'Z', code: 90 }, { value: 'X', code: 88 }, { value: 'C', code: 67 }, { value: 'V', code: 86 }, { value: 'B', code: 66 }, { value: 'N', code: 78 }, { value: 'M', code: 77 }, { value: '<', code: 188 }, { value: '>', code: 190 }, { value: '?', code: 186 },{value:'▲',code:38},{value:'Shift',code:16,location:2}],
    [{ value: 'Ctrl', code: 17,location:1 }, { value: 'Win', code: 91 }, { value: 'Alt', code: 18,location:1 }, { value: ' ', code: 32 }, { value: 'Alt', code: 18,location:2 }, { value: '◄', code: 37 }, { value: '▼', code: 40 }, { value: '►', code: 39 }, { value: 'Ctrl', code: 17,location:2 }]
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

if(lang == 'en' && Caps == false){
	keys.forEach(line=>{
		let lines = document.createElement('div');
		keyboardWrapper.appendChild(lines);
		lines.setAttribute('class','lines');
		line.forEach(key=>{
			let button = document.createElement('div');
			lines.appendChild(button);
			button.setAttribute('class','button');
			button.textContent=key.value;
			if(key.code==8 || key.code == 20 || key.code ==16 || key.code == 13){
				button.classList.add('func-button');
			}
			if(key.code==32){
				button.classList.add('space');
			}		
			button.addEventListener('mousedown',(e)=>{
				button.classList.add('active');
				if(key.code == 9){
					textArea.value+='  ';
				}
				else if(key.code == 8){
					textArea.value=textArea.value.slice(0,-1);
				}
				else if(key.code == 20){
					button.classList.add('active');
				}
				else {
					textArea.value+=key.value;
				}
			});
			button.addEventListener('mouseup',()=>{
				button.classList.remove('active');
			});
	
			window.addEventListener('keydown',(e)=>{	
				if(button.textContent==e.key){
					button.classList.add('active');
					if(e.keyCode == 8){
						textArea.value=textArea.value.slice(0,-1);
					}
					else if(key.code == 9){
						event.preventDefault();
						textArea.value+='  ';
					}
					 else if(key.code!=8) {
						 textArea.value+=button.textContent;
					}
				}
			});
			window.addEventListener('keyup',(e)=>{	
				if(button.textContent==e.key){
					button.classList.remove('active');
				}
			});
		});
	});
}


