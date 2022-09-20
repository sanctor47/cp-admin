import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Container } from "./styles/Network.styles";
import { PageTitle } from "./styles/Networks.styles";

const NetworkPage = () => {
  const { networkId } = useParams();
  return (
    <Layout>
      <Container>
        <PageTitle>Network 001 {networkId}</PageTitle>
        <NetworkCard>
          <NewtworkInfoCard>
            <Text>Connected Nodes: 2</Text>
            <Text>Network Status: Active</Text>
            <Text>Last Transmition: 12:01:00-2022/15/6</Text>
            <Text>Firmware Ver: 0.3</Text>
          </NewtworkInfoCard>
          <NewtworkReadingsCard>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
            <Text>Firmware Ver: 0.3</Text>
          </NewtworkReadingsCard>
        </NetworkCard>
      </Container>
    </Layout>
  );
};

export default NetworkPage;

const NetworkCard = styled.div`
  border: 1px solid black;
  display: flex;
`;

const Text = styled.div`
  font-size: 16px;
  /* letter-spacing: 0.2rem; */
`;

const NewtworkInfoCard = styled.div`
  border: 1px solid black;
`;

const NewtworkReadingsCard = styled.div`
  border: 1px solid black;
`;
