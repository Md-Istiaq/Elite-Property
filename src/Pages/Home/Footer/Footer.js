import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <section class='footer grid-cols-3 p-10 bg-neutral text-neutral-content"'>
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
                <div className='wave wave3'></div>
                <div className='wave wave4'></div>
                <div > 
                <span class="text-white">Legal</span> 
                <a class="link link-hover">Terms of use</a> 
                <a class="link link-hover">Privacy policy</a> 
                <a class="link link-hover">Cookie policy</a>
                </div>
                <div > 
                <span class="text-white">Social</span> 
                <a class="link link-hover">Twitter</a> 
                <a class="link link-hover">Instagram</a> 
                <a class="link link-hover">Facebook</a> 
                <a class="link link-hover">Github</a>
                </div> 
                <div>
                <span class="text-white">Company</span> 
                <a class="link link-hover">About us</a> 
                <a class="link link-hover">Contact</a> 
                <a class="link link-hover">Jobs</a> 
                <a class="link link-hover">Press kit</a>
                </div> 
            </section>
        </div>
    );
};

export default Footer;