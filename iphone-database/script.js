const iphoneData = [
    {
        model: 'iPhone 15 Pro Max',
        image: 'https://example.com/iphone15promax.jpg',
        releaseDate: 'September 2023',
        display: '6.7-inch Super Retina XDR',
        camera: 'Triple 48MP + 12MP + 12MP cameras',
        chip: 'A17 Bionic',
        battery: 'Up to 29 hours video playback'
    },
    {
        model: 'iPhone 15',
        image: 'https://example.com/iphone15.jpg',
        releaseDate: 'September 2023',
        display: '6.1-inch Super Retina XDR',
        camera: 'Dual 48MP + 12MP cameras',
        chip: 'A17 Bionic',
        battery: 'Up to 20 hours video playback'
    },
    {
        model: 'iPhone 14 Pro Max',
        image: 'https://example.com/iphone14promax.jpg',
        releaseDate: 'September 2022',
        display: '6.7-inch Super Retina XDR',
        camera: 'Triple 48MP + 12MP + 12MP cameras with LiDAR',
        chip: 'A16 Bionic',
        battery: 'Up to 28 hours video playback'
    },
    {
        model: 'iPhone 14',
        image: 'https://example.com/iphone14.jpg',
        releaseDate: 'September 2022',
        display: '6.1-inch Super Retina XDR',
        camera: 'Dual 12MP cameras',
        chip: 'A15 Bionic',
        battery: 'Up to 20 hours video playback'
    },
    {
        model: 'iPhone 13 Pro Max',
        image: 'https://example.com/iphone13promax.jpg',
        releaseDate: 'September 2021',
        display: '6.7-inch Super Retina XDR',
        camera: 'Triple 12MP cameras with LiDAR',
        chip: 'A15 Bionic',
        battery: 'Up to 28 hours video playback'
    },
    {
        model: 'iPhone 13',
        image: 'https://example.com/iphone13.jpg',
        releaseDate: 'September 2021',
        display: '6.1-inch Super Retina XDR',
        camera: 'Dual 12MP cameras',
        chip: 'A15 Bionic',
        battery: 'Up to 17 hours video playback'
    },
    {
        model: 'iPhone 12 Pro Max',
        image: 'https://example.com/iphone12promax.jpg',
        releaseDate: 'October 2020',
        display: '6.7-inch Super Retina XDR',
        camera: 'Triple 12MP cameras with LiDAR',
        chip: 'A14 Bionic',
        battery: 'Up to 20 hours video playback'
    },
    {
        model: 'iPhone 12',
        image: 'https://example.com/iphone12.jpg',
        releaseDate: 'October 2020',
        display: '6.1-inch Super Retina XDR',
        camera: 'Dual 12MP cameras',
        chip: 'A14 Bionic',
        battery: 'Up to 17 hours video playback'
    }
];

const iphoneList = document.getElementById('iphoneList');

iphoneData.forEach(iphone => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${iphone.image}" alt="${iphone.model}">
        <div class="card-content">
            <h2>${iphone.model}</h2>
            <p><strong>Release Date:</strong> ${iphone.releaseDate}</p>
            <p><strong>Display:</strong> ${iphone.display}</p>
            <p><strong>Camera:</strong> ${iphone.camera}</p>
            <p><strong>Chip:</strong> ${iphone.chip}</p>
            <p><strong>Battery:</strong> ${iphone.battery}</p>
            <div class="details">
                <!-- Optional additional details can go here -->
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('show');
    });

    iphoneList.appendChild(card);
});
