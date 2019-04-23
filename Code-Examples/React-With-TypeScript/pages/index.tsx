import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { createStore } from 'redux';
import {
  WrappedWeather,
  WithWeatherProps,
  Weather
} from '../components/Weather';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <WithWeatherProps>
      {props => {
        return <Weather {...props} theme="yellow" />;
      }}
    </WithWeatherProps>
  </Provider>
);
