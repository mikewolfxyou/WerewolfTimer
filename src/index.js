import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from "./configStore";
import registerServiceWorker from './registerServiceWorker';

const Store = configureStore();
// console.log(Store.getState());
// Store.subscribe(() =>
//     console.log(Store.getState())
// );
render(
<Provider store={Store}>
    <App />
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();
export default Store;
