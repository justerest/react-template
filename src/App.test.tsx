import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppComponent } from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
