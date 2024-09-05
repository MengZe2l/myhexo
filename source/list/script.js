document.addEventListener("DOMContentLoaded", function() {
    const urlList = document.getElementById('urlList');
    const searchInput = document.getElementById('searchInput');
    let urls = [];

    fetch('urls.json')
        .then(response => response.json())
        .then(data => {
            urls = data.urls;
            displayUrls(urls);
            console.log(data)
        })
        .catch(error => console.error('Error loading the URL list:', error));

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredUrls = urls.filter(url => url.name.toLowerCase().includes(searchTerm));
        displayUrls(filteredUrls);
    });

    function displayUrls(urls) {
        urlList.innerHTML = ''; // 清空现有列表
        urls.forEach(url => {
            const a = document.createElement('a');
            a.style.backdropFilter = 'blur(1px)';
            a.href = url.link;
            a.className = 'url-item';
            a.target = '_blank';
            a.textContent = url.name;
            a.style.background = 'rgba(255, 255, 255, 0.2)';
            a.style.padding = '15px';
            a.style.borderRadius = '5px';
            a.style.textDecoration = 'none';
            a.style.color = '#fff';
            a.style.transition = 'background 0.3s';
            a.onmouseover = () => a.style.background = 'rgba(255, 255, 255, 0.3)';
            a.onmouseout = () => a.style.background = 'rgba(255, 255, 255, 0.4)';
            urlList.appendChild(a);
        });
    }
});
