const radios = document.querySelectorAll('input[name="color"]');
const colorOutput = document.getElementById('output');

radios.forEach(radio => {
    radio.addEventListener('change', event => {
        colorOutput.textContent = `Selected color: ${event.target.value}`;
    });
});

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim()
        ? nameInput.value
        : 'незнайомець';
});

const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
    const requiredLength = Number(validationInput.dataset.length);

    if (validationInput.value.length === requiredLength) {
        validationInput.style.border = '3px solid #4caf50';
    } else {
        validationInput.style.border = '3px solid #f44336';
    }
});