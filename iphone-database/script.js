const iphoneData = [
    {
        model: 'iPhone 15 Pro Max',
        image: 'https://cdn.discordapp.com/attachments/1276995131748388974/1297248517693378672/fqs_2024-10-19_191721.534.jpg?ex=67153c54&is=6713ead4&hm=92cce47c737411933b63b29099e9d7580e936c659e83f3537d2360ab76b6fbd4&/',
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
// Registrierung
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Speichern im Local Storage
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registrierung erfolgreich! Du kannst dich jetzt anmelden.');
        showLogin();
    } else {
        alert('Bitte alle Felder ausfüllen.');
    }
});

// Anmeldung
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Überprüfen der gespeicherten Daten
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Anmeldung erfolgreich!');
        showWelcome(username);
    } else {
        alert('Falscher Benutzername oder Passwort.');
    }
});

// Anzeigefunktionen
function showLogin() {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function showWelcome(username) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = 'block';
    document.getElementById('user-name').textContent = username;
}

function logout() {
    document.getElementById('welcome-section').style.display = 'none';
    showLogin();
}
