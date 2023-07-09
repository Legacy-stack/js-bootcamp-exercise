
const MY_TITLE = document.getElementsByTagName("h1")[0];
const MY_BUTTON = document.getElementById('mybutton');
const MY_INPUT = document.getElementById('myInput');

const MY_P = document.getElementsByTagName('p');

MY_BUTTON.addEventListener('click', () => {
    MY_TITLE.style.color = MY_INPUT.value;
});

