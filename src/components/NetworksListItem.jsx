import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { AiFillVideoCamera, AiFillBell } from "react-icons/ai";
import { FaArrowCircleRight, FaTemperatureHigh } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { useGetLatestNetworkReadings } from "../queries/ReadingsQueires";
import { useNavigate } from "react-router-dom";

const NetworksListItem = ({ network }) => {
  // console.log(network);
  const { data, status, error } = useGetLatestNetworkReadings(network._id);
  const nav = useNavigate();
  return (
    <Container>
      <Header>
        <Title>
          {network.name}{" "}
          {
            <FaArrowCircleRight
              onClick={() => nav(`/networks/${network._id}`)}
            />
          }
        </Title>
        <Actions>
          <EditIcon />
          <CameraIcon />
          <AlarmIcon />
        </Actions>
      </Header>
      <Body>
        {status === "loading" && <h1>Loading....</h1>}
        {status === "error" && <h1>Error:{error}</h1>}
        {status === "success" && (
          <>
            <StatCard>
              <div className="header">Avg.Temprature</div>
              <div className="body">
                <div className="iconArea">
                  <FaTemperatureHigh />
                </div>
                <div className="valueArea">{data.tempAvg}</div>
              </div>
            </StatCard>
            <StatCard>
              <div className="header">Avg.Humidity</div>
              <div className="body">
                <div className="iconArea">
                  <BsDropletHalf />
                </div>
                <div className="valueArea">{data.humAvg}</div>
              </div>
            </StatCard>

            <StatCard>
              <div className="header">Avg.Ammonia</div>
              <div className="body">
                <div className="iconArea">
                  <BiWind />
                </div>
                <div className="valueArea">{data.nh3Avg}</div>
              </div>
            </StatCard>
          </>
        )}
      </Body>
    </Container>
  );
};

export default NetworksListItem;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
`;

const Header = styled.div`
  /* border: 1px solid #ccc; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  /* border: 1px solid #ccc; */
  font-size: 24px;
  letter-spacing: 0.1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const EditIcon = styled(FaEdit)`
  color: #000000;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export const CameraIcon = styled(AiFillVideoCamera)`
  color: #000000;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export const AlarmIcon = styled(AiFillBell)`
  color: #000000;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StatCard = styled.div`
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  /* border: 1px solid black; */
  .header {
    font-size: 24px;
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
  }
  .iconArea {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    height: 100%;
    font-size: 72px;
  }
  .valueArea {
    flex: 2;
    /* border: 1px solid black; */
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 72px;
  }
`;
