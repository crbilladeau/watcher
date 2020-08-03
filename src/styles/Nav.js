import styled from 'styled-components';

export const NavStyles = styled.div`
  background-color: ${(props) => (props.show ? '#111' : 'transparent')};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1;

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const Logo = styled.img`
  width: 80px;
  object-fit: contain;
`;

export const Avatar = styled.img`
  width: 30px;
  object-fit: contain;
`;
