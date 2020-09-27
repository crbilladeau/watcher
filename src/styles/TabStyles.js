import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const TabsStyles = styled(Tabs)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 2rem;
  color: white;
`;

export const ListTabs = styled(TabList)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const SingleTab = styled(Tab)`
  cursor: pointer;
  margin: 0 2rem;
  text-transform: uppercase;
`;

export const TabWindow = styled(TabPanel)`
  p {
    max-width: 700px;
    padding: 2rem 0;
  }
`;

export const SubTabWindow = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    max-width: 700px;
    padding: 2rem 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0.5rem 1rem;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 300px;
  width: 700px;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  /* div {
    width: 2000px;
  } */
  img {
    width: 250px;
    margin: 0.5rem 1rem;
  }
`;
