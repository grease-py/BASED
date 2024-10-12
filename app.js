document.getElementById('close-landing-button').addEventListener('click', function () {
    // Hide the landing page
    document.getElementById('landing-page').style.display = 'none';

    // Show the main page
    document.getElementById('main-page').classList.remove('hidden');

    // Play the background music
    var music = document.getElementById('background-music');
    music.play().catch(error => console.log(error)); // Catch any autoplay restriction errors
});

document.getElementById('copy-ca-button').addEventListener('click', function () {
    const contractAddress = 'Em4rcuhX6STfB7mxb66dUXDmZPYCjDiQFthvzSzpump';
    navigator.clipboard.writeText(contractAddress).catch(err => console.error('Failed to copy contract address: ', err));
});
