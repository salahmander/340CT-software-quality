import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import ComputerSelect from './computerSelect'

describe('item list ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ComputerSelect />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('should render correctly in "debug" mode and match the snapshot', () => {
        const component = shallow(<ComputerSelect debug />);
        expect(component).toMatchSnapshot();
      });
      
    });