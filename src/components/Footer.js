import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

export default function(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join my Newsletter to receive new apps updates
                </p>
                <p className="footer-subscription-text">
                    You can Unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" ></input>
                    <Button buttonStyle="btn--outline" >Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Work with Me</Link>
                        <Link to="/">Connect</Link>
                    </div>                    
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Join Me</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Work with Me</Link>
                        <Link to="/">Connect</Link>
                    </div>                    
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Me</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Work with Me</Link>
                        <Link to="/">Connect</Link>
                    </div>                    
                </div>
                
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Made with <i class="fas fa-heart"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Lohit © 2021</small>
                    <div className="social-icons" >                    
                        <Link to='/' className="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to='/' className="social-icon-link instagram" target="_blank" aria-label="instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link to='/' className="social-icon-link twitter" target="_blank" aria-label="twitter">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link to='//github.com/lohitpant' className="social-icon-link youtube" target="_blank" aria-label="youtube">
                        <i class="fab fa-github"></i>
                        </Link>
                        <Link to='//www.linkedin.com/in/lohitpant/' className="social-icon-link linkedin" target="_blank" aria-label="linkedin">
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}