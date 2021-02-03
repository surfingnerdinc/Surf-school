// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

overlay = document.getElementById('overlay')
closemenu = document.getElementById('close-menu')

document.getElementById('open-menu').addEventListener('click', function () {
    overlay.classList.add('show-menu');
    overlay.classList.remove('hide-menu');
});

document.getElementById('close-menu').addEventListener('click', function () {
    overlay.classList.remove('show-menu');
    overlay.classList.add('hide-menu');
});