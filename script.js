const submit = document.querySelector(
  'input[type="submit"]'
)
const select = document.querySelector(
  'select'
)

submit.addEventListener('click', () => {
  console.debug("Form submitted")
  window.open(`https://5atests.github.io/tests/${select.value}.html`)
})