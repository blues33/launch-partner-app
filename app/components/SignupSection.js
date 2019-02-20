import styled from 'styled-components';

const SignupSection = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    border: 2px solid #2a2a72;
    background-color: #eaf6ff;

    input {
      display: flex;
      padding: 20px;
      margin: 5px 10px;
      border: 1px solid #009ffd;
      align-self: center;
    }
  }
`;

export default SignupSection;
