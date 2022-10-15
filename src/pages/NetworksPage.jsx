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

const NetworksPage = () => {
  const { data: NetworksData, status, error } = useGetAllNetworks();
  return (
    <Layout>
      <Container>
        <PageAppBar>
          <PageTitle>Networks</PageTitle>
          <AddNetworkButton>New Network</AddNetworkButton>
        </PageAppBar>
        <ListContainer>
          {status === "loading" && <h1>Loading....</h1>}
          {status === "error" && <h1>Error:{error}</h1>}
          {status === "success" && NetworksData.map(network => {
            return(
              <NetworkListCard data={network} />
            )
          })}
        </ListContainer>
      </Container>
    </Layout>
  );
};

export default NetworksPage;
