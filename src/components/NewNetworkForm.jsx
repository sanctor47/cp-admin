import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = styled.form``;

const FormControl = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input``;

const SubmitBTN = styled.button`

`
const NewNetworkForm = () => {
  return (
    <Container>
      <Form>
        <FormControl>
          <Label htmlFor="Name">Name</Label>
          <Input placeholder="Name" name="Name" type={"text"} />
        </FormControl>
        <FormControl>
          <Label htmlFor="Name">Label</Label>
          <Input placeholder="Name" name="Name" type={"text"} />
        </FormControl>
        <FormControl>
          <Label htmlFor="Name">Gate Way</Label>
          <Input placeholder="Name" name="Name" type={"text"} />
        </FormControl>
        <SubmitBTN type="submit">Add Network</SubmitBTN>
      </Form>
    </Container>
  );
};

export default NewNetworkForm;
