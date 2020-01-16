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
import ClipLoader from 'react-spinners/ClipLoader';
import {
  parseSearchResponse,
  renderSearchResults,
} from '../../utils/searchUtils';
import {useRouter} from 'next/router';
import Card from '../../components/organisms/Card';
import CardHeader from '../../components/atoms/CardHeader';
import CardBody from '../../components/atoms/CardBody';
import TextButton from '../../components/atoms/TextButton';
import InputLabel from '../../components/atoms/InputLabel';
import SearchSelect from '../../components/atoms/SearchSelect';

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

const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;

function SearchGroups() {
  const user = useUser();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [htmlHead, setHtmlHead] = useState('');
  const [svgs, setSvgs] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGroups();
  }, []);

  const handleSearch = async e => {
    e.preventDefault();
    getGroups();
  };

  const getGroups = async e => {
    setLoading(true);

    // Applying page number when filtering groups results in
    // an illegal action error from Drupal
    // const pageNumber = router.query.page ? router.query.page : 0;

    const filter = searchFilter ? '?type=' + searchFilter : '';
    const searchUrl = encodeURI(
      `${API_URL}/search/groups/${searchQuery}${filter}`,
    );

    const {searchResults, head, svgs} = await axios
      .get(searchUrl, {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      })
      .then(response => {
        return parseSearchResponse(response);
      });
    setSearchResults(searchResults);
    setHtmlHead(head);
    setSvgs(svgs);
    setLoading(false);
  };

  const handleFilter = e => {
    e.preventDefault();
    getGroups();
  };

  const handleReset = e => {
    setSearchFilter('');
    getGroups();
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
              <MenuItem>All</MenuItem>
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
              <MenuItem active>Groups</MenuItem>
            </Link>
          </li>
        </ul>
      </SecondaryNavigation>
      <SearchContainer>
        <ContentRegion>
          <Title>Group results</Title>
          <ClipLoader loading={loading} />
          {renderSearchResults(htmlHead, searchResults, svgs, loading)}
        </ContentRegion>
        <ComplimentaryRegion>
          <Card>
            <CardHeader>Filter</CardHeader>
            <CardBody>
              <form onSubmit={handleFilter}>
                <InputLabel>Type</InputLabel>
                <SearchSelect
                  name="type"
                  onChange={e => setSearchFilter(e.target.value)}
                  value={searchFilter}
                >
                  <option value="">- Any -</option>
                  <option value="closed_group">Closed group</option>
                  <option value="open_group">Open group</option>
                  <option value="public_group">Public group</option>
                </SearchSelect>
                <FormButtons>
                  <TextButton onClick={handleReset}>Reset</TextButton>
                  <BaseButton type="submit" value="Apply" radius="small">
                    Apply
                  </BaseButton>
                </FormButtons>
              </form>
            </CardBody>
          </Card>
        </ComplimentaryRegion>
      </SearchContainer>
    </Layout>
  );
}

export default SearchGroups;
