const body = document.body;
const rootStyles = document.documentElement.style;
const switchTheme = document.getElementById('switch-theme');
const switchThemeText = document.getElementById('switch-theme-text');
const switchThemeIcon = document.getElementById('switch-theme-icon');
const logo = document.getElementById('logo');

const changeColorElement = document.getElementById('change-color')

switchTheme.addEventListener('click', (event) => {
    if(body.classList.contains('dark')){
        console.log('DARK')
        switchThemeText.textContent = 'Light mode';
        logo.src = 'assets/images/logo-light.svg';
        switchThemeIcon.src = 'assets/images/icon-sun.svg'
    }else{
        console.log('LIGHT')
        switchThemeText.textContent = 'Dark mode';
        logo.src = 'assets/images/logo-dark.svg';
        switchThemeIcon.src = 'assets/images/icon-moon.svg'
        
    }
   
    body.classList.toggle('dark')
})

changeColorElement.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('color')){
        rootStyles.setProperty('--primary-color', event.target.dataset.color); 
    }
})



