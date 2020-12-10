import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './pages/nav'
import Home from'./pages/home'
import Footer from './pages/footer'
import img3 from './pages/assets/loading.svg'

export default function App() {
    const { isLoading, error } = useAuth0();
    if(isLoading){
        return <img src={img3} className='loader'/>
    }
    return (
        <>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
        </>
    )
}

