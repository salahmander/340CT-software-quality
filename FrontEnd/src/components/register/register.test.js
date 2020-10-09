import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import Register from './register'

describe('item list ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Register />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('should render correctly in "debug" mode and match the snapshot', () => {
        const component = shallow(<Register debug />);
        expect(component).toMatchSnapshot();
      });
      
    });