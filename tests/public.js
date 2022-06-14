console.log("Successfully loaded public.js...")

const questions = document.querySelectorAll('question');
console.debug(questions)

for (let i in questions) {
    console.debug("Setting up question...")
    i.innerHTML = `
<h3>${i.innerText}</h3><br>
<input id="${i.id}" type="text">
<br>
    `
}
