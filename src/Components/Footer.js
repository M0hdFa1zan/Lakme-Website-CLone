import React from 'react'
import Links from './Links'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="subs">
                <p id='title'>Subscribe to Aesop Communication</p>
                <hr />
                <div id='inpu'><input id='inp' type="mail" placeholder="Email address" /></div>
                <div id='check'><input type="checkbox" id="checkb" />
                    <label for="check">Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</label>
                </div>
            </div>
            <div className='one'>
                <Links
                    title="Orders and Support"
                    a="Contact Us"
                    b="FAQs"
                    c="Shipping"
                    d="Returns"
                    e="Order History"
                    f="Terms and Conditions"
                />
            </div>
            <div className='two'>
                <Links
                    title="Seervices"
                    a="Live Assistance"
                    b="Corporate gifts"
                    c="Facial Appointments"
                    d="Click and Collect"
                    e="Video consultation"
                />
            </div>
            <div className='three'>
                <p id='title'>Location preferences</p>
                <hr />
                <p>Shipping:</p>
                <p id='under'>Hong Kong SAR, China</p>
                <p>Language:</p>
                <p id='under'>English</p>
                <p>繁體中文</p>
            </div>
            <div className='sust'>
                <p id='title'>Sustainability</p>
                <hr />
                <p id='suspara'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
            </div>
            <div className='four'>
                <Links
                    title="About"
                    a="Our Story"
                    b="Foundation"
                    c="Careers"
                    d="Privacy policy"
                    e="Accessibility"
                    f="Cookie Policy"
                />
            </div>
            <div className='five'>
                <Links
                    title="Social Media"
                    a="Instagram"
                    b="Twitter"
                    c="LinkedIn"
                    d="WeChat"
                    e="Weibo"
                />
            </div>
        </div>
    )
}

export default Footer