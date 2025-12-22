import React, { useState } from 'react';
import { Icons } from './Icons';

const FooterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="footer-col">
            <div
                className="footer-heading-row"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4>{title}</h4>
                <span className={`footer-arrow md:hidden ${isOpen ? 'open' : ''}`}>
                    <Icons.ChevronDown />
                </span>
            </div>

            <div className={`footer-section-content ${isOpen ? 'block' : 'hidden'} md:block`}>
                {children}
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-top">
                <div className="footer-section-newsletter">
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p>Sign up for updates from mettā muse.</p>
                    <form className="newsletter-form-minimal" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="footer-section-contact">
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>

                    <h4 className="currency-title">CURRENCY</h4>
                    <div className="currency-display">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/20px-Flag_of_the_United_States.svg.png" alt="US Flag" className="flag-icon" />
                        <span>♦ USD</span>
                    </div>
                    <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>

            <div className="divider-line"></div>

            <div className="container footer-links-grid">
                <FooterSection title="mettā muse">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">Artisans</a></li>
                        <li><a href="#">Boutiques</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">EU Compliances Docs</a></li>
                    </ul>
                </FooterSection>

                <FooterSection title="QUICK LINKS">
                    <ul>
                        <li><a href="#">Orders & Shipping</a></li>
                        <li><a href="#">Join/Login as a Seller</a></li>
                        <li><a href="#">Payment & Pricing</a></li>
                        <li><a href="#">Return & Refunds</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </FooterSection>

                <FooterSection title="FOLLOW US">
                    <div className="social-section">
                        <div className="social-icons">
                            <span className="social-icon-circle"><Icons.Instagram /></span>
                            <span className="social-icon-circle"><Icons.Linkedin /></span>
                        </div>
                    </div>

                    <div className="payment-section">
                        <h4 className="payment-title">mettā muse ACCEPTS</h4>
                        <div className="payment-icons">
                            <span className="pay-icon">GPay</span>
                            <span className="pay-icon">Visa</span>
                            <span className="pay-icon">PayPal</span>
                            <span className="pay-icon">Amex</span>
                            <span className="pay-icon">ApplePay</span>
                            <span className="pay-icon">ShopPay</span>
                        </div>
                    </div>
                </FooterSection>
            </div>

            <div className="footer-bottom container">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
