document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container1');
    const overlay = document.querySelector('.overlay');

    containers.forEach(container1 => {
        const fullscreenButton = container1.querySelector('.full');

        fullscreenButton.addEventListener('click', () => {
            container1.classList.toggle('fullscreen');
            overlay.classList.toggle('show');

            // Изменяем иконку кнопки
            const icon = fullscreenButton.querySelector('i');
            icon.classList.toggle('bi-arrows-fullscreen');
            icon.classList.toggle('bi-arrows-angle-contract');

            // Увеличиваем размер текста в полноэкранном режиме
            container1.querySelectorAll('p, h4').forEach(element => {
                element.style.fontSize = container1.classList.contains('fullscreen') ? '20px' : '';
            });
        });
    });
});
