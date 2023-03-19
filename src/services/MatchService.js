import ApiService from './ApiService.js'

class MatchService {
  constructor() {
    this.apiService = new ApiService()
  }

  async postMatch(data) {
    let url = 'http://www.post-result.com/';
    return await this.apiService.post(url,data);
  }
}

export default new MatchService()