import React from "react";
import DevicesListItem from "../components/DevicesListItem";
import Layout from "../components/Layout";
import { useGetAllDevices } from "../queries/DevicesQueries";
import {
  AddDeviceButton,
  Container,
  ListContainer,
  PageAppBar,
  PageTitle,
} from "./styles/Devices.styles";

const DevicesPage = () => {
  const { data: DevicesData, status, error } = useGetAllDevices();
  return (
    <Layout>
      <Container>
        <PageAppBar>
          <PageTitle>Devices</PageTitle>
          <AddDeviceButton>Add Device</AddDeviceButton>
        </PageAppBar>
        <ListContainer>
          {status === "loading" && <h1>Loading....</h1>}
          {status === "error" && <h1>Error:{error}</h1>}
          {status === "success" &&
            (DevicesData.length === 0 ? (
              <h1>No Devices found</h1>
            ) : (
              DevicesData.map((data) => {
                return <DevicesListItem network={data} key={data._id} />;
              })
            ))}
        </ListContainer>
      </Container>
    </Layout>
  );
};

export default DevicesPage;
