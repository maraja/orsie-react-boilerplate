import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import routes from 'routes';


async function init() {
	const store = await configureStore()
	ReactDOM.render(
	  <Provider store={store}>
	  	{routes}
	  </Provider>,
	  document.getElementById('react')
	);
}



init();