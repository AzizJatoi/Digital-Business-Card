import './App.css';
import React from "react"

function Footer() {
    return (
        <div>
            <Footer>
            <img src={require('../src/images/twitter.png')} alt="twitter logo" className='footer-icons'/>
            <img src={require('../src/images/facebook.png')} alt="facebook logo" className='footer-icons'/>
            <img src={require('../src/images/instagram.png')} alt="instagram logo" className='footer-icons'/>
            <img src={require('../src/images/linkedin.png')}alt="linkedin logo" className='footer-icons' />
            <img src={require('../src/images/github.png')} alt="github logo" className='footer-icons'/>
            </Footer>
        </div>
    )
}
export default Footer