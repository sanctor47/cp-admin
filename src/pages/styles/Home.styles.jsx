import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { AiFillVideoCamera, AiFillBell } from "react-icons/ai";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
  color: #13121299;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  gap: 0.5rem;
`;

export const MainArea = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const MainAreaTitle = styled.div`
font-size: x-large;
letter-spacing: 0.2rem;
width: 100%;
padding: 1rem;
`

export const StatCard = styled.div`
  width: 95%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
`;
export const StatCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatCardTitle = styled.div`
  font-size: 28px;
  color: #000000;
  /* text-align: center; */
`;

export const StatCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

export const Devider = styled.div`
  width: 100%;
  border-bottom:2px solid black;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const StatCardBody = styled.div`
    /* border: 1px solid black; */
    padding: 1rem;
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-around;
    align-items: center;
`