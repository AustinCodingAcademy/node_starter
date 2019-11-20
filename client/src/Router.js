import React from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import MainContainer from './containers/MainContainer'

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={MainContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router