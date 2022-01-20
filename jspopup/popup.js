const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close, .popup-wrapper');

button.addEventListener('click', (e) => {
  popup.style.display = 'block'
});

close.addEventListener('click', () => {
  popup.style.display = 'none'
})
