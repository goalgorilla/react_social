import styled from 'styled-components';

// Badge are used to display users' expertise and interests
const Badge = styled.div(
  props => `
  display: inline-block;
  margin-bottom: 3px;
  margin-right: 3px;
  padding: 0 ${props.theme.badge.largePaddingX};
  font-size: ${props.theme.badge.largeSize};
  font-weight: ${props.theme.badge.fontWeight};
  line-height: ${props.theme.badge.largeLineHeight};
  text-align: center;
  white-space: nowrap;
  font-weight: 500;
  vertical-align: baseline;
  min-width: 10px;
  max-width: 100%;
  background-color: #e6e6e6;
  color: #4d4d4d;
  transition: 0.3s;
  border-radius: 1em;
`,
);

export default Badge;
