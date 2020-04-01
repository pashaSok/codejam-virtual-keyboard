let body = document.getElementsByTagName('body')[0];

let container = document.createElement('div');
container.setAttribute('class','container');
body.appendChild(container);

let textArea = document.createElement('textarea');
textArea.setAttribute('class','field-enter');

let keyboard = document.createElement('div');
keyboard.setAttribute('class','keyboard');

container.appendChild(textArea);
container.appendChild(keyboard);