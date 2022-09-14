import HttpClient from "./HttpClient";

const BASE_URL = "/networks";

export const getAllNetworks = async () =>{
    const response = await HttpClient.get(`${BASE_URL}`,{})
    return response
}

export const getNetworkById = async (id) =>{
    const response = await HttpClient.get(`${BASE_URL}/id/${id}`)
    return response
}