import { createRoot, useState,useEffect } from '@wordpress/element';
import { RxGroup , RxHeading, RxButton} from "react-icons/rx";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { SiWoo } from "react-icons/si";
import { MdLockOutline } from "react-icons/md";
import { __ } from '@wordpress/i18n';
import { IoPeopleSharp,IoSparklesSharp,IoNewspaperSharp } from "react-icons/io5";
import { applyFilters } from '@wordpress/hooks';
import { BiCertification, BiCoinStack } from "react-icons/bi";
import { RxWidth, RxPadding, RxSpaceBetweenHorizontally} from "react-icons/rx";
import { FaSpinner } from 'react-icons/fa';

import { Provider } from 'react-redux';
import store from "../../vayu-sites/store";
import { VerifyKey } from '../../vayu-sites/template/verifykey';
import UpgradeButton from '../../vayu-sites/template/UpgradeButton';


function ChildComponent(props) {
    
    return (
        applyFilters('vayu_blocks_panelItems')
    );
}

const ToggleSwitch = ({ initialValue, onChange, proStatus, verifyLicense}) => {
    const [isChecked, setIsChecked] = useState(initialValue);

    const handleChange = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange(newValue); // Callback to parent component
    };
    if( !proStatus || proStatus && verifyLicense ){
        return (
            <label className="toggle-switch new-toggle">
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                <span className="slider round"></span>
            </label>
        );
    }
    else{
        return (
            <label className="toggle-switch">
                <MdLockOutline />
                 <span className="pro">
                    {'pro'}
                </span>
            </label>
        );  
    }
    
};

