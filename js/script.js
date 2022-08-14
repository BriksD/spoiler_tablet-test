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

// for (let key of title) {
// 	console.log(key);
// }
// console.log(title);
// // for (let key in title) {
// // 	console.log(parseInt(key));
// // 	console.log(typeof(parseInt(key)));
// // }
// for (let key in title) {
// 	let a = parseInt(key);
// 	// console.log(a);
// 	if (!isNaN(a)) {
// 		console.log(`${a} не NaN`);
// 		console.log(title[a]);
// 	}
// }