let currentFrame = 0;
const totalFrames = 24; // assuming 360°/15° = 24 frames
let isAutoRotating = false;
let autoRotateInterval;

const disk = document.getElementById('rotating-disk');
const grass1 = document.getElementById('grass-1');

// Funktion, um das Bild zu aktualisieren
function updateDisk() {
    disk.src = `images/disk-${currentFrame * 15}.png`;
    grass1.backgroundPosition = currentFrame * 100;
}

// Funktion für manuelles Drehen nach links
document.getElementById('rotate-left').addEventListener('click', () => {
    currentFrame = (currentFrame === 0) ? totalFrames - 1 : currentFrame - 1;
    updateDisk();
});

// Funktion für manuelles Drehen nach rechts
document.getElementById('rotate-right').addEventListener('click', () => {
    currentFrame = (currentFrame + 1) % totalFrames;
    updateDisk();
});

// Funktion für automatisches Drehen
document.getElementById('auto-rotate').addEventListener('click', () => {
    if (isAutoRotating) {
        clearInterval(autoRotateInterval);
        isAutoRotating = false;
        document.getElementById('auto-rotate').textContent = 'Automatisches Drehen (A)';
    } else {
        autoRotateInterval = setInterval(() => {
            currentFrame = (currentFrame + 1) % totalFrames;
            updateDisk();
        }, 100);
        isAutoRotating = true;
        document.getElementById('auto-rotate').textContent = 'Automatisches Drehen stoppen';
    }
});

// Optionale Tastatursteuerung
document.addEventListener('keydown', (event) => {
    if (event.key === 'l') {
        currentFrame = (currentFrame === 0) ? totalFrames - 1 : currentFrame - 1;
        updateDisk();
    } else if (event.key === 'r') {
        currentFrame = (currentFrame + 1) % totalFrames;
        updateDisk();
    } else if (event.key === 'a') {
        document.getElementById('auto-rotate').click();
    }
});
