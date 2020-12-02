import styled from 'styled-components';

export const BannerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-size: cover;
  background-position: center top;
  color: white;
  height: 75vh;
  object-fit: contain;
  margin: 0 0 2rem 0;
`;

export const Banner = styled.div`
  margin: 0 2rem 4rem 2rem;
  background: rgb(199, 0, 211);
  background: linear-gradient(
    135deg,
    rgba(199, 0, 211, 0.8) 0%,
    rgba(53, 0, 211, 0.8) 30%,
    rgba(93, 0, 211, 0.8) 100%
  );
  padding: 2rem;
  /* max-width: 700px; */
  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3rem;
  }
  div {
    margin: 1rem 0;
  }
  button {
    cursor: pointer;
    color: white;
    outline: none;
    border: 2px solid white;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.2vw;
    padding: 0 2rem;
    margin: 0.5rem;
    padding-top: 0.5em;
    background-color: transparent;
    padding-bottom: 0.5rem;
    &:hover {
      color: rgba(53, 0, 211, 1);
      background-color: rgba(255, 255, 255, 0.9);
      transition: all 0.2s;
    }
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem 0;
    max-width: 500px;
  }
  @media screen and (max-width: 420px) {
    margin: 0 1rem 2rem 1rem;
  }
`;

// export const FadeBottom = styled.div`
//   height: 7.4rem;
//   background: linear-gradient(
//     180deg,
//     transparent,
//     rgba(93, 0, 211, 0.8),
//     rgba(53, 0, 211, 1)
//   );
// `;
