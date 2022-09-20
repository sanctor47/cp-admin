import HttpClient from "./HttpClient";

const BASE_URL = "/devices";

export const getAllDevices = async () =>{
    const response = await HttpClient.get(`${BASE_URL}`,{})
    return response
}

export const getDeviceById = async (id) =>{
    const response = await HttpClient.get(`${BASE_URL}/id/${id}`)
    return response
}