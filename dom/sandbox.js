const para = document.querySelector("p")

// para.innerText = "ninjas are awesome!"

// const paras = document.querySelectorAll("p")
// paras.forEach(para => {
//   console.log(para.innerText)
//   para.innerText += " (new text)"
// })

// const content = document.querySelector(".content")
// content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

// const people = ["Davie", "joe", "agie", "john"]

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`
// })

// const title = document.querySelector("h2")
// title.style.color = "crimson"
// title.style.fontSize = "60px"
// title.style.color = ""

// const content = document.querySelector('p')
// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

// let paras = document.querySelectorAll('p')
// paras.forEach(para => {
//   console.log(para.innerText)
//   if(/error/gi.test(para.innerText)) {
//     para.classList.add("error")
//   } else if (para.innerText.includes('success')) {
//     para.classList.add('success')
//   }
// })

// const article = document.querySelector('article')
// Array.from(article.children).forEach(el => {
//   el.classList.add('success')
// })

//// EVENTS
const ul = document.querySelector('ul')
const button = document.querySelector('button')
button.addEventListener("click", () => {
  const li = document.createElement('li')
  li.textContent = 'something new to do'
  ul.prepend(li)
})

// const lis = document.querySelectorAll('ul>li')
// lis.forEach(li => {
//   li.addEventListener("click", (e) => {
//     e.stopPropagation()
//     e.target.style.textDecoration = 'line-through'
//     e.target.remove()
//   })
// })


// // Event bubbling/delegation - deletion
// ul.addEventListener('click', e => {
//   console.log(e.target)
//   if(e.target.tagName === 'LI') {
//     e.target.remove()
//   }
// })







