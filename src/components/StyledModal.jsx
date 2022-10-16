import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useRef } from "react";

const Model = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: fixed;
  background: white;
  min-width: 300px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 0.75rem;
  /* color: rgba(0, 0, 139, 0.7); */
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
const HeaderText = styled.div`
  height: 100%;
  /* width: 100%; */
  /* flex: 3; */
  font-size: 20px;
  letter-spacing: 1px;
`;
const HeaderIcon = styled.div`
  height: 100%;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const StyledModal = ({ show, hideModal, headerText, panel }) => {
  const warpperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (warpperRef.current && !warpperRef.current.contains(event.target)) {
        hideModal();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [warpperRef]);

  return (
    <Model show={show}>
      {show ? (
        <Container ref={warpperRef}>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <HeaderIcon>
              <AiFillCloseCircle onClick={() => hideModal()} />
            </HeaderIcon>
          </Header>
          {panel}
        </Container>
      ) : null}
    </Model>
  );
};

export default StyledModal;
