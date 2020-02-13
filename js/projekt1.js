// Kliknięcie w przycisk JQ
// $('.article button').on('click', function () {
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
// })
// $('.hide').on('click', function () {
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
// })

// Krótsza wersja JQ
// $('.article button, span.hide').on('click', function () {
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

// WERSJA JS 
document.querySelector('.article button').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
});
document.querySelector('span.hide').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');
});