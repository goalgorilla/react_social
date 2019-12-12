import styled from 'styled-components';

const SecondaryNavigation = styled.div`
  background: ${props => props.theme.color.brand.secondary};
  z-index: 1;
  min-height: 46px;
  flex-wrap: nowrap;
  box-shadow: 0 0px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  z-index: 1;

  & > ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-wrap: nowrap;
    list-style: none;
  }
`;

export default SecondaryNavigation;
