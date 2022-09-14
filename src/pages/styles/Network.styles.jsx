import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
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
`;

export const StatCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  /* border: 1px solid black; */
  width: 100%;
  padding: 1rem;
`;

export const ChartContainer = styled.div`
    width: 80%;
    padding: 1rem;
`
