import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  ButtonContainer,
  Error,
  InputContainer,
  MainContainer,
  StyledButton,
  StyledInput,
  SubtitleText,
  WelcomeText,
} from "./styles/Login.styles";

const LoginPage = () => {
  const { Login } = useContext(AuthContext);

  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = () => {
    if (phone.length === 0) {
      setError("Please enter a phone number");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    console.log("Login Submit - Phone: " + phone);
    Login({ phone: phone });
  };

  return (
    <MainContainer>
      <InputContainer>
        <WelcomeText>Welcome,</WelcomeText>
        <SubtitleText>Enter Phone Number to login</SubtitleText>
        {error ? <Error>{error}</Error> : null}
        <StyledInput
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <ButtonContainer>
          <StyledButton onClick={handleSubmit}>Login</StyledButton>
        </ButtonContainer>
      </InputContainer>
    </MainContainer>
  );
};

export default LoginPage;
