// Grab the switch
let themeSwitch = document.querySelector('.switch input[type="checkbox"]');

// Check for existing local storage item for dark theme
const currentTheme = localStorage.getItem('theme');

// If it exists, apply the theme to the body
if (currentTheme) {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

// Event listener for the switch
themeSwitch.addEventListener('change', function() {
    // If checked, apply the dark theme, otherwise remove it
    if(this.checked) {
        transition();
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        transition();
        document.body.classList.remove('dark-theme');
        localStorage.removeItem('theme');
    } 
});

// Transition function to smoothen the switch
let transition = () => {
    document.body.classList.add('transition');
    window.setTimeout(() => {
        document.body.classList.remove('transition')
    }, 1000)
}
