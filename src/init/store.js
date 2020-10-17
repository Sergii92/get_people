import { createStore } from "redux";

import { rootReducer } from "./rootReducer";
import { watchFetchPeople } from "../bus/people/saga";

import { enhancedStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(watchFetchPeople);
