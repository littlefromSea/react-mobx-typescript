import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './container/App';

//element style
import './index.scss';
import 'element-theme-default';

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
);