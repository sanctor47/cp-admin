import { Container, ListContainer, PageTitle } from "./styles/Networks.styles";
import { useGetAllNetworks } from "../queries/NetworkQueries";
import Layout from "../components/Layout";
import NetworksListItem from "../components/NetworksListItem";

const NetworksPage = () => {
  const { data: NetworksData, status, error } = useGetAllNetworks();

  return (
    <Layout>
      <Container>
        <PageTitle>Networks</PageTitle>
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