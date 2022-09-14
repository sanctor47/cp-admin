import React from "react";
import styled from "styled-components";
const StatCard = ({ icon, title, value, unit }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>
        <Icon>{icon}</Icon>
        <Value>
          {value}{unit}
        </Value>
      </Body>
    </Container>
  );
};

export default StatCard;

export const Container = styled.div`
  width: 320px;
  /* height: 200px; */
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
`;

const Title = styled.div`
    font-size: large;
    font-weight: bold;
    letter-spacing: 0.1rem;
`;
const Body = styled.div`
    display: flex;
    font-size: 42px;
    justify-content: space-around;
    align-items: center;
`;
const Icon = styled.div`
    font-size: 68px;
`;
const Value = styled.div``;
