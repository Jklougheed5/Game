document.addEventListener('DOMContentLoaded', () => {
    const stupidSlider = document.querySelector('.stupid-slider');
    const coolSlider = document.querySelector('.cool-slider');
    const stupidValue = document.querySelector('.stupid-value');
    const coolValue = document.querySelector('.cool-value');

    stupidSlider.addEventListener('input', (event) => {
        stupidValue.textContent = event.target.value;
    });

    coolSlider.addEventListener('input', (event) => {
        coolValue.textContent = event.target.value;
    });
});
