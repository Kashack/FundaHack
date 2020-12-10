import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
   window.location.href="/"
  };

ReactDOM.render(
    <BrowserRouter>
        <Auth0Provider
            domain={process.env.DOM_CLIENT}
            clientId={process.env.CID_CLIENT}
            audience={process.env.AUDIENCE}
            scope="read:current_user update:current_user_metadata"
            redirectUri="http://localhost:3000"
            onRedirectCallback={onRedirectCallback}>
            <App />
        </Auth0Provider>
    </BrowserRouter>,
     document.getElementById('root'))