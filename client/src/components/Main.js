import React from 'react'
import Dashboard from './Dashboard'
import LoginContainer from '../containers/LoginContainer'

const Main = (props) => {
    return (
        <div>
            {props.user ? <Dashboard /> : <LoginContainer />}
        </div>
    )
}

export default Main