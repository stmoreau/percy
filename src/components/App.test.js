import React from 'react';
import { shallow } from 'enzyme'; // test components in isolation from the child components they render
import App from './App';

it('App renders without crashing', () => {
  shallow(<App />);
});
