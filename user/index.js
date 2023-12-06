const MetricsClient = require('./metrics');

class UserClient {

  constructor(httpClient) {

    this.httpClient = httpClient;

    this.metrics = new MetricsClient(this.httpClient);

  }

  async createUser(user) {

    const response = await this.httpClient.get('/customers', user);

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

  async getUserById(userId) {

    const response = await this.httpClient.get(`/users/${userId}/basic-profile`);

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

  async isUserExistsById(userId) {

    const response = await this.httpClient.get(`/users/${userId}/exists`);

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

  async setUserPropertyById(userId, property, value) {

    const response = await this.httpClient.post(`/users/${userId}/properties`, {
      [property]: value
    });

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

  async getUserPropertyById(userId, property, defaultValue) {

    const response = await this.httpClient.get(`/users/${userId}/properties/${property}`);

    if (response.data && response.data.success) {
      return response.data.data[property] || defaultValue;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

}

module.exports = UserClient;