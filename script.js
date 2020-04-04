let body = document.getElementsByTagName('body')[0];

const keys = [
    [{ value: '`', code: 192 }, { value: '1', code: 49 }, { value: '2', code: 50 }, { value: '3', code: 51 }, { value: '4', code: 52 }, { value: '5', code: 53 }, { value: '6', code: 54 }, { value: '7', code: 55 }, { value: '8', code: 56 }, { value: '9', code: 57 }, { value: '0', code: 48 }, { value: '-', code: 189 },{value:'=',code:187},{value:'Backspace',code:9}],
    [{ value: 'Tab', code: 9 }, { value: 'q', code: 81 }, { value: 'w', code: 87 }, { value: 'e', code: 69 }, { value: 'r', code: 82 }, { value: 't', code: 84 }, { value: 'y', code: 89 }, { value: 'u', code: 85 }, { value: 'i', code: 73 }, { value: 'o', code: 79 }, { value: 'p', code: 80 }, { value: '[', code: 219 },{value:']',code:221},{value:'\\',code:220},{value:'Del',code:46}],
    [{ value: 'Caps \n Lock', code: 20 }, { value: 'a', code: 65 }, { value: 's', code: 83 }, { value: 'd', code: 68 }, { value: 'f', code: 70 }, { value: 'g', code: 71 }, { value: 'h', code: 72 }, { value: 'j', code: 74 }, { value: 'k', code: 75 }, { value: 'l', code: 76 }, { value: ';', code: 186 }, { value: '\'', code: 222 },{value:'Enter',code:13}],
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

keys.forEach(line=>{
    let lines = document.createElement('div');
    keyboardWrapper.appendChild(lines);
    lines.setAttribute('class','lines');
    line.forEach(key=>{
        let button = document.createElement('div');
        lines.appendChild(button);
        button.setAttribute('class','button');
        button.textContent=key.value;
    })
})

