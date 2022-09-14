import HttpClient from "./HttpClient";

const BASE_URL = "/users";

export const login = async (data) => {
  try {
    const respone = await HttpClient.post(`${BASE_URL}/login`, data);
    return respone.data.data.userToken;
  } catch (e) {
    console.log(e);
  }
};

export const currentUser = async (token) => {
  try {
    const response = await HttpClient.get(`${BASE_URL}/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
