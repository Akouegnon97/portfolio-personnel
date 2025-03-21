document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.classList.contains('about') ? 'about' :
                document.body.classList.contains('skills') ? 'skills' : 'home';

    if (page === 'about') {
        console.log("Page À propos");
        // Comportement spécifique à la page À propos
    } else if (page === 'skills') {
        console.log("Page Compétences");
        // Comportement spécifique à la page Compétences
    } else {
        console.log("Page d'accueil");
        // Comportement spécifique à la page d'accueil
    }
});
