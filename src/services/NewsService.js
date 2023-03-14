import ApiService from './ApiService.js'

const API_KEY = '7290cfeb56da4814bba3e97911c3da3b'

class NewsService {
  constructor() {
    this.apiService = new ApiService()
  }

  async getNews() {
    let url = 'https://newsapi.org/v2/everything?' +
        'q=esport&' +
        'searchIn=title&' +
        'sortBy=publishedAt&' +
        'pageSize=5&' +
        'apiKey=' + API_KEY

    return await this.apiService.get(url)
  }
}

export default new NewsService()