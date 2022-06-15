console.debug("Successfully loaded public.js...")
const questions = document.querySelectorAll('span');
console.debug(questions)

for (let i of questions) {
    console.debug('Setting up question...', typeof i)
    i.innerHTML = `
<h3>${i.innerText}</h3>
<input name="${i.id}" id="${i.id}" type="text">
<br>
    `
    console.debug('Successfully updated element: ', i)
}
