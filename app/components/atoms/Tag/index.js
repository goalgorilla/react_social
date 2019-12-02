import styled from "styled-components";

// A tag can be used to highlight information on a card for the user
// For example on the profile page, in the RecentActivity card a tag
// is used to show if a user is already enrolled in an event with the message:
// 'You also enrolled'
const Tag = styled.p`
  color: ${props => props.theme.color.background.primary};
  font-size: ${props => props.theme.font.size.small};
  background: ${props => props.theme.color.brand.tertiary};
  font-weight: ${props => props.theme.font.weight.medium};
  padding: 1px 15px;
  margin: 0;
  border-radius: ${props => props.theme.layout.borderRadius.default};
`;

export default Tag;
