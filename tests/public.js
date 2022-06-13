const questions = document.querySelectorAll('questions');

console.debug(questions)

for (let i in questions) {
    console.debug("Setting up question...")
    i.innerHTML = `
<h3>${i.innerText}</h3><br>
<input id="${i.id}" type="text">
<br>
    `
}
