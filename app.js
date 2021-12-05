const colors = [
  { name: 'blue', color: '#0F4BFF' },
  { name: 'red', color: '#FF0F0F' },
  { name: 'white', color: '#FEFEFE' },
];
// buttons
const buttons = document.querySelector('.buttons');
colors.forEach((color) => {
  const button = document.createElement('button');
  button.setAttribute('data-color', color.color);
  buttons.appendChild(button);
  button.innerHTML = color.name;
});

const squares = 100;
const container = document.querySelector('.container');

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);

  //FOR MOBILE
  square.addEventListener('click', () => {
    setColor(square);
  });
  //FOR DESKTOP
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
}

function setColor(element) {
  const color = '#FEFEFE';
  element.style.backgroundColor = color;
}

buttons.addEventListener('click', setColor);
