import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './pages/nav'

export default function App() {
    return (
        <Switch>
            <Nav />
        </Switch>
    )
}

