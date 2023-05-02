import React from 'react';
import logo from '../../../public/logo.png'
const Footer = () => {
    return (
        <div className='text-white px-10 py-14 bg-black'>
            <div className='lg:flex gap-2'>
                <div className='mb-5 lg:mb-0'>
                    <img className='h-10 mb-2' src={logo} alt="" />
                    <p className='mb-4 text-gray-500'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <div>
                        
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:ml-auto text-center lg:text-left'>
                    <div>
                        <h4 className='text-xl font-semibold mb-3'>Company</h4>
                        <ul className='space-y-2 text-gray-500'>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold mb-3'>Product</h4>
                        <ul className='space-y-2 text-gray-500'>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold mb-3'>Support</h4>
                        <ul className='space-y-2 text-gray-500'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold mb-3'>Contact</h4>
                        <ul className='space-y-2 text-gray-500'>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div>
                <hr className='text-white mt-8' />
                <div className='mt-3 lg:flex justify-between text-gray-500'>
                    <p>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by Jobs.com</p>
                </div>

            </div>
        </div>
    );
};
export default Footer;