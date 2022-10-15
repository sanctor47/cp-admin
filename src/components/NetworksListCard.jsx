import styled from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const NetworkListCard = ({data}) => {
    // const nav = useNavigate();
    return (
      <>
        <NetworkCard>
          <Main>
            <NetworkTitle>{data.name}</NetworkTitle>
            <NetworkStatArea>
              <StatLine>
                <Stat>
                  <StatLabel>Last Active:</StatLabel>
                  <StatVal>N/A</StatVal>
                </Stat>
                <Stat>
                  <StatLabel>Location:</StatLabel>
                  <StatVal>N/A</StatVal>
                </Stat>
              </StatLine>
              <StatLine>
                <Stat>
                  <StatLabel>Nodes:</StatLabel>
                  <StatVal>{data.nodes.length}</StatVal>
                </Stat>
                <Stat>
                  <StatLabel>Status:</StatLabel>
                  <StatVal>N/A</StatVal>
                </Stat>
              </StatLine>
            </NetworkStatArea>
          </Main>
          <CTA to={`/networks/${data._id}`}>
            <BsBoxArrowUpRight />
          </CTA>
        </NetworkCard>
      </>
    );
  };

  export default NetworkListCard;

  const NetworkCard = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
  `;
  
  const Main = styled.div`
    /* display: flex; */
    flex: 10;
  `;
  
  const NetworkTitle = styled.div`
    font-size: 26px;
    font-weight: bold;
    padding: 5px;
  `;
  
  const NetworkStatArea = styled.div`
    display: flex;
    gap: 1rem;
    padding-left: 10px;
    padding-right: 10px;
  `;
  
  const StatLine = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  `;
  const StatLabel = styled.div`
    font-weight: bold;
  `;
  const StatVal = styled.div`
    text-align: right;
  `;
  const Stat = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  
  const CTA = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    flex: 1;
    background-color: #fff;
    border-radius: 0 10px 10px 0;
    :hover {
      background-color: #1c1c1c;
    }
  `;
  