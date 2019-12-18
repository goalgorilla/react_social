import Head from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import {API_URL} from './constants';
import {createHtmlMarkup} from './markup';

export function renderSearchResults(head, searchResults, svgs, loading) {
  if (searchResults && !loading) {
    return (
      <React.Fragment>
        <Head>{ReactHtmlParser(head)}</Head>
        <div dangerouslySetInnerHTML={createHtmlMarkup(searchResults)} />
        <div dangerouslySetInnerHTML={createHtmlMarkup(svgs)} />
      </React.Fragment>
    );
  } else if (!loading) {
    return <p>No results found.</p>;
  }
}

// This function parses the html response from Drupal
// It sets all the src's and href's to that of our React application
// And it returns
// - head = head tags, including scripts and meta tags
// - searchResults = the search results in html format
// - svgs = the svg icons that searchResults uses
export function parseSearchResponse(response) {
  // create document object model
  var dom = new DOMParser();
  var doc = dom.parseFromString(response.data, 'text/html');

  // remove member results title
  var titleElement = doc.getElementsByClassName('view-header');
  if (titleElement[0]) {
    titleElement[0].parentNode.removeChild(titleElement[0]);
  }

  // set all img src to our drupal domain
  var imgs = doc.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    var src = imgs[i].src;
    if (!src.includes(API_URL)) {
      let oldSrc = src.substring(src.indexOf('/sites'));
      let newSrc = API_URL + oldSrc;
      imgs[i].src = newSrc;
    }
  }

  // get user search results
  var htmlCollection = doc.getElementsByClassName('region--content');
  var searchResults = htmlCollection[0].outerHTML;

  // set all links (incl. stylesheets) href to our drupal domain
  var styleSheets = doc.getElementsByTagName('link');
  for (var i = 0; i < styleSheets.length; i++) {
    var href = styleSheets[i].href;
    if (!href.includes(API_URL)) {
      let oldHref = href.substring(href.indexOf('/sites'));
      let newHref = API_URL + oldHref;
      styleSheets[i].href = newHref;
    }
  }

  // set svgs
  const svgArray = doc.getElementsByTagName('svg');
  const svgs = svgArray[svgArray.length - 1].outerHTML;

  // set head tags
  const head = doc.head.innerHTML;

  return {searchResults, head, svgs};
}
