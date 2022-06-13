const questions = document.querySelectorAll('questions');

for (let i in questions) {
    i.innerHTML = `
${i.innerText}<br>
<input id="${i.id}" type="text">
<br>
    `
}
