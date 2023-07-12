/*const lista = document.getElementsByTagName('li');

for (let i = 0; i <lista.length; i += 1 ){
    lista[i].style.color = 'green';
}*/

const input = document.querySelector('input');
const pixel = document.querySelector('p.pixel');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    pixel.textContent = input.value + ':';
});