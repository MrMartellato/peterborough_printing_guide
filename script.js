// Smooth scroll to step when clicking step number
document.addEventListener('DOMContentLoaded', function() {
    const stepNumbers = document.querySelectorAll('.step-number');
    const steps = document.querySelectorAll('.step');

    stepNumbers.forEach((stepNum, index) => {
        stepNum.addEventListener('click', () => {
            steps[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        stepNum.style.cursor = 'pointer';
    });
});