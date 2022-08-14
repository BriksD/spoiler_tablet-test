'use strict';


const blockItem = document.querySelectorAll('.block__item');
const title = document.querySelectorAll('.block__title');
const text = document.querySelectorAll('.block__text');
const mainBlock = document.querySelector('.block');
for (let i = 0; i < blockItem.length; i++) {
	if (blockItem[i].classList.contains('active')) {
		text[i].style.maxHeight = text[i].scrollHeight + 'px';
	}
}

document.addEventListener('click', function (event) {
	if (event.target.closest('.block__title')) {
		const clickTitle = event.target.closest('.block__title');
		const clickText = clickTitle.nextElementSibling;
		const parentTitleBlock = clickTitle.parentElement;
		if (!parentTitleBlock.classList.contains('active')) {
			for (let i = 0; i < title.length; i++) {
				if (!mainBlock.classList.contains('one')) {
					title[i].parentElement.classList.remove('active');
					title[i].nextElementSibling.style.maxHeight = '';
				}
			}
			parentTitleBlock.classList.add('active');
			clickText.style.maxHeight = clickText.scrollHeight + 'px';
		} else {
			parentTitleBlock.classList.remove('active');
			clickText.style.maxHeight = '';
		}
	}
});

// console.dir(input);
// console.log(slider.getAttribute('value'));
// console.log(input.value);



// Слушаем mousemove/mouseup/input при клике на полоску
const inputItemClass = '.range';
const inputItem = document.querySelector(inputItemClass);
const sliderValue = document.getElementById('sliderValue');
sliderValue.innerHTML = inputItem.value;
document.addEventListener('mousemove', (event) => check());
document.addEventListener('mouseup', (event) => check());
document.addEventListener('input', (event) => check());
// Функция для отображения значения на полоске
function check() {
	if (event.target.closest(inputItemClass)) {
		sliderValue.innerHTML = inputItem.value;
	}
}
// Отключение ArrowUp и ArrowDown
document.addEventListener('keydown', (event) => {
	if (event.code === 'ArrowUp' || event.code === 'ArrowDown' && event.target.closest(inputItemClass)) {
		console.log(event.code);
		event.preventDefault();
	}
})