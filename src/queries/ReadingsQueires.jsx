import { useMutation, useQuery, useQueryClient } from "react-query";
import { getLatestNetworkReadings } from "../apis/ReadingsServices";

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

