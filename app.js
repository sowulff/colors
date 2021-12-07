const colors = [
  { name: 'YELLOW', color: '#f2e432' },
  { name: 'LIGHT ORANGE', color: '#f1ad30' },
  { name: 'ORANGE', color: '#f16026' },
  { name: 'PINK', color: '#FD437D' },
  { name: 'RED', color: '#d6312f' },
  { name: 'DARK RED', color: '#BF0000' },
  { name: 'ERASE', color: '#FEFEFE' },
];

// Header

// buttons
let currentColor = '#FEFEFE';

const buttons = document.querySelector('.buttons');
colors.forEach((color) => {
  const button = document.createElement('button');
  button.setAttribute('data-color', color.color);
  buttons.appendChild(button);
  button.innerHTML = color.name;
  button.addEventListener('click', function (e) {
    currentColor = button.getAttribute('data-color');
  });
});

const squares = window.prompt('how many squares would you like to color?');
const container = document.querySelector('.container');

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);

  //FOR MOBILE
  square.addEventListener('mousedown', () => {
    updateSquareColor(square);
  });
  //FOR DESKTOP
  square.addEventListener('mouseover', () => {
    updateSquareColor(square);
  });
}

// FUNCTIONS

function updateSquareColor(element) {
  element.style.backgroundColor = currentColor;
}