function MyPluginContent(){

    const [navTab, setNavTab] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [classLoading, setclassLoading] = useState('');

    let vayuProStatus = '';
    if(vayublock.vayuProStatus == 'activated'){
        vayuProStatus = 'vayu-pro-active';
    }
    else{
        vayuProStatus = ''; 
    }
    
    const NavTabClick = (tabNumber) => {
        setNavTab(tabNumber);
  };


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
            setLoading(true);
            setclassLoading('loading');
            const Url = `${vayublock.homeUrl2}/wp-json/vayu-blocks/v1/get-toggle-switch-values`;
            try {
                const response = await fetch(`${Url}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch toggle switch values');
                }
                setLoading(false);
                setclassLoading('');
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
    
        function getDescription(key) {
            switch (key) {
                case 'container':
                    return {
                        value: containerValue,
                        icon: <RxGroup />,
                        description: __('Container block allows you to create visually consistent and organized sections within your content area.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#container'
                    };
                case 'button':
                    return {
                        value: '',
                        icon: <RxButton />,
                        description: __('Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };
                case 'woo Product':
                    return {
                        value: '',
                        icon: <SiWoo />,
                        description: __('This enables you to seamlessly integrate your WooCommerce products into your content, in posts or pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#WooCommerce-product'
                    };
                case 'heading':
                    return {
                        value: '',
                        icon: <RxHeading />,
                        description: __('Heading block is a fundamental content block used for creating and styling headings or titles within your posts or pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#Advance-headings'
                    };
                case 'spacer':
                    return {
                        value: '',
                        icon: <AiOutlineArrowsAlt />,
                        description: __('Spacer block is used to create empty spaces between content blocks, improving visual separation and layout control.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#spacer'
                    };

                    case 'pointer':
                    return {
                        value: '',
                        icon: <RxButton />,
                        description: __('Pointer Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: '#'
                    };

                    case 'product Filter':
                    return {
                        value: '',
                        icon: <SiWoo />,
                        description: __('Product filter Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: '#'
                    };
                default:
                    return '';
            }
        }

        const [containerWidth, setContainerWidth] = useState('');
        const [containerGap, setContainerGap] = useState('');
        const [padding, setPadding] = useState('');
        const [containerValue, setcontainerValue] = useState(true);
        const [containerDescription, setcontainerDescription] = useState('');
        const [buttonColor, setButtonColor] = useState('');
        
        // Function to save input values
     // Function to save input values
const saveInputValues = async (blockData) => {
    setLoading(true);

    const data = {
        action: 'vayu_blocks_save_input_values',
        security: vayublock.nonce,
        inputData: JSON.stringify(blockData), // Serialize the block data object
    };

    try {
        const response = await fetch(vayublock.ajaxurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: new URLSearchParams(data).toString(),
        });

        const result = await response.json();

        if (!result.success) {
            throw new Error('Failed to save input values');
        }

        setLoading(false);
        console.log('Input values saved successfully');
    } catch (error) {
        setLoading(false);
        console.error('Error saving input values:', error);
    }
};

// Function to handle the save action
const handleSave = () => {
    const blocks = [
        {
            name: 'container',
            settings: {
                containerWidth, // Ensure these are defined in state
                containerGap,
                padding,
            },
            value: '', // State variable for container value
        },
        {
            name: 'button',
            settings: {
                buttonColor, // Ensure this is defined in state
            },
            value: '', // State variable for button value
        },
        // Add more blocks as needed, ensuring their state variables are properly managed
    ];

    // Build the blockData object dynamically
    const blockData = blocks.reduce((acc, block) => {
        acc[block.name] = {
            value: block.value, // Use the dynamic value from state
            pro: false, // Static if not dynamic
            description: `Some ${block.name} description`, // Static description if not dynamic
            settings: block.settings, // Use the dynamic settings from each block
        };
        return acc;
    }, {});

    saveInputValues(blockData);
};

        
        
        
        const getInputValues = async () => {
            const requestData = {
                action: 'vayu_blocks_get_input_values',
                security: vayublock.nonce,
            };
        
            try {
                const response = await fetch(vayublock.ajaxurl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    },
                    body: new URLSearchParams(requestData).toString(),
                });
        
                const result = await response.json();
        
                if (!result.success) {
                    throw new Error('Failed to retrieve input values');
                }
        
                const retrievedData = result.data;
        
                // Dynamically update your state based on the retrieved data
                for (let key in retrievedData) {
                    if (retrievedData.hasOwnProperty(key)) {
                        // const settings = retrievedData[key].settings;
                        const { value, pro, description, settings } = retrievedData[key];

                        switch (key) {
                            case 'container':
                                setContainerWidth(settings.containerWidth);
                                setContainerGap(settings.containerGap);
                                setPadding(settings.padding);
                                setcontainerValue(value);
                                break;
                            case 'button':
                                setButtonColor(settings.buttonColor);
                                break;
                            // Add more cases as needed...
                            default:
                                console.log('Unknown key:', key);
                        }
                    }
                }
            } catch (error) {
                console.error('Error retrieving input values:', error);
            }
        };
        
        
        

    // Fetch initial input values when component mounts
    useEffect(() => {
        getInputValues();
    }, []);

    // Function to handle checkbox change
    const handleCheckboxChange = (e) => {
        setButtonColor(e.target.checked);
    };
    // Upgrade 
       const verifyKeyCheck = VerifyKey();

    return (
        <>
      
        <div className="th-inner-wrap">
            
            <div className="th-header">
                <div className="th-conatiner">
                <div className="th-header-wrap">   
                <div className="th-logo-wrap">
                <img src={`${homeUrl}assets/img/logo-vayu.png`} />
                <h2> {__('VAYU BLOCKS', 'vayu-blocks')} </h2>
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
                   {__('Settings', 'vayu-blocks')} 
                </div>
                <div
                    className={`th-menu-item ${activeTab === 'sites' ? 'active' : ''}`}
                    onClick={() => handleTabClick('sites')}
                >
                   {__('Vayu Sites', 'vayu-blocks')} 
                </div>

                </div>
               <div className='header-text'>
               <UpgradeButton/>
                {/* {license.status === false && <Upgrade styles={btnStyle} />} */}
                </div>
                
                

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

        <div className={`sw-wrapprer ${vayuProStatus} ${classLoading}`}>
        {isLoading ? (<div className="vayu-loader"></div>) : (<> {Object.entries(toggleSwitches).map(([key, value]) => (
               <div className={`sw-box ${key}`} key={key}>
                    <div className='th-sw-right'>
                        <div>
                        <label className='block-label'>{getDescription(key).icon}{key}</label>
                        <ToggleSwitch initialValue={containerValue} onChange={newValue => handleToggleSwitchChange(key, newValue)} proStatus={value.pro} verifyLicense={verifyKeyCheck} />
                        </div>
                    </div>
                    <div className='th-sw-bottom'>
                        <p>{getDescription(key).description}</p>
                        {/* <a href={getDescription(key).link1} target="_blank">{__( 'View', 'vayu-blocks' )}</a> */}
                        <a href={getDescription(key).link2} target="_blank">{__( 'Doc', 'vayu-blocks' )}</a>
                    </div>

               </div>
               
            ))}
            </>
        )
        }
           
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
        <a href="https://wordpress.org/support/plugin/vayu-blocks/reviews/#new-post" target="_blank" className="sidebar-link">
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
        <a href="https://themehunk.com/docs/vayu-blocks/" target="_blank" className="sidebar-link">
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
                                <div className="th-content-wrap th-block th-settings">
                                 <div className="th-main">
      <aside>
        <nav>
        <a href="#" className={navTab === 1 ? 'selected' : ''} onClick={() => NavTabClick(1)}><BiCertification />{__('Editor Options','vayu-blocks')}</a>
        {/* <a href="#" className={navTab === 2 ? 'selected' : ''} onClick={() => NavTabClick(2)}><BiCoinStack />{__('Assets','vayu-blocks')}</a> */}
        </nav>
      </aside>
      <div className="content-wrapper">
        {navTab === 1 && (
           <div>
            {/* Content for Tab 1 */}
            <h2 className='wrapper-title'>{__('Editor Options','vayu-blocks')}</h2>
            <div className='option-wrapper'>
                <RxWidth /><p>{__('Container Width', 'vayu-blocks')} </p>
                <input
                    type='number'
                    id="maxwidth"
                    name="maxwidth"
                    min="1"
                    max="2100"
                    value={containerWidth}
                    onChange={(e) => setContainerWidth(e.target.value)}
                />
               <span className='unit'>{__('px','vayu-blocks')}</span>
            </div>

            <div className='option-wrapper'>
            <RxPadding /><p>{__('Padding', 'vayu-blocks')}</p>
                <input
                    type='number'
                    id="padding"
                    name="padding"
                    min="1"
                    max="1600"
                    value={padding}
                    onChange={(e) => setPadding(e.target.value)}
                />
                <span className='unit'>{__('px','vayu-blocks')}</span>
            </div>

            <div className='option-wrapper'>
            <RxSpaceBetweenHorizontally /><p>{__('Container Gap', 'vayu-blocks')} </p>
                <input
                    type='number'
                    id="maxwidth"
                    name="maxwidth"
                    min="1"
                    max="2100"
                    value={containerGap}
                    onChange={(e) => setContainerGap(e.target.value)}
                />
                 <span className='unit'>{__('px','vayu-blocks')}</span>
            </div>

            {/* <div className='option-wrapper'>
            <RxButton /><p>{__('Button Color', 'vayu-blocks')}</p>
                    <input
                        type="checkbox"
                        name="buttoncolor"
                        checked={buttonColor}
                        onChange={handleCheckboxChange}
                    />
            </div> */}
    
        </div>
        )}
        {navTab === 2 && (
          <div>
            {/* Content for Tab 2 */}
            <h2>Content for Tab 2</h2>
            <p>This is the content for Tab 2.</p>
          </div>
        )}
      </div>

      <div className='option-submit'>
            <button onClick={handleSave}>
            {isLoading ? <><FaSpinner className="icon-spin loader" /></> : __('Save', 'vayu-blocks')}
            </button>
      </div>
    </div>
               </div> 
            )}

        {activeTab === 'sites' && window.location.assign( window.location.pathname+"?page=vayu-sites") }
            </div>    
            </div>
            </div>
           
            </>
       
    );
}

const container = document.getElementById('vayu-blocks-container');

if (container) {
  // Use createRoot to create a root instance and then render the component
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
  <MyPluginContent />
  </Provider>
);
}