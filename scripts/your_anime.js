// your_anime.js - Complete fixed version with working favorites functionality

document.addEventListener('DOMContentLoaded', async function() {
  // DOM elements
  const goBackBtn = document.getElementById('goback');
  const totalCountEl = document.getElementById('totalCount');
  const avgRatingEl = document.getElementById('avgRating');
  const totalEpisodesEl = document.getElementById('totalEpisodes');
  const searchInput = document.getElementById('searchFavorites');
  const sortSelect = document.getElementById('sortBy');
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const importFile = document.getElementById('importFile');
  const loadingMessage = document.getElementById('loadingMessage');
  const emptyState = document.getElementById('emptyState');
  const favoritesContainer = document.getElementById('favorites');

  // State
  let allFavorites = [];
  let filteredFavorites = [];

  // Initialize storage service
  const storageService = new StorageService();

  // Event listeners
  goBackBtn.addEventListener('click', () => {
    window.location.href = 'popup.html';
  });

  searchInput.addEventListener('input', debounce(handleSearch, 300));
  sortSelect.addEventListener('change', handleSort);
  exportBtn.addEventListener('click', handleExport);
  importBtn.addEventListener('click', () => importFile.click());
  importFile.addEventListener('change', handleImport);
  clearAllBtn.addEventListener('click', handleClearAll);

  // Initialize page
  await loadFavorites();

  // Load and display favorites
  async function loadFavorites() {
    try {
      showLoading(true);
      allFavorites = await storageService.getFavorites();
      filteredFavorites = [...allFavorites];
      
      if (allFavorites.length === 0) {
        showEmptyState();
      } else {
        showFavorites();
        updateStats();
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
      showNotification('Error loading favorites!', 'error');
    } finally {
      showLoading(false);
    }
  }

  function showLoading(show) {
    loadingMessage.style.display = show ? 'block' : 'none';
    favoritesContainer.style.display = show ? 'none' : 'block';
  }

  // Show empty state
  function showEmptyState() {
    emptyState.style.display = 'block';
    favoritesContainer.style.display = 'none';
    updateStats(true);
  }

  // Show favorites
  function showFavorites() {
    emptyState.style.display = 'none';
    favoritesContainer.style.display = 'block';
    renderFavorites();
  }

  // Update statistics
  function updateStats(isEmpty = false) {
    if (isEmpty) {
      totalCountEl.textContent = '0';
      avgRatingEl.textContent = '0.0';
      totalEpisodesEl.textContent = '0';
      return;
    }

    const totalCount = allFavorites.length;
    const avgRating = totalCount > 0 
      ? (allFavorites.reduce((sum, anime) => sum + parseFloat(anime.rating || 0), 0) / totalCount).toFixed(1)
      : '0.0';
    const totalEpisodes = allFavorites.reduce((sum, anime) => sum + parseInt(anime.episodes || 0), 0);

    totalCountEl.textContent = totalCount.toString();
    avgRatingEl.textContent = avgRating;
    totalEpisodesEl.textContent = totalEpisodes.toString();
  }

  // Render favorites
  function renderFavorites() {
    favoritesContainer.innerHTML = '';

    if (filteredFavorites.length === 0) {
      favoritesContainer.innerHTML = `
        <div style="text-align: center; color: #666; padding: 20px;">
          No favorites match your search criteria.
        </div>
      `;
      return;
    }

    filteredFavorites.forEach((anime, index) => {
      const card = createFavoriteCard(anime, index);
      favoritesContainer.appendChild(card);
    });

    // Add event listeners to all remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const animeId = btn.getAttribute('data-id');
        const animeTitle = allFavorites.find(a => a.id === animeId)?.title;
        if (animeTitle) await handleRemove(animeId, animeTitle);
      });
    });
  }

  // Create favorite card
  function createFavoriteCard(anime, index) {
    const card = document.createElement('div');
    card.className = 'favorite-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const addedDate = new Date(anime.addedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    card.innerHTML = `
      <img class="favorite-poster" src="${anime.poster}" alt="${anime.title} poster" loading="lazy">
      
      <div class="favorite-content">
        <div class="favorite-header">
          <h3 class="favorite-title">${anime.title} (${anime.year})</h3>
          <button class="remove-btn" data-id="${anime.id}" title="Remove from favorites">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        
        <div class="favorite-meta">
          <span class="meta-item">⭐ ${anime.rating}/10</span>
          <span class="meta-item">${anime.anime_type}</span>
          <span class="meta-item">${anime.episodes} eps</span>
        </div>
        
        <div class="favorite-genres">
          ${anime.genres.slice(0, 3).map(genre => 
            `<span class="genre-tag">${genre}</span>`
          ).join('')}
          ${anime.genres.length > 3 ? `<span class="genre-tag">+${anime.genres.length - 3}</span>` : ''}
        </div>
        
        <p class="favorite-synopsis">${anime.synopsis}</p>
        
        <div class="favorite-platforms">
          <strong>Watch:</strong>
          ${Object.entries(anime.available_on).slice(0, 2).map(([platform, url]) => 
            `<a href="${url}" target="_blank" rel="noopener noreferrer">${platform}</a>`
          ).join('')}
        </div>
        
        <div class="added-date">Added on ${addedDate}</div>
      </div>
    `;

    return card;
  }

  // Handle search
  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
      filteredFavorites = [...allFavorites];
    } else {
      filteredFavorites = allFavorites.filter(anime =>
        anime.title.toLowerCase().includes(query) ||
        anime.synopsis.toLowerCase().includes(query) ||
        anime.genres.some(genre => genre.toLowerCase().includes(query))
      );
    }
    
    renderFavorites();
  }

  // Handle sort
  function handleSort() {
    const sortBy = sortSelect.value;
    
    filteredFavorites.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating);
        case 'year':
          return parseInt(b.year) - parseInt(a.year);
        case 'episodes':
          return parseInt(b.episodes) - parseInt(a.episodes);
        case 'addedAt':
        default:
          return new Date(b.addedAt) - new Date(a.addedAt);
      }
    });
    
    renderFavorites();
  }

  // Handle remove from favorites
  async function handleRemove(animeId, animeTitle) {
    if (!confirm(`Remove "${animeTitle}" from favorites?`)) {
      return;
    }

    try {
      const success = await storageService.removeFromFavorites(animeId);
      if (success) {
        // Update local arrays
        allFavorites = allFavorites.filter(anime => anime.id !== animeId);
        filteredFavorites = filteredFavorites.filter(anime => anime.id !== animeId);
        
        if (allFavorites.length === 0) {
          showEmptyState();
        } else {
          renderFavorites();
          updateStats();
        }
        
        showNotification('Removed from favorites!', 'success');
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
      showNotification('Error removing from favorites!', 'error');
    }
  }

  // Handle export
  async function handleExport() {
    try {
      const exportData = await storageService.exportFavorites();
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `anime-favorites-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showNotification('Favorites exported successfully!', 'success');
    } catch (error) {
      console.error('Error exporting favorites:', error);
      showNotification('Error exporting favorites!', 'error');
    }
  }

  // Handle import
  async function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      const success = await storageService.importFavorites(data);
      if (success) {
        await loadFavorites();
        showNotification('Favorites imported successfully!', 'success');
      }
    } catch (error) {
      console.error('Error importing favorites:', error);
      showNotification('Error importing favorites! Invalid file format.', 'error');
    } finally {
      importFile.value = ''; // Reset file input
    }
  }

  // Handle clear all
  async function handleClearAll() {
    if (allFavorites.length === 0) {
      showNotification('No favorites to clear!', 'info');
      return;
    }

    const confirmed = confirm(
      `Are you sure you want to remove all ${allFavorites.length} favorites? This action cannot be undone.`
    );
    
    if (!confirmed) return;

    try {
      const success = await storageService.clearAllFavorites();
      if (success) {
        allFavorites = [];
        filteredFavorites = [];
        showEmptyState();
        showNotification('All favorites cleared!', 'success');
      }
    } catch (error) {
      console.error('Error clearing favorites:', error);
      showNotification('Error clearing favorites!', 'error');
    }
  }

  // Show notification function
  function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const icon = {
      success: '<i class="fas fa-check"></i>',
      error: '<i class="fas fa-times"></i>',
      info: '<i class="fas fa-info-circle"></i>'
    }[type] || '';

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span class="notification-icon">${icon}</span>
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

    // Auto remove after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }
    }, 3000);
  }
});

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}