import { render, useState,useEffect } from '@wordpress/element';
import { RxGroup , RxHeading, RxButton} from "react-icons/rx";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { SiWoo } from "react-icons/si";



function MyPluginContent(){

    const [activeTab, setActiveTab] = useState('welcome');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'blocks') {
            const newUrl = `${window.location.pathname}?page=vayu-blocks&path=blocks`;
            window.history.pushState(null, null, newUrl);
        }else{
            const newUrl = `${window.location.pathname}?page=vayu-blocks`;
            window.history.pushState(null, null, newUrl);
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const pathParam = searchParams.get('path');
 
        if (pathParam === 'blocks') {
            setActiveTab('blocks');
        }
    }, []);
    
    const homeUrl = vayublock.homeUrl;

    return (
        <div className="th-inner-wrap">
            
            <div className="th-header">
                <div className="th-conatiner">
                <div class="th-header-wrap">   
                <div class="th-logo-wrap">
                <img src={`${homeUrl}plugins/dashboard/img/vayu.png`} />
                <h2>Blocks</h2>
                </div>
                <div class="th-menu-wrap">
                     <div
                    className={`th-menu-item ${activeTab === 'welcome' ? 'active' : ''}`}
                    onClick={() => handleTabClick('welcome')}
                >
                    Welcome
                </div>
                <div
                    className={`th-menu-item ${activeTab === 'blocks' ? 'active' : ''}`}
                    onClick={() => handleTabClick('blocks')}
                >
                    Blocks
                </div>
                </div>
                <div className="th-last-wrap"><span>version 1.0</span></div>
                </div> 
                </div>
            </div>
            <div className="th-content">
            <div className="th-conatiner">
            {activeTab === 'welcome' && (
                <div className="th-content-wrap th-welcome">
                <div className="th-main">
                    <div className="th-main-wrap">
                        <h2>Welcome to Vayu Blocks</h2>
                        <p>We designed Spectra to be intuitive but we do recommend learning how it works by checking our comprehensive documentation and watching the video below. Enjoy your time with Spectra!</p>
                    </div>
                </div>
                <div className="th-sidebar">
                    <div className="sidebar-section">
    <div className="section">
        <h3>Leave us a review</h3>
        <p>We would love to hear your feedback.</p>
        <a href="https://www.trustpilot.com/review/themehunk.com" target="_blank" className="sidebar-link">
            Submit review
        </a>
    </div>
    <hr />
    <div className="section">
        <h3>Video Tutorials</h3>
        <p>Want a guide? We have video tutorials to walk you through getting started.</p>
        <a href="https://www.youtube.com/c/ThemeHunk" target="_blank" className="sidebar-link">
            Watch Videos
        </a>
    </div>
    <hr />
    <div className="section">
        <h3>Support</h3>
        <p>Have a question, we are happy to help! Get in touch with our support team.</p>
        <a href="https://themehunk.com/contact-us/" target="_blank" className="sidebar-link">
            Submit a Ticket
        </a>
    </div>
</div>
</div>
                </div>
            )}
            {activeTab === 'blocks' && (
                                <div className="th-content-wrap th-block">
                                <div className="th-main">
                                    <div className="th-main-wrap">
                                        <div className="th-block-wrap">
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><RxGroup></RxGroup></div>
                                                    <div className="th-block-desc">
                                                    <h3>Container</h3>
                                                    <p>You're almost there! Once you complete store setup you can start receiving orders.</p>
                                                    <a className="th-block-view" href="#" target='_blank'>View</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><RxHeading></RxHeading></div>
                                                    <div className="th-block-desc">
                                                    <h3>Heading</h3>
                                                    <p>You're almost there! Once you complete store setup you can start receiving orders.</p>
                                                    <a className="th-block-view" href="#" target='_blank'>View</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><AiOutlineArrowsAlt></AiOutlineArrowsAlt></div>
                                                    <div className="th-block-desc">
                                                    <h3>Spacer</h3>
                                                    <p>You're almost there! Once you complete store setup you can start receiving orders.</p>
                                                    <a className="th-block-view" href="#" target='_blank'>View</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><RxButton></RxButton></div>
                                                    <div className="th-block-desc">
                                                    <h3>Button</h3>
                                                    <p>You're almost there! Once you complete store setup you can start receiving orders.</p>
                                                    <a className="th-block-view" href="#" target='_blank'>View</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><SiWoo></SiWoo></div>
                                                    <div className="th-block-desc">
                                                    <h3>Product</h3>
                                                    <p>You're almost there! Once you complete store setup you can start receiving orders.</p>
                                                    <a className="th-block-view" href="#" target='_blank'>View</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
               </div> 
            )}
            </div>    
            </div>
            </div>
       
    );
}

const container = document.getElementById('vayu-blocks-container');

if (container) {
render(<MyPluginContent />, container);
}