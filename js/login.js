document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    let isFirstRequest = true;

    function getRandomEndpoint() {
        return isFirstRequest ? '?id_gte=100' : '?id_lte=200';
    }

    async function fetchData() {
        preloader.style.display = 'block';
        content.innerHTML = '';

        try {
            const endpoint = `https://jsonplaceholder.typicode.com/comments${getRandomEndpoint()}`;
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            renderData(data);
        } catch (error) {
            showError('ERROR');
            console.error(error);
        } finally {
            preloader.style.display = 'none';
        }
    }

    function renderData(data) {
        const list = document.createElement('ul');
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.email}`;
            list.appendChild(listItem);
        });
        content.appendChild(list);
    }

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        content.appendChild(errorDiv);
    }

    fetchData();
    isFirstRequest = !isFirstRequest;
});
