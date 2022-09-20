import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f1f1;
  color: #13121299;
`;

export const PageAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const PageTitle = styled.div`
  font-size: x-large;
  letter-spacing: 0.2rem;
  width: 100%;
`;

export const AddDeviceButton = styled.button`
  border:none;
  border-radius: 5px;
  background-color: #c1c1c1;
  width:100px;
  height: 40px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  padding: 1rem;
  gap: 1rem;
`;
