(function() {
    window.addEventListener('load', function() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.createElement('footer');
        footer.textContent = `Время загрузки страницы: ${loadTime} мс`;
        document.body.appendChild(footer);
    });

    
    const menuItems = document.querySelectorAll('nav a');
    const currentPage = document.location.pathname.split('/').pop();

    menuItems.forEach(item => {
        
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }

        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#333';
            item.style.color = '#fff';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';
            item.style.color = '';
        });
    });
})();