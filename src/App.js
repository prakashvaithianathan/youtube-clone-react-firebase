import React from "react";
import style from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import reducer from './Store/Reducer/User'
import {createStore} from 'redux'
import Home from './Pages/Home/Home'

const App = () => {
  const store = createStore(reducer)
  return <div className={style.container}>
<Provider store={store}>
<Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </Router>
</Provider>
  </div>;
};

export default App;
