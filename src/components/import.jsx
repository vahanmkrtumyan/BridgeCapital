import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class Import extends Component  {
      render() {
        const html = '<div>Example HTML string</div>';
        return <div>{ ReactHtmlParser(html) }</div>;
      }
    }
