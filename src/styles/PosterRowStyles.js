import styled from 'styled-components';

export const RowContainer = styled.div`
  h2 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    margin-left: 2rem;
  }
`;

export const PosterRow = styled.div`
  display: flex;
  padding: 2rem;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }

  /* .poster {
    transition: transform 300ms ease 100ms;
  }
  &:hover .poster {
    transform: translateX(-25%);
  }

  .poster:hover ~ .poster {
    transform: translateX(25%);
  } */
`;

export const PosterStyles = styled.div`
  display: flex;
  margin: 0 0.5rem;
  align-items: flex-end;
  border-radius: 10px;
  border: none;
  color: white;
  /* position: relative; */
  /* margin-right: 1rem; */
  transition: transform 450ms;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 250px;
  height: 380px;
  @media screen and (max-width: 768px) {
    min-width: 200px;
    height: 300px;
  }

  -webkit-font-smoothing: antialiased !important;
  div {
    padding: 2.5rem 1rem;
    z-index: 2;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
  h3 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.8rem;
    margin: 0.5rem 0;
    white-space: pre-wrap;
  }

  /* TODO: fix weird text blurring issue on hover*/
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.5px;
  }
  &:hover {
    transform: translateZ(0) scale(1.08, 1.08);
    cursor: pointer;
  }
  &:before {
    border-radius: 10px;
    border: transparent;
    content: '';
    display: block;
    position: absolute;
    height: 0%;
    width: 100%;
    bottom: 0;
    transition: height 450ms ease-out;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
  }
  &:hover&:before {
    height: 100%;
  }
  &:last-child {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      right: -2rem;
      width: 2rem;
      height: 100%;
    }
  }
`;
