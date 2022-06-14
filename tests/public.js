console.debug("Successfully loaded public.js...")

const form = document.querySelector('form')
const questions = document.querySelectorAll('span');
console.debug(questions)

for (let i in questions) {
    console.debug('Setting up question...')
    let clone = structuredClone(i);
    clone.innerHTML = `
<h3>${i.innerText}</h3><br>
<input id="${i.id}" type="text">
<br>
    `
    form.replaceChild(clone, i)
    console.debug('Successfully updated element: ', i)
}
