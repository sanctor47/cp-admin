import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DevicesListItem from "../components/DevicesListItem";
import DevicesTable from "../components/DevicesTable";
import Layout from "../components/Layout";
import { useGetDeviceById } from "../queries/DevicesQueries";
import { useGetLatestDeviceReadings } from "../queries/ReadingsQueires";
// import { useGetAllDevices } from "../queries/DevicesQueries";
import { FaArrowCircleRight, FaTemperatureHigh } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { BiWind } from "react-icons/bi";

import {
  AddDeviceButton,
  Container,
  ListContainer,
  PageAppBar,
  PageTitle,
} from "./styles/Devices.styles";
import TabNavigation from "../components/TabNavigation";

const DevicePage = () => {
  const { deviceId } = useParams();

  const {
    data: DeviceData,
    status: DeviceDataStatus,
    error: DeviceDataError,
  } = useGetDeviceById(deviceId);

  const {
    data: LatestDeviceReadings,
    status: LatestDeviceReadingsStatus,
    error: LatestDeviceReadingsError,
  } = useGetLatestDeviceReadings(deviceId);

  return (
    <Layout>
      {DeviceDataStatus === "loading" && <h1>Loading....</h1>}
      {DeviceDataStatus === "error" && <h1>Error:{DeviceDataError}</h1>}
      {DeviceDataStatus === "success" && (
        <Container>
          <h1>{DeviceData.name}</h1>
          {/* <p>{JSON.stringify(DeviceData)}</p> */}
          {LatestDeviceReadingsStatus === "loading" && <h1>Loading....</h1>}
          {LatestDeviceReadingsStatus === "error" && (
            <h1>Error:{LatestDeviceReadingsError}</h1>
          )}
          {LatestDeviceReadingsStatus === "success" && (
            <Container>
              <Content>
                <LatestReadings>
                  {LatestDeviceReadings.map((reading) => {
                    return (
                      <StatCard StatCard key={reading._id}>
                        <div className="body">
                          <div className="header">{reading.key}</div>
                          <div className="iconArea">
                            {reading.key === "Temprature" && (
                              <FaTemperatureHigh />
                            )}
                            {reading.key === "Humidity" && <BsDropletHalf />}
                            {reading.key === "Ammonia" && <BiWind />}
                          </div>
                          <div className="valueArea">{reading.point}</div>
                        </div>
                      </StatCard>
                    );
                  })}
                </LatestReadings>
              </Content>
            </Container>
          )}
          {/* Readig Tabel */}
          <TabNavigation tabs={["Temp", "Hum", "Ammonia"]} panels={deviceId}/>
          {/* Readig Chart */}
        </Container>
      )}
    </Layout>
  );
};

export default DevicePage;



const DeviceData = {
  active: false,
  isGateway: true,
  isAccessController: false,
  isCamera: false,
  isBridge: false,
  nodes: [],
  _id: "632b1b6efee29216c0d4bb0f",
  UUID: "b4cf315c-1842-4e20-acf0-1253292d58e9",
  name: "Proto Gateway Device",
  label: "Proto Gateway",
  domain: "6320b408c9985042070a29fb",
  device_key: "9jEpjRGIJF10AS679F1ib",
  sensors: [
    { _id: "632b1c73fee29216c0d4bb47", UUID: "Temperature003" },
    { _id: "632b1c75fee29216c0d4bb4d", UUID: "Humidity003" },
    { _id: "632b1c78fee29216c0d4bb53", UUID: "Ammonia003" },
  ],
  actuators: [],
  changeLog: [],
  createdAt: "2022-09-21T14:10:54.264Z",
  updatedAt: "2022-09-21T14:15:20.121Z",
  __v: 0,
};

const LatestReadingsData = [
  {
    _id: "632b2d1265a67431258be99c",
    sensor: "632b1c73fee29216c0d4bb45",
    key: "Temprature",
    point: "24.0",
    createdAt: "2022-09-21T15:26:10.208Z",
    updatedAt: "2022-09-21T15:26:10.208Z",
    __v: 0,
  },
  {
    _id: "632b2d1265a67431258be99e",
    sensor: "632b1c75fee29216c0d4bb4b",
    key: "Humidity",
    point: "69.0",
    createdAt: "2022-09-21T15:26:10.311Z",
    updatedAt: "2022-09-21T15:26:10.311Z",
    __v: 0,
  },
  {
    _id: "632b2d1265a67431258be9a0",
    sensor: "632b1c78fee29216c0d4bb51",
    key: "Ammonia",
    point: "0",
    createdAt: "2022-09-21T15:26:10.403Z",
    updatedAt: "2022-09-21T15:26:10.403Z",
    __v: 0,
  },
];

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DeviceTitle = styled.div`
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: bold;
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
`;

const LatestReadings = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: flex-start; */
  /* align-items: center; */
  flex-direction: column;
  /* flex: 3; */
  /* padding: 0.5em;   */
`;

const StatCard = styled.div`
  /* border: 1px solid black; */
  /* flex: 1; */
  /* height: 100%; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  /* height: 120px; */
  /* border-left: 1px solid black; */

  .body {
    /* border: 1px solid black; */
    width: 100%;
    .header {
      font-size: 14px;
      font-weight: bold;
      /* border: 1px solid black; */
      flex: 1;
      height: 100%;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* flex: 2; */
    /* border: 1px solid black; */
  }
  .iconArea {
    flex: 1;
    height: 100%;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    /* height: 100%; */
    font-size: 42px;
  }
  .valueArea {
    height: 100%;
    /* border: 1px solid black; */

    flex: 2;
    /* border: 1px solid black; */
    display: flex;
    /* height: 100%; */
    justify-content: center;
    align-items: center;
    font-size: 28px;
  }
`;
