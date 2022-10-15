import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAllNetworks, getNetworkById } from "../apis/NetworkServices";

export const useGetAllNetworks = () => {
  // console.log(resource,id);
  return useQuery("networks", () => getAllNetworks(), {
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

export const useGetNetworkById = (id) => {
//   const { logout } = useAuth();
  return useQuery(["network", id], () => getNetworkById(id), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      // console.log(error.response.data.message);
    //   if (error.response.data.message === "jwt expired") logout();
    },
    select: (data) => {
      const resources = data.data.data;
      return resources;
    },
  });
};

// export const useAddNewDevice = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addNewDevice, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("devices");
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });
// };
