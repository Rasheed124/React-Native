// import { combineReducers, createStore } from "redux";
// import { datareducer } from "./reducer/dataReducer";
// import { settingReducer } from "./reducer/settingReducer";

import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducer/dataReducer";

// const rootReducer = combineReducers({
//   datareducer: datareducer,
//   settingReducer: settingReducer,
// });
// const store = createStore(rootReducer);

// export default store;

export const store = configureStore({
  reducer: {
    dataReducer: dataReducer.reducer,
  },
});

// export type RootStates = ReturnType<typeof dataReducer.reducer>;
