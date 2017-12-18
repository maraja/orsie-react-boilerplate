// Create final store using all reducers and applying middleware
import { createBrowserHistory } from 'history';
// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';

import localForage from 'localforage';

// Import all reducers
import * as reducers from 'reducers';


// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
export const history = createBrowserHistory();
const reducer = combineReducers({ ...reducers });

export default function configureStore() {

	return new Promise((resolve, reject) => {
    try {
      const store = compose(
		  // Enables your middleware:
		  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
		  applyMiddleware(logger, routerMiddleware(history)),
		  autoRehydrate(),
		  // Provides support for DevTools via Chrome extension
		  window.devToolsExtension ? window.devToolsExtension() : f => f
		)(createStore)(connectRouter(history)(reducer));

      persistStore(
        store,
        { storage: localForage },
        () => resolve(store)
      );
    } catch (e) {
      reject(e);
    }
  });

}


// const store = compose(
//   // Enables your middleware:
//   // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
//   applyMiddleware(logger, routerMiddleware(history)),
//   autoRehydrate(),
//   // Provides support for DevTools via Chrome extension
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore)(connectRouter(history)(reducer));

// persistStore(store, {storage: localForage})

// export default store;
