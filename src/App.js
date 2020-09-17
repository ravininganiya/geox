import React from 'react';
import Home from './Component/Home/index';
import {Switch, Route} from 'react-router';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import AboutUs from './Component/AboutUs';
import LoginUser from './Component/LoginUser';
import MyProject from './Component/MyProject';

const App = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/LoginUser" component={LoginUser} />
                <Route exact path="/MyProject" component={MyProject} />
                
            </Switch>
        </div>
    );
};
export default App;
