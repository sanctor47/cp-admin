import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: #f1f1f1;
  color: #13121299;
  width: 100%;
`;
