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
import ClipLoader from 'react-spinners/ClipLoader';
import {API_URL} from '../../utils/constants';
import {createHtmlMarkup} from '../../utils/markup';

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

function SearchContent() {
  const user = useUser();

  const [searchQuery, setSearchQuery] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContent();
  }, []);

  const handleSearch = e => {
    e.preventDefault();
  };

  const getContent = async e => {
    setLoading(true);
    // Get topics
    let topics = await axios.get(`${API_URL}/jsonapi/node/topic`, {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    });
    setContent(topics.data.data);

    // Get pages
    let pages = await axios.get(`${API_URL}/jsonapi/node/page`, {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    });
    setContent(content => [...content, ...pages.data.data]);

    // Get events
    let events = await axios.get(`${API_URL}/jsonapi/node/event`, {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    });
    setContent(content => [...content, ...events.data.data]);
    setLoading(false);
  };

  const renderSearchResults = () => {
    if (content.length && !loading) {
      return (
        <React.Fragment>
          {content.map(content => (
            <Card key={content.id}>
              <CardHeader>
                <Link href={'/node/' + content.attributes.drupal_internal__nid}>
                  {content.attributes.title}
                </Link>
              </CardHeader>
              <CardBody>
                {content.type}
                <br />
                {content.attributes.field_content_visibility}
              </CardBody>
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
              <MenuItem active>Content</MenuItem>
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
          <Title>Content results</Title>
          <ClipLoader loading={loading} />
          {renderSearchResults()}
        </ContentRegion>
        <ComplimentaryRegion></ComplimentaryRegion>
      </SearchContainer>
    </Layout>
  );
}

export default SearchContent;
