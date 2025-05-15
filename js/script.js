const year = document.querySelector('#year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;


document.querySelectorAll('.code-block').forEach(block => {
    const code = block.querySelector('code');
    const lines = code.textContent.split('\n').length;
    const lineNumbers = block.querySelector('.line-numbers');

    // Gera os números de linha dinamicamente
    lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => `<span>${i + 1}</span>`).join('');
});