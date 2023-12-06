class MetricsClient {

  constructor(httpClient) {

    this.httpClient = httpClient;

  }

  async getMetricStatus(userId, metricName) {

    const response = await this.httpClient.get(`/users/${userId}/metrics/${metricName}`);

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

  async canAllowMetric(userId, metricName) {

    const response = await this.httpClient.get(`/users/${userId}/metrics/${metricName}/can-allow`);

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

  async tryCommitMetricUsage(userId, metricName, count) {

    try {

      const response = await this.httpClient.post(`/users/${userId}/metrics/${metricName}/try`, { count });

      if (response.data && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to retrieve user data');
      }

    } catch (exception) {

      throw exception.response.data;

    }

  }

  async commitMetricUsage(userId, metricName, count) {

    const response = await this.httpClient.post(`/users/${userId}/metrics/${metricName}`, { count });

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to retrieve user data');
    }

  }

}

module.exports = MetricsClient;