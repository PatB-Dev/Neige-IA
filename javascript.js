// Créez une fonction pour générer un flocon de neige
function createSnowflake() {
    // Créez un nouvel élément div et lui donnez la classe "snowflake"
    var snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Générez un nombre aléatoire entre 1 et 3 pour déterminer la taille du flocon de neige
    var size = Math.floor(Math.random() * 3) + 1;
    if (size === 1) {
        snowflake.classList.add("small");
    } else if (size === 2) {
        snowflake.classList.add("medium");
    } else {
        snowflake.classList.add("large");
    }

    // Générez des coordonnées aléatoires pour la position de départ du flocon de neige
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * -window.innerHeight);
    snowflake.style.left = x + "px";
    snowflake.style.top = y + "px";

    // Ajoutez le flocon de neige à la page
    document.body.appendChild(snowflake);

    // Créez une animation pour faire tomber le flocon de neige de manière réaliste
    var duration = Math.floor(Math.random() * 10000) + 5000;
    var start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var y = progress / duration * window.innerHeight;
        snowflake.style.top = y + "px";
        if (y > window.innerHeight) {
            // Si le flocon de neige est tombé en bas de l'écran, le supprimer et en créer un nouveau
            snowflake.remove();
            createSnowflake();
        } else if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

// Créez une boucle pour générer des flocons de neige de manière répétée
setInterval(function () {
    createSnowflake();
}, 500);

