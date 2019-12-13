import styled from 'styled-components';
import InputLabel from '../InputLabel';

const SearchInputLabel = styled(InputLabel)`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  word-wrap: normal;
  margin: -1px;
  padding: 0;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export default SearchInputLabel;
