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


const ToggleSwitch = ({ initialValue, onChange, proStatus, verifyLicense }) => {
    const [isChecked, setIsChecked] = useState(initialValue);

    const handleChange = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange(newValue); // Callback to parent component
    };

    if (!proStatus || (proStatus && verifyLicense)) {
        return (
            <label className="toggle-switch new-toggle">
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                <span className="slider round"></span>
            </label>
        );
    } else {
        return (
            <label className="toggle-switch">
                <MdLockOutline />
                <span className="pro">{'pro'}</span>
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

    const [toggleSwitches, setToggleSwitches] = useState({
        container: true,
        button: false,
        heading: false,
        spacer: false,
        product: false,
        postGrid: false,
        slider: false,
    });

    const [containerWidth, setContainerWidth] = useState('');
    const [containerGap, setContainerGap] = useState('');
    const [padding, setPadding] = useState('');
    const [containerValue, setcontainerValue] = useState(true);
    const [buttonValue, setbuttonValue] = useState(0);
    const [headingValue, setheadingValue] = useState(0);
    const [productValue, setproductValue] = useState(0);
    const [spacerValue, setspacerValue] = useState(0);
    const [postGridValue, setpostGridValue] = useState(0);
    const [sliderValue, setsliderValue] = useState(0);
    const [buttonColor, setButtonColor] = useState(0);

     // Fetch initial input values when component mounts
     useEffect(() => {
        getInputValues();
    }, []);
    
    useEffect(() => {
        // Call handleSave whenever toggleSwitches state changes
        handleSave();
    }, [toggleSwitches]);

    


// const saveInputValues = async () => {
//     setLoading(true);

//     // Gather all block data dynamically, assuming the relevant state variables exist for each block
//     const blockData = {
//         container: {
//             value: containerValue,
//             settings: {
//                 containerWidth,
//                 containerGap,
//                 padding,
//             },
//         },
//         button: {
//             value: buttonValue,
//             settings: {
//                 buttonColor,
//             },
//         },
//         heading: {
//             value: headingValue,
//             settings: {
//                 // Add other heading-related settings here
//             },
//         },
//         spacer: {
//             value: spacerValue,
//             settings: {
//                 // Add other spacer-related settings here
//             },
//         },
//         product: {
//             value: productValue,
//             settings: {
//                 // Add other product-related settings here
//             },
//         },
//         postGrid: {
//             value: postGridValue,
//             settings: {
//                 // Add other post-grid-related settings here
//             },
//         },
//         slider: {
//             value: sliderValue,
//             settings: {
//                 // Add other slider-related settings here
//             },
//         },
//         // Add more blocks as needed...
//     };

//     const data = {
//         action: 'vayu_blocks_save_input_values',
//         security: vayublock.nonce,
//         inputData: JSON.stringify(blockData), // Serialize the block data object
//     };

//     try {
//         const response = await fetch(vayublock.ajaxurl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             },
//             body: new URLSearchParams(data).toString(),
//         });

//         const result = await response.json();

//         if (!result.success) {
//             throw new Error('Failed to save input values');
//         }

//         setLoading(false);
//         console.log('Input values saved successfully');
//     } catch (error) {
//         setLoading(false);
//         console.error('Error saving input values:', error);
//     }
// };

// Assuming this is your AJAX call function
const saveInputValues = (blockData) => {
    // Convert boolean true/false to 1/0
    Object.keys(blockData).forEach(key => {
        if (typeof blockData[key].value === 'boolean') {
            blockData[key].value = blockData[key].value ? 1 : 0;
        }
    });

    return fetch(vayublock.ajaxurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            action: 'vayu_blocks_save_input_values',
            security: vayublock.nonce,
            inputData: JSON.stringify(blockData),
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        return data;
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error;
    });
};



const handleToggleSwitchChange = (key, newValue) => {
    setToggleSwitches(prevState => ({
        ...prevState,
        [key]: newValue,
    }));
};


const handleSave = () => {
    const blocks = [
        {
            name: 'container',
            value: toggleSwitches.container || 1,
            settings: { containerWidth, containerGap, padding }
        },
        {
            name: 'button',
            value: toggleSwitches.button || 0,
            settings: { buttonColor }
        },
        {
            name: 'heading',
            value: toggleSwitches.heading || 0,
            settings: {}
        },
        {
            name: 'spacer',
            value: toggleSwitches.spacer || 0,
            settings: {}
        },
        {
            name: 'product',
            value: toggleSwitches.product || 0,
            settings: {}
        },
        {
            name: 'postGrid',
            value: toggleSwitches['postGrid'] || 0,
            settings: {}
        },
        {
            name: 'slider',
            value: toggleSwitches.slider || 0,
            settings: {}
        },
    ];

    const blockData = blocks.reduce((acc, block) => {
        acc[block.name] = {
            value: block.value,
            settings: block.settings,
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

        // Update state dynamically based on the retrieved data
        for (let key in retrievedData) {
            if (retrievedData.hasOwnProperty(key)) {
                const { value, settings } = retrievedData[key];

                // Normalize key names if necessary
                const normalizedKey = key.replace(/-/, '');

                // Always update toggle switches
                setToggleSwitches(prevState => ({
                    ...prevState,
                    [normalizedKey]: value === '1' // Convert "1"/"0" to true/false
                }));

                switch (normalizedKey) {
                    case 'container':
                        setContainerWidth(settings.containerWidth);
                        setContainerGap(settings.containerGap);
                        setPadding(settings.padding);
                        setcontainerValue(value);
                        break;
                    case 'button':
                        setButtonColor(settings.buttonColor);
                        setbuttonValue(value);
                        break;
                    case 'heading':
                        setheadingValue(value);
                        break;
                    case 'product':
                        setproductValue(value);
                        break;
                    case 'spacer':
                        setspacerValue(value);
                        break;

                    case 'postGrid':
                        setpostGridValue(value);
                        break;
                    case 'slider':
                        setsliderValue(value);
                        break;
                    // Add more cases as needed...
                }
            }
        }
    } catch (error) {
        console.error('Error retrieving input values:', error);
    }
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
                        value: buttonValue,
                        icon: <RxButton />,
                        description: __('Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };
                case 'Product':
                    return {
                        value: productValue,
                        icon: <SiWoo />,
                        description: __('This enables you to seamlessly integrate your WooCommerce products into your content, in posts or pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#WooCommerce-product'
                    };
                case 'heading':
                    return {
                        value: headingValue,
                        icon: <RxHeading />,
                        description: __('Heading block is a fundamental content block used for creating and styling headings or titles within your posts or pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#Advance-headings'
                    };
                case 'spacer':
                    return {
                        value: spacerValue,
                        icon: <AiOutlineArrowsAlt />,
                        description: __('Spacer block is used to create empty spaces between content blocks, improving visual separation and layout control.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#spacer'
                    };

                    case 'pointer':
                    return {
                        value: buttonValue,
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

                    case 'postGrid':
                    return {
                        value: postGridValue,
                        icon: <RxButton />,
                        description: __('Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };

                    case 'slider':
                    return {
                        value: sliderValue,
                        icon: <RxButton />,
                        description: __('Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };
                default:
                    return '';
            }
        }

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
               <div className={`sw-box ${key}`} key={key} values={value}>
                    <div className='th-sw-right'>
                        <div>
                        <label className='block-label'>{getDescription(key).icon}{key}</label>
                        <ToggleSwitch initialValue={getDescription(key).value} onChange={newValue => handleToggleSwitchChange(key, newValue)} proStatus={value.pro} verifyLicense={verifyKeyCheck} />
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