function theme() {
    const checkbox = document.getElementById("checkbox");
    let container = document.getElementsByClassName('container');

    if (checkbox.checked) {
        container[0].classList.add('container_theme_dark')
    } else {
        container[0].classList.remove('container_theme_dark')
    }
}