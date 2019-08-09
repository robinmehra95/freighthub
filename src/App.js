import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.scss';
import Home from "./Views";
import DetailPage from "./Views/DetailPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/detail/:id" component={DetailPage} />
            </Switch>
        </div>
    );
}

export default App;
