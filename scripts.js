function showInfo(region, coordinates) {
    const infoDiv = document.getElementById('info');
    const marker = document.getElementById('marker');
    const mapContainer = document.getElementById('map-container');
    const mapImage = document.getElementById('mapImage');
    const rect = mapImage.getBoundingClientRect();
    let infoText = '';

    switch(region) {
        case 'Азия':
            infoText = 'Азия - самый большой континент в мире. Здесь разнообразные культуры, языки и география.';
            break;
        case 'Европа':
            infoText = 'Европа известна своей богатой историей и культурным наследием. Здесь много известных достопримечательностей и городов.';
            break;
        case 'Северная Америка':
            infoText = 'Северная Америка включает США, Канаду и Мексику. Здесь широкий диапазон климатов и ландшафтов.';
            break;
        case 'Южная Америка':
            infoText = 'Южная Америка известна амазонскими лесами и Андами. Здесь яркая культура и история.';
            break;
        case 'Африка':
            infoText = 'Африка - второй по величине континент. Она известна своим разнообразным животным миром и природными ресурсами.';
            break;
        case 'Австралия':
            infoText = 'Австралия - это одновременно страна и континент. Она известна уникальной дикой природой и красивыми пейзажами.';
            break;
        case 'Антарктида':
            infoText = 'Антарктида - самый южный континент. Она известна своими ледяными пейзажами и почти необитаема.';
            break;
    }

    infoDiv.innerHTML = `<h2>${region}</h2><p>${infoText}</p>`;
    infoDiv.classList.add('show');

    // Показать маркер на карте
    const markerLeft = (coordinates.x / 1024) * rect.width;
    const markerTop = (coordinates.y / 768) * rect.height;
    marker.style.left = `${markerLeft}px`;
    marker.style.top = `${markerTop}px`;
    marker.style.display = 'block';
}

// Скрыть информацию при клике на карту
document.getElementById('mapImage').addEventListener('click', () => {
    document.getElementById('info').classList.remove('show');
    document.getElementById('marker').style.display = 'none';
});
