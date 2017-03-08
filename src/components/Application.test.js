import React from 'react';
import { shallow } from 'enzyme'; // test components in isolation from the child components they render
import App from './Application';

it('renders without crashing', () => {
  shallow(<Application />);
});
