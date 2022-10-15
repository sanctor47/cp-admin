import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import { PageTitle, Container } from "./styles/Network.styles";
import { useGetNetworkById } from "../queries/NetworkQueries";
import {
  FaNetworkWired,
  FaArrowCircleRight,
  FaTemperatureHigh,
} from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { MdRouter } from "react-icons/md";
import { RiRouterFill } from "react-icons/ri";
import DeviceCard from "../components/DeviceCard";

const NetworkPage = () => {
  const { networkId } = useParams();
  const { data: NetworkData, status, error } = useGetNetworkById(networkId);

  return (
    <Layout>
      <Container>
        {status === "loading" && <h1>Loading....</h1>}
        {status === "error" && <h1>Error:{error}</h1>}
        {status === "success" && (
          <>
            <PageTitle>{NetworkData.name}</PageTitle>
            <NetworkCard>
              <div className="cardHeader">
                <MdRouter size={28} />
                <h2>Network Statistics</h2>
              </div>
              <div className="cardBody">
                <div className="stat">
                  <div className="statTitle">Number of Nodes:</div>
                  <div className="statVal">{NetworkData.nodes.length}</div>
                </div>
                <h4>Last Transmition: {NetworkData.createdAt}</h4>
                <h4>Sending Interval: 5 sec</h4>
              </div>
            </NetworkCard>
            <DeviceContaierArea>
              <h2>Devices</h2>
              <DeviceCard key={NetworkData.gateway} deviceId={NetworkData.gateway} />
              {NetworkData.nodes.map((node) => {
                return <DeviceCard key={node} deviceId={node} />;
              })}
            </DeviceContaierArea>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default NetworkPage;

const DeviceContaierArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const NetworkCard = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1rem;
  .cardHeader {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
  .cardBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid black;
    /* align-items: center; */
    .stat {
      display: flex;
      gap: 0.4rem;
      .statTitle {
        font-weight: bold;
      }
      .statVal {
        font-weight: bold;
      }
    }
  }
`;

const Text = styled.div`
  font-size: 16px;
`;

const NewtworkInfoCard = styled.div`
  border: 1px solid black;
`;

const NewtworkReadingsCard = styled.div`
  border: 1px solid black;
`;

const GateWayCard = styled.div``;

const NodeCard = styled.div``;
