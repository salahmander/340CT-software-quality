import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import Home from './home'

describe('item list ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('should render correctly in "debug" mode and match the snapshot', () => {
        const component = shallow(<Home debug />);
        expect(component).toMatchSnapshot();
      });
      
    });