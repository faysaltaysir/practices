// Enhanced main.js

document.getElementById('start-quest').addEventListener('click', () => {
    document.getElementById('village-square').style.display = 'none';
    document.getElementById('code-editor').style.display = 'block';
    showHint("Try writing `console.log('Hello, world!');` to get started.");
});

document.getElementById('run-code').addEventListener('click', () => {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('output');
    
    try {
        output.textContent = eval(code);
        showHint("Great! Now try adding two numbers, like `console.log(2 + 3);`.");
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
        showHint("Oops, looks like there's an error. Check your syntax and try again.");
    }
});

function showHint(message) {
    const hintElement = document.createElement('p');
    hintElement.textContent = message;
    document.getElementById('code-editor').appendChild(hintElement);
}
