let answers = [
    '2',
    '3'
]

const button = document.querySelector('button')
const inputs = document.querySelectorAll('div.question')
let results = []

/** Makes a map out of x and y, for example:
* ```js
* > mapper(['1', '2', '3'], ['first', 'second', 'third'])
* Map(3) {'1' => 'first', '2' => 'second', '3' => 'third'}
* ```

* @param x The map's keys.
* @param y The map's values.
*/
function mapper(x, y) {
    let toReturn = new Map()
    for (let i = 0; i < y.length; i++) {
        toReturn.set(x[i], y[i])
    }
    return toReturn
}
let label
button.addEventListener('click', () => {
    console.debug("Submit button is clicked.")
    for (let [input, answer] of mapper(Array.from(inputs, elem => elem.firstElementChild.querySelector('input').value), answers)) {
        if (input === answer) {
            results.push("Correct!")
        } else {
            results.push("Wrong answer!")
        }
    }
    for (let [div, res] of mapper(inputs, results)) {
        label = document.createElement('label')
        label.for = div.firstChild.id
        label.innerText = res
        div.appendChild(label)
    }
    results = []
})