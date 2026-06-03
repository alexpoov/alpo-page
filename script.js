// localStorage / sessionStorage ? how to implement colorScheme

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {

    const currentTheme = document.querySelector(":root").style.getPropertyValue("--bg-color")

    if (currentTheme === "#fff") {
        document.querySelector(":root").style.setProperty("--bg-color", "#141414")
        document.querySelector(":root").style.setProperty("--txt-color", "#ddd")
    } else {
        document.querySelector(":root").style.setProperty("--bg-color", "#fff")
        document.querySelector(":root").style.setProperty("--txt-color", "#000")
    }
    
});