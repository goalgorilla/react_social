import React from 'react';
import styled from 'styled-components';
import {i18n} from '../../../i18n';

const StyledHr = styled.hr`
  margin: 0 0.625rem 0 0.625rem;
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 1px;
  padding: 0;
`;

const changeLang = (e, language) => {
  e.preventDefault();
  i18n.changeLanguage(language);
};

// Language list contents
function languageList() {
  return (
    <React.Fragment>
      <li>
        <a onClick={e => changeLang(e, 'en')}>
          English&nbsp; {i18n.language == 'en' && '(current)'}
        </a>
      </li>
      <StyledHr />
      <li>
        <a onClick={e => changeLang(e, 'nl')}>
          Dutch&nbsp; {i18n.language == 'nl' && '(current)'}
        </a>
      </li>
    </React.Fragment>
  );
}

export default languageList;
