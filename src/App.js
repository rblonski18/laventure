import './App.css';
import NewAccount from "./newaccount";
import MainPage from "./components/MainPage"
import Login from './login';
import NewActivity from "./NewActivity";
import ActivityPage from "./components/ActivityPage"

import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/mainpage" component={MainPage}/>
                    <Route exact path="/newaccount" component={NewAccount}/>
                    <Route exact path="/newactivity" component={NewActivity}/>
                    <Route path="/activity/:activityID" component={ActivityPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
