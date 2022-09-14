import React from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  MainArea,
  MainAreaTitle,
  StatCardContainer,
} from "./styles/Network.styles";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import FilterableChart from "../components/FilterableChart";
import { useParams } from "react-router-dom";

const data = [
  {
    timeStamp: "12/12/2014",
    point: {
      value: "24",
    },
  },
  {
    timeStamp: "12/12/2014",
    point: {
      value: "24",
    },
  },
  {
    timeStamp: "12/12/2014",
    point: {
      value: "24",
    },
  },
  {
    timeStamp: "12/12/2014",
    point: {
      value: "24",
    },
  },
  {
    timeStamp: "12/12/2014",
    point: {
      value: "24",
    },
  },
  {
    timeStamp: "12/12/2014",
    point: {
      value: "24",
    },
  },
];

const NetworkPage = () => {
  const {networkId} = useParams();
  console.log(networkId);
  //   const nav = useNavigate();
  return (
    <Container>
      <Navbar />
      <MainArea>
        <MainAreaTitle>Network - 001</MainAreaTitle>
        <h1>Network Wide Readings</h1>
        <StatCardContainer>
          <StatCard
            title={"Temprature"}
            icon={<FaTemperatureHigh />}
            value={"24"}
            unit={"C"}
          />
          <StatCard
            icon={<BsDropletHalf />}
            title={"Humidity"}
            value={"60"}
            unit={"%"}
          />
          <StatCard
            icon={<BiWind />}
            title={"Amonia"}
            value={"30"}
            unit={"ppm"}
          />
        </StatCardContainer>
        <FilterableChart data={data} />
      </MainArea>
    </Container>
  );
};

export default NetworkPage;
