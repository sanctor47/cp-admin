import styled from "styled-components";

const StatPoint = ({ icon, title, value, unit }) => {
  return (
    <Container>
      <StatTitle>{title}</StatTitle>
      <IconContainer>{icon}</IconContainer>
      <StatValue>{value} {unit}</StatValue>
    </Container>
  );
};

export default StatPoint;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  /* padding: 1rem; */
  width: 100px;
  height: 100px;
  /* border: 1px solid #ccc; */
`;

const StatTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
`

const IconContainer = styled.div`
  font-size: 42px;
`;

const StatValue = styled.div`
  font-size: 20px;
`;
