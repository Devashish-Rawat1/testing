// storageService.js - Production-ready storage service for web extension

class StorageService {
  constructor() {
    this.STORAGE_KEYS = {
      FAVORITES: 'anime_favorites',
      USER_PREFERENCES: 'user_preferences',
      LAST_SEARCH: 'last_search_query'
    };
  }

  /**
   * Add anime to favorites
   * @param {Object} anime - Anime object to add
   * @returns {Promise<boolean>} - Success status
   */
  async addToFavorites(anime) {
    try {
      const favorites = await this.getFavorites();
      
      // Check if anime already exists
      const exists = favorites.some(fav => fav.id === anime.id);
      if (exists) {
        console.log('Anime already in favorites');
        return false;
      }

      // Add timestamp and additional metadata
      const favoriteAnime = {
        ...anime,
        addedAt: new Date().toISOString(),
        addedTimestamp: Date.now()
      };

      favorites.push(favoriteAnime);
      
      await chrome.storage.sync.set({
        [this.STORAGE_KEYS.FAVORITES]: favorites
      });

      console.log('Anime added to favorites successfully');
      return true;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw new Error('Failed to add anime to favorites');
    }
  }

  /**
   * Remove anime from favorites
   * @param {string} animeId - ID of anime to remove
   * @returns {Promise<boolean>} - Success status
   */
  async removeFromFavorites(animeId) {
    try {
      const favorites = await this.getFavorites();
      const filteredFavorites = favorites.filter(anime => anime.id !== animeId);
      
      await chrome.storage.sync.set({
        [this.STORAGE_KEYS.FAVORITES]: filteredFavorites
      });

      console.log('Anime removed from favorites successfully');
      return true;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw new Error('Failed to remove anime from favorites');
    }
  }

  /**
   * Get all favorite animes
   * @returns {Promise<Array>} - Array of favorite animes
   */
  async getFavorites() {
    try {
      const result = await chrome.storage.sync.get([this.STORAGE_KEYS.FAVORITES]);
      return result[this.STORAGE_KEYS.FAVORITES] || [];
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  }

  /**
   * Check if anime is in favorites
   * @param {string} animeId - ID of anime to check
   * @returns {Promise<boolean>} - True if in favorites
   */
  async isInFavorites(animeId) {
    try {
      const favorites = await this.getFavorites();
      return favorites.some(anime => anime.id === animeId);
    } catch (error) {
      console.error('Error checking favorites:', error);
      return false;
    }
  }

  /**
   * Get favorites count
   * @returns {Promise<number>} - Number of favorites
   */
  async getFavoritesCount() {
    try {
      const favorites = await this.getFavorites();
      return favorites.length;
    } catch (error) {
      console.error('Error getting favorites count:', error);
      return 0;
    }
  }

  /**
   * Clear all favorites (with confirmation)
   * @returns {Promise<boolean>} - Success status
   */
  async clearAllFavorites() {
    try {
      await chrome.storage.sync.set({
        [this.STORAGE_KEYS.FAVORITES]: []
      });
      console.log('All favorites cleared successfully');
      return true;
    } catch (error) {
      console.error('Error clearing favorites:', error);
      throw new Error('Failed to clear favorites');
    }
  }

  /**
   * Export favorites data
   * @returns {Promise<Object>} - Exported data
   */
  async exportFavorites() {
    try {
      const favorites = await this.getFavorites();
      return {
        favorites,
        exportedAt: new Date().toISOString(),
        version: '1.0'
      };
    } catch (error) {
      console.error('Error exporting favorites:', error);
      throw new Error('Failed to export favorites');
    }
  }

  /**
   * Import favorites data (with validation)
   * @param {Object} data - Data to import
   * @returns {Promise<boolean>} - Success status
   */
  async importFavorites(data) {
    try {
      if (!data || !Array.isArray(data.favorites)) {
        throw new Error('Invalid import data format');
      }

      // Validate each anime object
      const validFavorites = data.favorites.filter(anime => 
        anime.id && anime.title && anime.synopsis
      );

      await chrome.storage.sync.set({
        [this.STORAGE_KEYS.FAVORITES]: validFavorites
      });

      console.log(`Imported ${validFavorites.length} favorites successfully`);
      return true;
    } catch (error) {
      console.error('Error importing favorites:', error);
      throw new Error('Failed to import favorites');
    }
  }

  /**
   * Save user search preferences
   * @param {Object} preferences - User preferences
   */
  async saveUserPreferences(preferences) {
    try {
      await chrome.storage.sync.set({
        [this.STORAGE_KEYS.USER_PREFERENCES]: {
          ...preferences,
          updatedAt: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error saving preferences:', error);
      throw new Error('Failed to save preferences');
    }
  }

  /**
   * Get user preferences
   * @returns {Promise<Object>} - User preferences
   */
  async getUserPreferences() {
    try {
      const result = await chrome.storage.sync.get([this.STORAGE_KEYS.USER_PREFERENCES]);
      return result[this.STORAGE_KEYS.USER_PREFERENCES] || {};
    } catch (error) {
      console.error('Error getting preferences:', error);
      return {};
    }
  }

  /**
   * Save last search query
   * @param {string} query - Search query
   */
  async saveLastSearch(query) {
    try {
      await chrome.storage.local.set({
        [this.STORAGE_KEYS.LAST_SEARCH]: {
          query,
          timestamp: Date.now()
        }
      });
    } catch (error) {
      console.error('Error saving last search:', error);
    }
  }

  /**
   * Get storage usage information
   * @returns {Promise<Object>} - Storage usage stats
   */
  async getStorageInfo() {
    try {
      const syncUsage = await chrome.storage.sync.getBytesInUse();
      const localUsage = await chrome.storage.local.getBytesInUse();
      
      return {
        syncUsage,
        localUsage,
        syncLimit: chrome.storage.sync.QUOTA_BYTES,
        localLimit: chrome.storage.local.QUOTA_BYTES,
        syncPercentage: (syncUsage / chrome.storage.sync.QUOTA_BYTES) * 100,
        localPercentage: (localUsage / chrome.storage.local.QUOTA_BYTES) * 100
      };
    } catch (error) {
      console.error('Error getting storage info:', error);
      return null;
    }
  }

  /**
   * Listen to storage changes
   * @param {Function} callback - Callback function
   */
  onStorageChanged(callback) {
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (changes[this.STORAGE_KEYS.FAVORITES]) {
        callback({
          type: 'favorites',
          oldValue: changes[this.STORAGE_KEYS.FAVORITES].oldValue || [],
          newValue: changes[this.STORAGE_KEYS.FAVORITES].newValue || [],
          namespace
        });
      }
    });
  }
}

// Create singleton instance
const storageService = new StorageService();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = StorageService;
} else {
  window.StorageService = storageService;
}