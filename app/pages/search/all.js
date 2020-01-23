import React, {useState, useEffect} from 'react';
import {useUser} from '../../components/auth/userContext';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';
import Title from '../../components/atoms/Title';
import ContentRegion from '../../components/organisms/ContentRegion';
import ComplimentaryRegion from '../../components/organisms/ComplimentaryRegion';
import BaseButton from '../../components/atoms/BaseButton';
import PageTitle from '../../components/atoms/PageTitle';
import SearchIcon from '../../components/atoms/SearchIcon';
import MenuItem from '../../components/atoms/MenuItem';
import SecondaryNavigation from '../../components/molecules/SecondaryNavigation';
import SearchInputLabel from '../../components/atoms/SearchInputLabel';
import SearchBlockHero from '../../components/atoms/SearchBlockHero';
import SearchHeroForm from '../../components/molecules/SearchHeroForm';
import {API_URL} from '../../utils/constants';
import {
  parseSearchResponse,
  renderSearchResults,
} from '../../utils/searchUtils';
import ClipLoader from 'react-spinners/ClipLoader';
import {useRouter} from 'next/router';

const SearchContainer = styled.div`
  margin: auto;
  padding: ${props => props.theme.layout.padding};
  max-width: ${props => props.theme.layout.maxWidth};
  display: flex;
  flex-wrap: wrap;
`;

const SearchInput = styled(Input)`
  display: block;
  width: 100%;
  border: none;
`;

const SearchButton = styled(BaseButton)`
  border: none;
  margin-left: -3px;
  border-radius: 0 3px 3px 0;
`;

function SearchAll() {
  const user = useUser();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [htmlHead, setHtmlHead] = useState('');
  const [svgs, setSvgs] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    getAll();
  };

  const getAll = async e => {
    setLoading(true);

    const pageNumber = router.query.page ? router.query.page : 0;

    const {searchResults, head, svgs} = await axios
      .get(
        encodeURI(`${API_URL}/search/all/${searchQuery}?page=${pageNumber}`),
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        },
      )
      .then(response => {
        return parseSearchResponse(response);
      });
    setSearchResults(searchResults);
    setHtmlHead(head);
    setSvgs(svgs);
    setLoading(false);
  };

  return (
    <Layout title="Search">
      <SearchBlockHero>
        <PageTitle>Search</PageTitle>
        <SearchHeroForm onSubmit={handleSearch}>
          <SearchInputLabel forInput="search" />
          <SearchInput
            type="text"
            name="search"
            value={searchQuery}
            id="search"
            onChange={e => setSearchQuery(e.target.value)}
          />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchHeroForm>
      </SearchBlockHero>
      <SecondaryNavigation>
        <ul>
          <li>
            <Link href="/search/all" scroll={false}>
              <MenuItem active>All</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/content" scroll={false}>
              <MenuItem>Content</MenuItem>
            </Link>
          </li>
          {user.token && (
            <li>
              <Link href="/search/users" scroll={false}>
                <MenuItem>Users</MenuItem>
              </Link>
            </li>
          )}
          <li>
            <Link href="/search/groups" scroll={false}>
              <MenuItem>Groups</MenuItem>
            </Link>
          </li>
        </ul>
      </SecondaryNavigation>
      <SearchContainer>
        <ContentRegion>
          <Title>All results</Title>
          <ClipLoader loading={loading} />
          {renderSearchResults(htmlHead, searchResults, svgs, loading)}
        </ContentRegion>
        <ComplimentaryRegion></ComplimentaryRegion>
      </SearchContainer>
    </Layout>
  );
}

export default SearchAll;
