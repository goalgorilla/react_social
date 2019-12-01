import styled from 'styled-components';

const DropdownHeader = styled.li(
  props => `
  display: block !important;
  line-height: 1.5;
  color: #555555;
  font-size: ${props.theme.font.size.verySmall};
  font-weight: 400;
  white-space: nowrap;
`,
);

export default DropdownHeader;
