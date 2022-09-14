import HttpClient from "./HttpClient";

const BASE_URL = "/devices";

const getToken = async () => {
  const token = await localStorage.getItem("userToken");
};

export const getAllNetworks = async () => {
  try {
    const respone = await HttpClient.get(`${BASE_URL}/networks`);
    return respone.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNetworkData = async (id) => {
  try {
    const respone = await HttpClient.get(`${BASE_URL}/networks/${id}`);
    return respone.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNetworkAvrages = async (id) => {
  try {
    const respone = await HttpClient.get(`${BASE_URL}/networks/${id}`);
    return respone.data.data;
  } catch (e) {
    console.log(e);
  }
};
