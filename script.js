
const accordionButtons = document.querySelectorAll('.accordion-button'); 
const accordionContent = document.querySelectorAll('.accordion-content'); 

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        accordionContent.classList.toggle('show');
        button.classList.toggle('active');

        accordionButtons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.nextElementSibling.classList.remove('show');
                otherButton.classList.remove('active');
            }
        });
    });
});