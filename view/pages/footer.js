import React from 'react'
import './footer.css'
import img1 from './assets/IMG-20201209-WA0001.jpg'

export default function Footer() {
    return (
        <footer>
            <div className='cover'>
                <div className='log'>
                    <img src={img1} />
                    <p>Copyright {(new Date()).getFullYear()}, Fundahack.</p>
                    <p>All rights reserved</p>
                </div>
                <div className='us'>
                    <p>Become an instructor</p>
                    <p>Get the app</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className='us'>
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                </div>
                <div className='us'>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Sitemap</p>
                    <p>Features Course</p>
                </div>
            </div>
        </footer>
    )
}
