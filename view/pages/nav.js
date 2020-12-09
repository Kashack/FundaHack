import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="signup" onClick={() => loginWithRedirect({screen_hint: "signup"})}>Log In</button>;
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
    return (
        <nav className='nav'>
            <img src="" />
            <ul>
                <li>Categories</li>
                <li>Skills</li>
                <li>Teach On FunHack</li>
            </ul>
            <div>
                <SignupButton />
                <LoginButton />
            </div>
        </nav>
    )
}
