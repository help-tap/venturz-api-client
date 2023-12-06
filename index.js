const axios = require('axios');

const UserClient = require('./user');

class PlatformClient {

  constructor({ apiAddress, startupId, authorizationToken }) {
    this.apiAddress = apiAddress;
    this.startupId = startupId;
    this.authorizationToken = authorizationToken;
    this.httpClient = axios.create({
      baseURL: `${apiAddress}/v1/startups/${startupId}`,
      headers: {
        'Authorization': `${authorizationToken}`,
      },
    });

    this.user = new UserClient(this.httpClient);

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

  async getUserByAuthorizationToken(authorizationToken) {

    try {

      const response = await this.httpClient.get('/users/user-by-token', {
        headers: {
          'Authorization': authorizationToken,
        },
      });

      if (response.data && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to retrieve user data by token');
      }

    } catch (exception) {

      throw exception.response.data;

    }

  }

  async expireAuthorizationByToken(authorizationToken) {

    const response = await this.httpClient.post('/expire-authorization', {}, {
      token: authorizationToken
    });

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to expire token');
    }

  }

}

module.exports = PlatformClient;