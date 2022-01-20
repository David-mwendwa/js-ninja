const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const username = document.querySelector('#username')

form.addEventListener('submit', e => {
  e.preventDefault();
  if(/^[a-z]{6,}$/.test(form.username.value)) {
    feedback.textContent = "that username is valid"
  } else {
    feedback.textContent = 'username must contain letters only be at least characters'
  }
})


