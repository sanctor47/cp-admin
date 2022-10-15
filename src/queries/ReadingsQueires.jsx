import { useMutation, useQuery, useQueryClient } from "react-query";
import { getDeviceReadings, getLatestDeviceReadings, getLatestNetworkReadings } from "../apis/ReadingsServices";

export const useGetLatestNetworkReadings = (id) => {
  // console.log(resource,id);
  return useQuery("networkReadingsLatest", () => getLatestNetworkReadings(id), {
    onSuccess: (data) => {
        console.log(data);
    },
    onError: (error) => {
        console.log(error);
    },
    select: (data) => {
      const resources = data.data.data;
      return resources;
    },
  });
};


export const useGetLatestDeviceReadings = (id) => {
  // console.log(resource,id);
  return useQuery("deviceReadingsLatest", () => getLatestDeviceReadings(id), {
    onSuccess: (data) => {
        console.log(data);
    },
    onError: (error) => {
        console.log(error);
    },
    select: (data) => {
      const resources = data.data.data;
      return resources;
    },
  });
};

export const useGetDeviceReadings = (id) => {
  // console.log(resource,id);
  return useQuery("deviceReadings", () => getDeviceReadings(id), {
    onSuccess: (data) => {
        // console.log(data);
    },
    onError: (error) => {
        console.log(error);
    },
    select: (data) => {
      const resources = data.data.data;
      return resources;
    },
  });
};

