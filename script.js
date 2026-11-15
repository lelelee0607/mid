function randomMovie() {
    const movies = [
        "Mission Impossible",
        "Matrix",
        "John Wick",
        "Inception",
        "Titanic",
        "La La Land",
        "The Notebook",
        "About Time",
        "The Devil Wears Prada",
        "3 Idiots",
        "Extreme Job",
        "The Truman Show"
    ];

    const number = Math.floor(Math.random() * movies.length);
    document.getElementById("random-result").textContent =
        "Today's recommendation: " + movies[number];
}

function filterMovies(category) {
    const cards = document.querySelectorAll(".movie-card");

    for (let i = 0; i < cards.length; i++) {
        if (category === "all" || cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
