import HttpClient from "./HttpClient";

const BASE_URL = "/reading";

export const getLatestNetworkReadings = async (id) => {
  const response = await HttpClient.get(`${BASE_URL}/networkId/${id}`);
  return response;
};

export const getLatestDeviceReadings = async (id) => {
  const response = await HttpClient.get(`${BASE_URL}/deviceId/${id}`);
  return response;
};

export const getNetworkChartData = async (id) => {
  const response = await HttpClient.get(`${BASE_URL}/networkId/chart/${id}`);
  return response;
};

export const getDeviceChartData = async (id) => {
  const response = await HttpClient.get(`${BASE_URL}/deviceId/chart/${id}`);
  return response;
};
