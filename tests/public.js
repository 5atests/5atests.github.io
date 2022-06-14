console.debug("Successfully loaded public.js...")

const form = document.querySelector('form')
const questions = document.querySelectorAll('span');
console.debug(questions)

for (let i of questions) {
    console.debug('Setting up question...', typeof i)
    let clone = structuredClone(i);
    clone.innerHTML = `
<h3>${i.innerText}</h3><br>
<input id="${i.id}" type="text">
<br>
    `
    form.replaceWith(clone)
    console.debug('Successfully updated element: ', i)
}
