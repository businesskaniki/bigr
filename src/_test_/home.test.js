import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configstore';
import Home from '../components/Home';

describe('Home', () => {
  test('should match home snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
