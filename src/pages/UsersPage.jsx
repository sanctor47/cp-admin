import Layout from "../components/Layout";
import UsersTable from "../components/UsersTable";
import {
  AddDeviceButton,
  AddUserButton,
  Container,
  ListContainer,
  PageAppBar,
  PageTitle,
} from "./styles/Users.styles";

const UsersPage = () => {
  //   const { data: UsersData, status, error } = useGetAllDevices();
  const status = "success";
  const error = "error";
  const UsersData = [1, 2, 3, 4];
  return (
    <Layout>
      <Container>
        <PageAppBar>
          <PageTitle>Users</PageTitle>
          <AddUserButton>Add User</AddUserButton>
        </PageAppBar>
        <ListContainer>
          {status === "loading" && <h1>Loading....</h1>}
          {status === "error" && <h1>Error:{error}</h1>}
          {status === "success" &&
            (UsersData.length === 0 ? (
              <h1>No Users found</h1>
            ) : (
              <UsersTable data={UsersData} />
            ))}
        </ListContainer>
      </Container>
    </Layout>
  );
};

export default UsersPage;
