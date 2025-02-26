function switchMode(icon, monoIcons){
    document.body.classList.toggle("dark-mode");
    icon.classList.toggle("invert-icon");
    monoIcons.forEach(img => {
        img.classList.toggle("invert-icon");
    });

    // Save mode preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const colorScheme = document.getElementById('dark-mode-button');
    const icon = document.getElementById('icon-switcher');
    const monoIcons = document.querySelectorAll('.footer-box img');

    if(colorScheme && icon){
        if(localStorage.getItem("dark-mode") === "enabled"){
            switchMode(icon, monoIcons);
        }
        colorScheme.addEventListener('click', () => {
            switchMode(icon, monoIcons);
        });
    }
});