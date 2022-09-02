import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Country from '../components/Country';

it('Render <Countries /> correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Country id="80" country="Nigeria" countryCode="NG"/>
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
