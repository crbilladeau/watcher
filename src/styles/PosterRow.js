import styled from 'styled-components';

export const RowContainer = styled.div`
  margin-left: 2rem;
  color: white;
  h3 {
    text-align: center;
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

  img {
    object-fit: contain;
    width: 100%;
    max-height: 150px;
    margin-right: 1rem;
    transition: transform 450ms;
    &:hover {
      transform: scale(1.08);
      opacity: 1;
      cursor: pointer;
    }
  }
  .posterLarge {
    max-height: 450px;
    &:hover {
      transform: scale(1.08);
    }
  }
`;
