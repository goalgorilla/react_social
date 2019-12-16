import React, {useState, useEffect} from 'react';
import {useUser} from '../../components/auth/userContext';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';
import InputLabel from '../../components/atoms/InputLabel';
import Title from '../../components/atoms/Title';
import Card from '../../components/organisms/Card';
import CardHeader from '../../components/atoms/CardHeader';
import CardBody from '../../components/atoms/CardBody';
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

function SearchGroups() {
  const user = useUser();

  const [searchQuery, setSearchQuery] = useState('');
  const [groups, setGroups] = useState('');
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
    // for logged in users
    if (user.token) {
      // Get Open Groups
      let openGroups = await axios.get(`${API_URL}/jsonapi/group/open_group/`, {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      });
      setGroups(openGroups.data.data);

      // Get Closed Groups
      let closedGroups = await axios.get(
        `${API_URL}/jsonapi/group/closed_group/`,
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        },
      );
      setGroups(groups => [...groups, ...closedGroups.data.data]);
    }

    // get Public Groups
    let publicGroups = await axios.get(
      `${API_URL}/jsonapi/group/public_group/`,
    );
    setGroups(groups => [...groups, ...publicGroups.data.data]);
    setLoading(false);
  };

  const renderSearchResults = () => {
    if (groups.length && !loading) {
      return (
        <React.Fragment>
          {groups.map(group => (
            <Card key={group.id}>
              <CardHeader>{group.attributes.label}</CardHeader>
              <CardBody>{group.id}</CardBody>
            </Card>
          ))}
        </React.Fragment>
      );
    } else if (!loading) {
      return <p>No results found.</p>;
    }
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
          {renderSearchResults()}
        </ContentRegion>
        <ComplimentaryRegion></ComplimentaryRegion>
      </SearchContainer>
    </Layout>
  );
}

export default SearchGroups;
