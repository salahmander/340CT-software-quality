import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom'

import Header from './header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render correctly in "debug" mode and match the snapshot', () => {
  const component = shallow(<Header debug />);
  expect(component).toMatchSnapshot();
});
