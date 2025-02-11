document.addEventListener('DOMContentLoaded', () => {
    const colorScheme = document.getElementById('dark-mode-button');
    const icon = document.getElementById('icon-switcher');
    if(colorScheme && icon){
        colorScheme.addEventListener('click', () => {
            document.body.classList.toggle("dark-mode");
            icon.classList.toggle("invert-icon");
        });
    }
});