document.getElementById('goback').addEventListener('click', () => {
  window.location.href = 'popup.html';
});

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('input');
  const searchBtn = document.getElementById('searchBtn');
  const resultsDiv = document.getElementById('results');

  // Search functionality
  searchBtn.addEventListener('click', function () {
    const query = searchInput.value.toLowerCase();
    if (!query) return;

    storageService.saveLastSearch(query);
    const results = animeData.filter(anime =>
      anime.title.toLowerCase().includes(query) ||
      anime.synopsis.toLowerCase().includes(query) ||
      anime.genres.some(genre => genre.toLowerCase().includes(query))
    );
    displayResults(results);
  });

  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchBtn.click();
  });

  // Display results with favorites
  async function displayResults(animes) {
    resultsDiv.innerHTML = animes.length === 0 
      ? '<p style="text-align: center; color: #666; margin-top: 2rem;">No results found. Try a different search term.</p>'
      : '';

    const cards = await Promise.all(animes.map(async anime => {
      const isFavorited = await storageService.isInFavorites(anime.id);
      const card = document.createElement('div');
      card.className = 'anime-card';
      card.setAttribute('data-anime-id', anime.id);

      card.innerHTML = `
        <div class="anime-content">
          <div class="anime-header">
            <h3 class="anime-title">${anime.title} (${anime.year})</h3>
            <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                    data-id="${anime.id}" 
                    title="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}">
              ${isFavorited ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}
            </button>
          </div>
          <div class="anime-meta">
            <span class="anime-meta-item">⭐ ${anime.rating}/10</span>
            <span class="anime-meta-item">${anime.anime_type}</span>
            <span class="anime-meta-item">${anime.episodes} eps</span>
          </div>
          <div class="anime-genres">
            ${anime.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
          </div>
          <p class="anime-synopsis">${anime.synopsis}</p>
          <div class="anime-platforms">
            <p style="display:inline-flex; margin: 2px 0;"><strong>Watch here: </strong></p>
            ${Object.entries(anime.available_on).map(([platform, url]) => `
              <a href="${url}" target="_blank" rel="noopener noreferrer">${platform}</a>
            `).join(', ')}
          </div>
        </div>
        <img class="anime-poster" src="${anime.poster}" alt="${anime.title} poster" loading="lazy">
      `;
      return card;
    }));

    resultsDiv.append(...cards);
  }

  // Handle favorite button clicks
  resultsDiv.addEventListener('click', async (e) => {
    const favoriteBtn = e.target.closest('.favorite-btn');
    if (!favoriteBtn) return;

    const animeId = favoriteBtn.getAttribute('data-id');
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;

    try {
      favoriteBtn.disabled = true;
      favoriteBtn.style.opacity = '0.6';

      if (favoriteBtn.classList.contains('favorited')) {
        await storageService.removeFromFavorites(animeId);
        favoriteBtn.classList.remove('favorited');
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
        favoriteBtn.title = 'Add to favorites';
        showNotification('Removed from favorites!', 'success');
      } else {
        await storageService.addToFavorites(anime);
        favoriteBtn.classList.add('favorited');
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
        favoriteBtn.title = 'Remove from favorites';
        showNotification('Added to favorites!', 'success');
      }
    } catch (error) {
      console.error('Error handling favorite:', error);
      showNotification('Error updating favorites!', 'error');
    } finally {
      favoriteBtn.disabled = false;
      favoriteBtn.style.opacity = '1';
    }
  });

  function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span class="notification-icon">
        ${type === 'success' ? '<i class="fas fa-check"></i>' : 
         type === 'error' ? '<i class="fas fa-times"></i>' : 
         '<i class="fas fa-info-circle"></i>'}
      </span>
      <span class="notification-message">${message}</span>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      padding: 12px 16px;
      border-radius: 8px;
      color: white;
      font-size: 14px;
      z-index: 1000;
      animation: slideIn 0.3s ease;
      max-width: 250px;
      word-wrap: break-word;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      background-color: ${type === 'success' ? '#4CAF50' : 
                       type === 'error' ? '#f44336' : '#2196F3'};
    `;

    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
});