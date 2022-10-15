import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NetworkPage from "./pages/NetworkPage";
import { QueryClient, QueryClientProvider } from "react-query";
import NetworksPage from "./pages/NetworksPage";
import DevicesPage from "./pages/DevicesPage";
import UsersTable from "./components/UsersTable";
import UsersPage from "./pages/UsersPage";
import DevicePage from "./pages/DevicePage";
const RouteGaurd = () => {
  // const auth = localStorage.getItem("userToken")
  const auth = "7409327509327";
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<RouteGaurd />}>
          <Route excat path="/" element={<NetworksPage />} />
          <Route excat path="/networks" element={<NetworksPage />} />
          <Route path="/networks/:networkId" element={<NetworkPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/devices/:deviceId" element={<DevicePage />} />
          <Route path="/users" element={<UsersPage />} />
          {/* <Route path="/users/:userId" element={<UserProfilePage />} /> */}
          {/* <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserProfilePage />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/devices/:deviceId" element={<DeviceProfilePage />} />
          <Route path="/devices" element={<Devices />} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default AppRoutes;
