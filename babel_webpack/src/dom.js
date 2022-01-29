console.log('dom file')
const body = document.querySelector('body')

export const styleBody = () => {
  body.style.background = 'lightblue'
}

export const addTitle = (text) => {
  const title = document.createElement('p')
  title.textContent = text
  body.appendChild(title)
}

