document.addEventListener('DOMContentLoaded', () => {
    const accordionHearders = document.querySelectorAll('.accordion-header');
    accordionHearders.forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            accordion.classList.toggle('active');

            const content = button.nextElementSibling;

            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "15px";
            } else {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            }
        });
    });
});