import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  max-height: 30em;
  overflow-y: auto;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    background-color: #009FFD;
    border: 1px solid #2A2A72;
    padding: 20px;
    margin: 10px 0;
  }
`;

export default Ul;
