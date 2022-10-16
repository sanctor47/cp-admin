import {
  AddNetworkButton,
  Container,
  ListContainer,
  PageAppBar,
  PageTitle,
} from "./styles/Networks.styles";
import { useGetAllNetworks } from "../queries/NetworkQueries";
import Layout from "../components/Layout";
import NetworkListCard from "../components/NetworksListCard";
import StyledModal from "../components/StyledModal";
import { useState } from "react";
import NewNetworkForm from "../components/NewNetworkForm";

const NetworksPage = () => {
  const [show, setShow] = useState(false);
  const { data: NetworksData, status, error } = useGetAllNetworks();
  const hideModal = (arg) => {
    setShow(false);
    // actOnModalResult(arg);
  };
  const openModal = (arg) => {
    setShow(true);
  };
  return (
    <Layout>
      <StyledModal
        show={show}
        hideModal={hideModal}
        headerText={"Hello World!!"}
        panel={<NewNetworkForm/>}
      />
      <Container>
        <PageAppBar>
          <PageTitle>Networks</PageTitle>
          <AddNetworkButton onClick={() => openModal()}>
            New Network
          </AddNetworkButton>
        </PageAppBar>
        <ListContainer>
          {status === "loading" && <h1>Loading....</h1>}
          {status === "error" && <h1>Error:{error}</h1>}
          {status === "success" &&
            NetworksData.map((network) => {
              return <NetworkListCard data={network} />;
            })}
        </ListContainer>
      </Container>
    </Layout>
  );
};

export default NetworksPage;
