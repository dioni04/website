document.addEventListener('DOMContentLoaded', () => {
    // Select all accordion buttons
    const accordionHearders = document.querySelectorAll('.accordion-header');
    accordionHearders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the 'active' class on the accordion container
            const accordion = header.parentElement;
            accordion.classList.toggle('active');

            // Get the content panel following the button
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