'use strict';


// Получаем в переменную коллекцию элементов '.block__item'
const blockItem = document.querySelectorAll('.block__item');
// Получаем в переменную коллекцию элементов '.block__title'
const title = document.querySelectorAll('.block__title');
// Получаем в переменную коллекцию элементов '.block__text'
const text = document.querySelectorAll('.block__text');

// Проверяем, если ли у элемента с классом ".block__item" класс ".active"
// Если есть, тогда присваиваем элементу с классом ".block__text",
// который находится внутри элемента с классом ".block__item"
// стиль "max-height" равный высоте этого элемента, учитывая прокрутку
for (let i = 0; i < blockItem.length; i++) {
	if (blockItem[i].classList.contains('active')) {
		text[i].style.maxHeight = text[i].scrollHeight + 'px';
	}
}

// Вешаем прослушку по клику на документ
document.addEventListener('click', function (event) {
// Проверяем что клик был по элементу с классом ".block__title"
	if (event.target.closest('.block__title')) {
// Присваиваем переменной элемент с классом ".block__title" по которому кликнули
const clickTitle = event.target.closest('.block__title');
// Присваиваем переменной элемент с классом ".block__text"
// который находится после элемента по которому кликнули
const clickText = clickTitle.nextElementSibling;
// Присваиваем переменной элемент с классом ".block__item"
// Это родительский элемент, относительно элемента по которому кликнули
		const parentTitleBlock = clickTitle.parentElement;
// Если у родительского элемента нет класса "active", тогда выполняется код ниже
		if (!parentTitleBlock.classList.contains('active')) {
// Запускаем цикл равный длинне коллекции (любой)
			for (let i = 0; i < title.length; i++) {
// Удаляем класс "active" у всех элементов с классом ".block__item"
				title[i].parentElement.classList.remove('active');
// Удаляем свойство стиля "max-height" у всех элементов с классом ".block__text"
				title[i].nextElementSibling.style.maxHeight = '';
			}
// Присваиваем родительскому элементу класс "active"
			parentTitleBlock.classList.add('active');
// Устанавливаем элементу с классом ".block__text" стиль "max-height"
// равный высоте элемента с классом ".block__text" с учетом прокрутки
			clickText.style.maxHeight = clickText.scrollHeight + 'px';
		} else {
// Если у родительского элемента был класс "active", тогда удаляем его
// и удаляем у элемента с классом ".block__text" стиль "max-height"
			parentTitleBlock.classList.remove('active');
			clickText.style.maxHeight = '';
		}
	}
});