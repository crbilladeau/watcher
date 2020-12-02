import styled from 'styled-components';

export const SearchBarStyles = styled.input`
  border: rgb(199, 0, 211) 2px solid;
  border-radius: 10px;
  background-color: transparent;
  color: whitesmoke;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.4em;
  height: 100%;
  width: 100%;
  padding: 0.5em 0 0.5em 1em;
  &:focus {
    background: rgb(199, 0, 211);
    background: linear-gradient(
      135deg,
      rgba(199, 0, 211, 0.8) 0%,
      rgba(53, 0, 211, 0.8) 30%,
      rgba(93, 0, 211, 0.8) 100%
    );
    /* box-shadow: 6px 6px rgba(53, 0, 211, 0.8); */
    color: whitesmoke;
    outline: none;
  }
  ::placeholder {
    color: whitesmoke;
    text-shadow: 1px 1px 2px #333;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5em 0 0 0;
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    font-size: 1.3em;
    padding: 0.5rem;

  }
`;
