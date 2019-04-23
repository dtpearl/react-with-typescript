import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { createStore } from 'redux';
import { WrappedWeather } from '../components/Weather';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <WrappedWeather theme="yellow" />
  </Provider>
);
