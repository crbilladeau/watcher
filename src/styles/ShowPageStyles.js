import styled from 'styled-components';

export const ShowPageStyles = styled.div`
  color: white;

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3rem;
  }
`;

export const ShowHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-size: cover;
  background-position: center top;
  height: 70vh;
  object-fit: contain;
  margin: 0;

  p {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 400;
    max-width: 600px;
  }
  div {
    margin: 1rem 0;
  }
  .showInfo {
    margin: 0 2rem 4rem 2rem;
    background: rgb(199, 0, 211);
    background: linear-gradient(
      135deg,
      rgba(199, 0, 211, 0.8) 0%,
      rgba(53, 0, 211, 0.8) 30%,
      rgba(93, 0, 211, 0.8) 100%
    );
    padding: 2rem;
    max-width: 800px;
    @media screen and (max-width: 768px) {
      margin: 2rem;
    }
  }

  .seasons-episodes {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .seasons-episodes h6 {
    margin: 0 1rem 0 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  .subinfo {
    display: flex;
    flex-direction: row;
    p {
      font-family: 'Lato', sans-serif;
      font-size: 16px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 768px) {
      height: 100vh;
    }
`;

export const ShowOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Recommendations = styled.div`
  margin: 2rem 0 0 2rem;
  h2 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
  }
`;

export const ShowInfo = styled.div``;
