import React from "react";
import DevicesListItem from "../components/DevicesListItem";
import DevicesTable from "../components/DevicesTable";
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
  const { data, status, error } = useGetAllDevices();
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
          {status === "success" && <DevicesTable data={data} />}
        </ListContainer>
      </Container>
    </Layout>
  );
};

export default DevicesPage;
