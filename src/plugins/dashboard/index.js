import { createRoot, useState,useEffect } from '@wordpress/element';
import { RxGroup , RxHeading, RxButton} from "react-icons/rx";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { SiWoo } from "react-icons/si";
import { __ } from '@wordpress/i18n';
import { IoPeopleSharp,IoSparklesSharp,IoNewspaperSharp } from "react-icons/io5";
import { applyFilters } from '@wordpress/hooks';


function ChildComponent(props) {
    
    return (
        applyFilters('vayu_blocks_panelItems')
    );
}

const ToggleSwitch = ({ initialValue, onChange }) => {
    const [isChecked, setIsChecked] = useState(initialValue);

    const handleChange = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange(newValue); // Callback to parent component
    };

    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            <span className="slider round"></span>
        </label>
    );
};

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

    // Toggle Switch

        const [toggleSwitches, setToggleSwitches] = useState({}); // Store toggle switch values
    
        // Fetch toggle switch values when component mounts
        useEffect(() => {
            fetchToggleSwitchValues();
        }, []);
    
        // Function to fetch toggle switch values
        const fetchToggleSwitchValues = async () => {
            const Url = `${vayublock.homeUrl2}/wp-json/vayu-blocks/v1/get-toggle-switch-values`;
            try {
                const response = await fetch(`${Url}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch toggle switch values');
                }
                const data = await response.json();
                setToggleSwitches(data);
            } catch (error) {
                console.error('Error fetching toggle switch values:', error);
            }
        };
    
        // Function to save toggle switch value
        const saveToggleSwitchValue = async (key, value) => {
            const Url = `${vayublock.homeUrl2}/wp-json/vayu-blocks/v1/save-toggle-switch`;
            try {
                const response = await fetch(`${Url}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        key: key,
                        value: value,
                    }),
                });
                if (!response.ok) {
                    throw new Error('Failed to save toggle switch value');
                }
            } catch (error) {
                console.error('Error saving toggle switch value:', error);
            }
        };
    
        // Callback function to handle toggle switch change
        const handleToggleSwitchChange = (key, newValue) => {
            setToggleSwitches(prevState => ({
                ...prevState,
                [key]: newValue,
            }));
            saveToggleSwitchValue(key, newValue);
        };


    return (
        <div className="th-inner-wrap">
            
            <div className="th-header">
                <div className="th-conatiner">
                <div className="th-header-wrap">   
                <div className="th-logo-wrap">
                <img src={`${homeUrl}assets/img/logo-vayu.png`} />
                <h2> {__('Blocks', 'vayu-blocks')} </h2>
                </div>
                <div className="th-menu-wrap">
                     <div
                    className={`th-menu-item ${activeTab === 'welcome' ? 'active' : ''}`}
                    onClick={() => handleTabClick('welcome')}
                >
                   {__('Welcome', 'vayu-blocks')}
                </div>
                <div
                    className={`th-menu-item ${activeTab === 'blocks' ? 'active' : ''}`}
                    onClick={() => handleTabClick('blocks')}
                >
                   {__('Blocks', 'vayu-blocks')} 
                </div>
                </div>
                <div className="th-last-wrap"><span>{__('version 1.0', 'vayu-blocks')}</span></div>
                </div> 
                </div>
            </div>
            <div className="th-content">
            <div className="th-conatiner">
            {activeTab === 'welcome' && (
                <div className="th-content-wrap th-welcome">
                <div className="th-main">
                    <div className="th-main-wrap">
                        <h2>{__('Welcome to Vayu Blocks', 'vayu-blocks')}</h2>
                        <p>{__('Enhance your Block Editor with custom Vayu Blocks, crafting dynamic, visually appealing content layouts for a seamless and beautiful user experience.', 'vayu-blocks')}</p>
                    </div>

        <div className='sw-wrapprer'>
            {Object.entries(toggleSwitches).map(([key, value]) => (
               <div className={`sw-box ${key}`}>
                    <div className='th-sw-right'>
                        <div key={key}>
                        <label className='block-label'>{key}</label>
                        <ToggleSwitch initialValue={value} onChange={newValue => handleToggleSwitchChange(key, newValue)} />
                        </div>
                    </div>

               </div>
               
            ))}
        </div>

        
                </div>
                <div className="th-sidebar">
                    <div className="sidebar-section">
    <div className="section">
        <div className="section-heading">
        <IoSparklesSharp></IoSparklesSharp>
        
        <h3>{__('Leave us a review', 'vayu-blocks')}</h3>
        </div>
        <p>{__('Show some love for Vayu Blocks by rating us and helping us grow more and do improvements.', 'vayu-blocks')}</p>
        <a href="https://www.trustpilot.com/review/themehunk.com" target="_blank" className="sidebar-link">
        {__('Submit review', 'vayu-blocks')} 
        </a>
    </div>
    <hr />
    <div className="section">
    <div className="section-heading">
   
        <IoNewspaperSharp></IoNewspaperSharp>
        <h3>{__('Documentation', 'vayu-blocks')} </h3>
        </div>
        
        <p>{__('Go through the easy documentation to get familiar with Vayu Blocks and its Features.', 'vayu-blocks')}</p>
        <a href="https://www.youtube.com/c/ThemeHunk" target="_blank" className="sidebar-link">
        {__('View Doc', 'vayu-blocks')} 
        </a>
    </div>
    <hr />
    <div className="section">
    <div className="section-heading">
     
        <IoPeopleSharp></IoPeopleSharp>
        
        <h3>{__('Support', 'vayu-blocks')}</h3>
        </div>
        <p>{__('Have a question, we are happy to help! Get in touch with our support team.', 'vayu-blocks')}</p>
        <a href="https://themehunk.com/contact-us/" target="_blank" className="sidebar-link">
        {__('Submit a Ticket', 'vayu-blocks')} 
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
                                                    <h3> {__('Container', 'vayu-blocks')} </h3>
                                                    <p>{__('Container block allows you to create visually consistent and organized sections within your content area.', 'vayu-blocks')}</p>
                                                    <a className="th-block-view" href="#" target='_blank'>{__('View', 'vayu-blocks')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><RxHeading></RxHeading></div>
                            
                                                    <div className="th-block-desc">
                                                    <h3> {__('Heading', 'vayu-blocks')} </h3>
                                                    <p>{__('Heading block is a fundamental content block used for creating and styling headings or titles within your posts or pages.', 'vayu-blocks')}</p>
                                                    <a className="th-block-view" href="#" target='_blank'>{__('View', 'vayu-blocks')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><AiOutlineArrowsAlt></AiOutlineArrowsAlt></div>
                                                    
                                                    <div className="th-block-desc">
                                                    <h3> {__('Spacer', 'vayu-blocks')} </h3>
                                                    <p>{__('Spacer block is used to create empty spaces between content blocks, improving visual separation and layout control.', 'vayu-blocks')}</p>
                                                    <a className="th-block-view" href="#" target='_blank'>{__('View', 'vayu-blocks')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><RxButton></RxButton></div>
                                                    
                                                    <div className="th-block-desc">
                                                    <h3> {__('Button', 'vayu-blocks')} </h3>
                                                    <p>{__('Easily design attractive buttons with Vayu Blocks’ advanced customizations.', 'vayu-blocks')}</p>
                                                    <a className="th-block-view" href="#" target='_blank'>{__('View', 'vayu-blocks')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="th-block-item">
                                                <div className="th-block-item-content">
                                                    <div className="th-block-icon"><SiWoo></SiWoo></div>
                                                    <div className="th-block-desc">
                                                    <h3> {__('Product', 'vayu-blocks')} </h3>
                                                    <p>{__('This enables you to seamlessly integrate your WooCommerce products into your content, in posts or pages.', 'vayu-blocks')}</p>
                                                    <a className="th-block-view" href="#" target='_blank'>{__('View', 'vayu-blocks')}</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <ChildComponent />
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
  // Use createRoot to create a root instance and then render the component
  const root = createRoot(container);
  root.render(<MyPluginContent />);
}