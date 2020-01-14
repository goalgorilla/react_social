import styled from 'styled-components';

const PageTitle = styled.h1`
  color: ${props => props.theme.color.text.light};
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1em;
  width: 80%;
`;

export default PageTitle;
