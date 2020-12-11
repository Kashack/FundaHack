import React, {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faBell } from '@fortawesome/free-solid-svg-icons';
import './nav.css'
import img1 from './assets/IMG-20201209-WA0001.jpg'

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="signup" onClick={() => loginWithRedirect({screen_hint: "signup"})}>Sign Up</button>;
};

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="login" onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button className='logout' onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );
};

export default function nav() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const deep= ()=>{
        return async function deep(){
            const accessToken = await getAccessTokenSilently({
                audience: process.env.AUDIENCE,
                scope: "read:current_user",
            });
              console.log(accessToken)
              return accessToken
        }
    }
    return (
        <nav className='nav'>
            <img src={img1} />
            <ul>
                <li>Categories</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <div className="icons">
                {isAuthenticated?<FontAwesomeIcon className="i" icon={faHeart} size="lg"/>:<></>}
                <FontAwesomeIcon className="i" icon={faShoppingCart} size="lg"/>
                {isAuthenticated?<FontAwesomeIcon className="i" icon={faBell} size="lg"/>:<></>}
            </div>
            {isAuthenticated?
            <div className='divs'>
                <LogoutButton />
                <img src="" className="picture" />
            </div>:
            <div className='div'>
                <SignupButton />
                <LoginButton />
            </div>}
        </nav>
    )
}
