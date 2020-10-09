import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import ItemList from './ItemList'

describe('item list ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItemList />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('should render correctly in "debug" mode and match the snapshot', () => {
        const component = shallow(<ItemList debug />);
        expect(component).toMatchSnapshot();
      });
      
    });