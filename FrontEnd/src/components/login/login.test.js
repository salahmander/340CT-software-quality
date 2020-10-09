import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import Login from './login'

describe('item list ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('should render correctly in "debug" mode and match the snapshot', () => {
        const component = shallow(<Login debug />);
        expect(component).toMatchSnapshot();
      });
      
    });