import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppComponentConnected } from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppComponentConnected />, div);
  ReactDOM.unmountComponentAtNode(div);
});
