import {
  AddNetworkButton,
  Container,
  ListContainer,
  PageAppBar,
  PageTitle,
} from "./styles/Networks.styles";
import { useGetAllNetworks } from "../queries/NetworkQueries";
import Layout from "../components/Layout";
import NetworksListItem from "../components/NetworksListItem";

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
          {status === "success" &&
            NetworksData.map((data) => {
              return <NetworksListItem network={data} key={data._id} />;
            })}
        </ListContainer>
      </Container>
    </Layout>
  );
};

export default NetworksPage;
