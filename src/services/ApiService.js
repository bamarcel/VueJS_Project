class ApiService {
    async get(url) {
        const response = await fetch(url);
        return await response.json();
    }
  }
  
  export default ApiService