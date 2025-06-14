document.getElementById('goback').addEventListener('click', () => {
    window.location.href = 'popup.html';
});

// document.addEventListener('DOMContentLoaded', function () {
//   const recommendBtn = document.getElementById('recommendBtn');

//   recommendBtn.addEventListener('click', function () {
//     const genre = document.getElementById('genreSelect').value;
//     const minRating = parseFloat(document.getElementById('minRating').value) || 0;
//     const maxEpisodes = parseInt(document.getElementById('maxEpisodes').value) || Infinity;
//     const animeType = document.getElementById('animeType').value;
//     const sortBy = document.getElementById('sortBy').value;

//     const filteredAnimes = filterAnimes(genre, minRating, maxEpisodes, animeType);

//     // Store results in localStorage and redirect
//     localStorage.setItem('filteredAnimes', JSON.stringify(filteredAnimes));
//     localStorage.setItem('sortBy', sortBy);
//     window.location.href = 'recommended_animes.html';
//   });

// });
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the recommendation page
    const recommendBtn = document.getElementById('recommendBtn');

    // Only add event listeners if elements exist
    if (recommendBtn) {
        recommendBtn.addEventListener('click', function () {
            const genre = document.getElementById('genreSelect').value;
            const minRating = parseFloat(document.getElementById('minRating').value) || 0;
            const maxEpisodes = parseInt(document.getElementById('maxEpisodes').value) || Infinity;
            const animeType = document.getElementById('animeType').value;
            const sortBy = document.getElementById('sortBy').value;

            const filteredAnimes = filterAnimes(genre, minRating, maxEpisodes, animeType);

            // Store results in localStorage and redirect
            localStorage.setItem('filteredAnimes', JSON.stringify(filteredAnimes));
            localStorage.setItem('sortBy', sortBy);
            window.location.href = 'recommended_animes.html';
        });
    }


    // Check if we're on the results page
    const resultsContainer = document.getElementById('results');
    if (resultsContainer && !recommendBtn) {
        // Display results when page loads
        const filteredAnimes = JSON.parse(localStorage.getItem('filteredAnimes'));
        const sortBy = localStorage.getItem('sortBy');

        if (filteredAnimes && filteredAnimes.length > 0) {
            displayResults(filteredAnimes, sortBy);
        } else {
            resultsContainer.innerHTML = '<p>No animes match your criteria.</p>';
        }
    }
});


function filterAnimes(genre, minRating, maxEpisodes, animeType) {
    // First filter by genre if specified
    let filtered = genre ?
        animeData.filter(anime => anime.genres.includes(genre)) :
        [...animeData];

    // Then filter by other criteria
    filtered = filtered.filter(anime => {
        const matchesRating = anime.rating >= minRating;
        const matchesEpisodes = anime.episodes <= maxEpisodes;
        const matchesType = !animeType || anime.anime_type === animeType;

        return matchesRating && matchesEpisodes && matchesType;
    });

    // If we have genre specified but no matches, fall back to non-genre matches
    if (genre && filtered.length === 0) {
        filtered = animeData.filter(anime => {
            const matchesRating = anime.rating >= minRating;
            const matchesEpisodes = anime.episodes <= maxEpisodes;
            const matchesType = !animeType || anime.anime_type === animeType;

            return matchesRating && matchesEpisodes && matchesType;
        });
    }

    return filtered;
}

function displayResults(animes, sortBy) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (animes.length === 0) {
        resultsContainer.innerHTML = '<p>No animes match your criteria.</p>';
        return;
    }

    // Sort the animes based on the selected option
    let sortedAnimes = [...animes];
    switch (sortBy) {
        case 'rating':
            sortedAnimes.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
            sortedAnimes.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'year':
            sortedAnimes.sort((a, b) => b.year - a.year);
            break;
        case 'episodes':
            sortedAnimes.sort((a, b) => a.episodes - b.episodes);
            break;
    }

    sortedAnimes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';

        animeCard.innerHTML = `
            <img src="${anime.poster}" alt="${anime.title}" class="anime-poster" height="350px">
            <div class="anime-content">
                <div class="anime-header">
                    <h3 class="anime-title">${anime.title}</h3>
                </div>
                <div class="anime-meta">
                    <span class="anime-meta-item">&starf; ${anime.rating}</span>
                    <span class="anime-meta-item"> ${anime.episodes} eps</span>
                    <span class="anime-meta-item"> ${anime.year}</span>
                </div>
                <div class="anime-genres">
                    ${anime.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                </div>
                <p class="anime-synopsis">${anime.synopsis}</p>
                <p style="display:inline-flex; margin: 2px 0;"><strong>Watch here: </strong></p>
                ${Object.entries(anime.available_on).map(([platform, url]) => `
                <a href="${url}" target="_blank">${platform}</a>
                 `).join(', ')}
            </div>
        `;

        resultsContainer.appendChild(animeCard);
    });
}
