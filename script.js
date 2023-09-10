'use strict'
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
    // console.log(btnsShowModal[i].textContent);
    btnsShowModal[i].addEventListener('click', function () {
        console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});