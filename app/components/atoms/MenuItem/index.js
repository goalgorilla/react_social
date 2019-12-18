import styled from 'styled-components';

// A menu item used in the SecondaryNavigation component (for example on the Search page)
const MenuItem = styled.a`
  position: relative;
  display: block;
  padding: 13px 10px 13px 10px;
  line-height: 24px;
  color: #f9f9f9 !important;
  transition: all 0.3s;
  white-space: nowrap;
  opacity: ${props => (props.active ? '1' : '0.75')};
  text-decoration: none;
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  font-weight: ${props => props.theme.font.weight.medium};
  border-bottom: 2px solid
    ${props => (props.active ? '#f9f9f9' : 'transparent')};
  &:hover {
    background-color: ${props =>
      props.active ? 'transparent' : 'rgba(0, 0, 0, 0.3)'};
    border-bottom-color: ${props =>
      props.active ? '#f9f9f9' : 'rgba(0, 0, 0, 0.3)'};
  }
`;

export default MenuItem;
