  
import { applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnchancers = devtools

const middleware = [sagaMiddleware];

const enhancedStore = composeEnchancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };