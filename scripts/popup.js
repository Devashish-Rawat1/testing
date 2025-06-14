document.addEventListener('DOMContentLoaded', async function() {
  const storageService = new StorageService();
  
  document.getElementById('searchBtn').addEventListener('click', () => {
    window.location.href = 'search.html';
  });

  document.getElementById('recommendBtn').addEventListener('click', () => {
    window.location.href = 'recommend.html';
  });

  async function updateFavoritesCount() {
    try {
      const count = await storageService.getFavoritesCount();
      const countElement = document.getElementById('favoritesCount');
      if (countElement) {
        countElement.textContent = count;
        countElement.classList.add('pulse');
        setTimeout(() => countElement.classList.remove('pulse'), 500);
      }
    } catch (error) {
      console.error('Error updating favorites count:', error);
    }
  }

  await updateFavoritesCount();

  document.getElementById('favoritesBtn').addEventListener('click', () => {
    window.location.href = 'your_anime.html';
  });

  storageService.onStorageChanged((change) => {
    if (change.type === 'favorites') {
      updateFavoritesCount();
    }
  });
});