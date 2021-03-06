import styled from "styled-components";

const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top-color: #009de0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
  margin: 10px auto 0;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
