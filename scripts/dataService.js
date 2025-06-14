// scripts/dataService.js
class DataService {
  static async getAnimeList() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(['animeList'], (result) => {
        resolve(result.animeList || []);
      });
    });
  }

  static async addAnime(anime) {
    const animeList = await this.getAnimeList();
    if (!animeList.some(a => a.id === anime.id)) {
      animeList.push(anime);
      await this.saveAnimeList(animeList);
    }
  }

  static async removeAnime(animeId) {
    const animeList = await this.getAnimeList();
    const updatedList = animeList.filter(a => a.id !== animeId);
    await this.saveAnimeList(updatedList);
  }

  static async saveAnimeList(animeList) {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ animeList }, () => {
        resolve();
      });
    });
  }
}