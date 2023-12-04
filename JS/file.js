console.log("Hello World")

const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'cyan';
  button.textContent = 'It is a good one';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '';
  button.textContent = 'Click me for a secret';
});