import styled from 'styled-components';

export const BannerHeader = styled.header`
  background-size: cover;
  background-position: center center;
  color: white;
  object-fit: contain;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 75vh;
  margin: 0 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 0.3rem;
  }
  button {
    cursor: pointer;
    color: white;
    outline: none;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 0.2vw;
    padding: 0 2rem;
    margin-right: 1rem;
    padding-top: 0.5em;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;
    &:hover {
      color: black;
      background-color: rgba(255, 255, 255, 0.9);
      transition: all 0.2s;
    }
  }
  h3 {
    width: 45rem;
    height: 80px;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    max-width: 360px;
  }
`;

export const FadeBottom = styled.div`
  height: 7.4rem;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
