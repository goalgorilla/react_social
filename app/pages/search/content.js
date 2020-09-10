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
import Spinner from '../../components/atoms/Spinner';
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
import {useRouter} from 'next/router';
import Card from '../../components/organisms/Card';
import CardHeader from '../../components/atoms/CardHeader';
import CardBody from '../../components/atoms/CardBody';
import TextButton from '../../components/atoms/TextButton';
import InputLabel from '../../components/atoms/InputLabel';
import BlockFormField from '../../components/molecules/BlockFormField';
import SearchSelect from '../../components/atoms/SearchSelect';

const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

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
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [htmlHead, setHtmlHead] = useState('');
  const [svgs, setSvgs] = useState('');
  const [loading, setLoading] = useState(true);

  const [contentType, setContentType] = useState('All');
  const [timePeriod, setTimePeriod] = useState('before');
  const [eventDate, setEventDate] = useState('');
  const [eventDateMax, setEventDateMax] = useState('');

  useEffect(() => {
    getContent();
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    getContent();
  };

  const getContent = async e => {
    setLoading(true);

    const contentFilter = '?type=' + contentType;

    // Selects the correct operator based on the selected time period filter (before, after, between)
    var timePeriodFilter = '&field_event_date_op=';
    switch (timePeriod) {
      case 'before':
        timePeriodFilter += '<';
        break;
      case 'after':
        timePeriodFilter += '>';
        break;
      case 'between':
        timePeriodFilter += 'between';
        break;
    }

    // if 'between' then set the min and max date in the query
    if (timePeriod === 'between') {
      timePeriodFilter +=
        '&field_event_date[value]=&field_event_date[min]=' +
        eventDate +
        '&field_event_date[max]=' +
        eventDateMax;
    } else {
      timePeriodFilter +=
        '&field_event_date[value]=' +
        eventDate +
        '&field_event_date[min]=&field_event_date[max]=';
    }
    timePeriodFilter += '&created_op&login_op';

    const dateFilter = timePeriodFilter;

    const pageNumber = router.query.page ? router.query.page : 0;
    const pageFilter = dateFilter
      ? '&page=' + pageNumber
      : '?page=' + pageNumber;

    const {searchResults, head, svgs} = await axios
      .get(
        encodeURI(
          `${API_URL}/search/content/${searchQuery +
            contentFilter +
            dateFilter +
            pageFilter}`,
        ),
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

  const handleSubmit = e => {
    e.preventDefault();
    getContent();
  };

  const handleReset = e => {
    setContentType('All');
    setTimePeriod('before');
    setEventDate('');
    setEventDateMax('');
    getContent();
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
          {loading && <Spinner />}
          {renderSearchResults(htmlHead, searchResults, svgs, loading)}
        </ContentRegion>
        <ComplimentaryRegion>
          <Card>
            <CardHeader>Filter</CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <BlockFormField>
                  <InputLabel>Type</InputLabel>
                  <SearchSelect
                    name="type"
                    onChange={e => setContentType(e.target.value)}
                    value={contentType}
                  >
                    <option value="All">- Any -</option>
                    <option value="event">Event</option>
                    <option value="page">Basic Page</option>
                    <option value="topic">Topic</option>
                  </SearchSelect>
                </BlockFormField>
                {contentType === 'event' && (
                  <BlockFormField>
                    <InputLabel>Date of Event</InputLabel>
                    <SearchSelect
                      name="type"
                      onChange={e => setTimePeriod(e.target.value)}
                      value={timePeriod}
                    >
                      <option value="before">Before</option>
                      <option value="after">After</option>
                      <option value="between">Between</option>
                    </SearchSelect>
                    <Input
                      type="date"
                      name="date"
                      onChange={e => setEventDate(e.target.value)}
                    ></Input>
                    {timePeriod === 'between' && contentType === 'event' && (
                      <React.Fragment>
                        <InputLabel>and</InputLabel>
                        <Input
                          type="date"
                          name="date"
                          onChange={e => setEventDateMax(e.target.value)}
                        ></Input>
                      </React.Fragment>
                    )}
                  </BlockFormField>
                )}

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

export default SearchContent;
