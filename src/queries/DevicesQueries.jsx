import { useMutation, useQuery } from "react-query";
import { getAllDevices, getDeviceById } from "../apis/DeviceServices";

export const useGetAllDevices = () => {
  // console.log(resource,id);
  return useQuery("devices", () => getAllDevices(), {
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

export const useGetDeviceById = (id) => {
//   const { logout } = useAuth();
  return useQuery(["device", id], () => getDeviceById(id), {
    onSuccess: (data) => {
      // console.log(data);
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
