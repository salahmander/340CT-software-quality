import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom'

import PurchaseConfirmation from './purchaseConfirmation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PurchaseConfirmation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render correctly in "debug" mode and match the snapshot', () => {
  const component = shallow(<PurchaseConfirmation debug />);
  expect(component).toMatchSnapshot();
});
