import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import Header from "./components/Header";
import MainPage from "./components/MainPage";

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
