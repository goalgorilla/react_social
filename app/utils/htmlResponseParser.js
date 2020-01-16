import Head from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import {API_URL} from './constants';
import {createHtmlMarkup} from './markup';
import DOMParser from '../utils/domparser';
import Layout from '../components/Layout';
import styled from 'styled-components';

const DrupalContent = styled.div`
  margin: -50px 0 -100px 0;
`;

// This is a render function which is used for the rendering of Drupal pages
// This is not a generic render function
export function renderPage(head, body, svgs, scripts) {
  return (
    <Layout>
      <Head>{ReactHtmlParser(head)}</Head>
      <DrupalContent dangerouslySetInnerHTML={createHtmlMarkup(body)} />
      <div dangerouslySetInnerHTML={createHtmlMarkup(svgs)} />
      <div dangerouslySetInnerHTML={createHtmlMarkup(scripts)} />
    </Layout>
  );
}

// This function parses the html response from Drupal
// It sets all the src's and href's to that of our React application
// And it returns
// - head = head tags, including scripts and meta tags
// - body = the page body in html format
// - svgs = the svg icons that searchResults uses
export function parseResponse(response) {
  // create document object model
  const dom = new DOMParser(response.data);
  const doc = dom.window.document;

  // remove search element
  var searchElement = doc.getElementsByClassName('region--content-top');
  if (searchElement[0]) {
    searchElement[0].parentNode.removeChild(searchElement[0]);
  }

  // set all links (incl. stylesheets) href to our drupal domain
  var styleSheets = doc.getElementsByTagName('link');
  for (var i = 0; i < styleSheets.length; i++) {
    if (!styleSheets[i].href.includes(API_URL)) {
      let oldHref = styleSheets[i].href;
      let newHref = API_URL + oldHref;
      styleSheets[i].href = newHref;
    }
  }

  // set all img src to our drupal domain
  var imgs = doc.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    if (!imgs[i].src.includes(API_URL)) {
      let oldSrc = imgs[i].src;
      let newSrc = API_URL + oldSrc;
      imgs[i].src = newSrc;
    }
  }

  // remove the drupal domain href from a tags (drupaldomain.com/user -> /user)
  var a = doc.getElementsByTagName('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].href.includes(API_URL)) {
      let oldHref = a[i].href;
      let newHref = oldHref.replace(API_URL, '');
      a[i].href = newHref;
    }
  }

  // set all script src to our drupal domain
  var htmlScripts = '';
  var scripts = doc.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    if (!scripts[i].src.includes(API_URL)) {
      let oldSrc = scripts[i].src;
      let newSrc = API_URL + oldSrc;
      scripts[i].src = newSrc;
    }
    htmlScripts += scripts[i].outerHTML;
  }

  // set head, body
  const htmlHead = doc.head.innerHTML;
  const htmlBody = doc.getElementById('content').outerHTML;

  // set svgs
  const svgArray = doc.getElementsByTagName('svg');
  const svgs = svgArray[svgArray.length - 1].outerHTML;

  return {
    body: htmlBody,
    head: htmlHead,
    svgs: svgs,
    scripts: htmlScripts,
  };
}
