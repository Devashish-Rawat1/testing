document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const recommendBtn = document.getElementById('recommendBtn');
  const resultsDiv = document.getElementById('results');
  const genreSelect = document.getElementById('genreSelect');
  const typeSelect = document.getElementById('typeSelect');
  const minRating = document.getElementById('minRating');

  // Search functionality
  searchBtn.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    if (!query) return;
    
    const results = animeData.filter(anime => 
      anime.title.toLowerCase().includes(query) || 
      anime.synopsis.toLowerCase().includes(query)
    );
    
    displayResults(results);
  });

  // Recommendation functionality
  recommendBtn.addEventListener('click', function() {
    const genre = genreSelect.value;
    const type = typeSelect.value;
    const rating = parseFloat(minRating.value) || 0;
    
    let recommendations = animeData.filter(anime => {
      // Filter by rating
      if (anime.rating < rating) return false;
      
      // Filter by type if specified
      if (type && anime.anime_type !== type) return false;
      
      // Filter by genre if specified
      if (genre && !anime.genres.includes(genre)) return false;
      
      return true;
    });
    
    // Sort by rating (highest first)
    recommendations.sort((a, b) => b.rating - a.rating);
    
    displayResults(recommendations);
  });

  // Display results
  function displayResults(animes) {
    resultsDiv.innerHTML = '';
    
    if (animes.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
    }
    
    animes.forEach(anime => {
      const card = document.createElement('div');
      card.className = 'anime-card';
      
      card.innerHTML = `
        <h3>${anime.title} (${anime.year})</h3>
        <p><strong>Rating:</strong> ${anime.rating}/10</p>
        <p><strong>Type:</strong> ${anime.anime_type}</p>
        <p><strong>Genres:</strong> ${anime.genres.join(', ')}</p>
        <p><strong>Episodes:</strong> ${anime.episodes}</p>
        <p>${anime.synopsis}</p>
        <p><strong>Available on:</strong> ${anime.available_on.join(', ')}</p>
      `;
      
      resultsDiv.appendChild(card);
    });
  }
});