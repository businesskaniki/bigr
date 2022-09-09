import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configstore';
import Detail from '../components/Detail';

describe('test detail component', () => {
  test('detail should be in the document', () => {
    render(
      <Provider store={store}>
        <Router><Detail /></Router>
      </Provider>,
    );
    const home = screen.getByRole('list');
    expect(home).toBeInTheDocument();
  });
  test('detail should match snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router><Detail /></Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
