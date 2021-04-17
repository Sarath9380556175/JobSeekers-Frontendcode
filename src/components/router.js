import React from 'react';

import {Route,BrowserRouter} from 'react-router-dom'
import Appform from './applicationform';
import Thankyou from './thanyou';
class Router extends React.Component{
    render()
    {
        return(
            <BrowserRouter>
            <Route exact path="/" component={Appform}/>
            <Route exact path="/thankyou" component={Thankyou}/>
            </BrowserRouter>
        )
    }
}

export default Router;