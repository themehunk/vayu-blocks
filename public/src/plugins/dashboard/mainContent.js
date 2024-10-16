import { useState,useEffect } from '@wordpress/element';
import { RxGroup , RxHeading, RxButton} from "react-icons/rx";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { SiWoo } from "react-icons/si";
import { MdLockOutline } from "react-icons/md";
import { __ } from '@wordpress/i18n';
import { BiCertification } from "react-icons/bi";
import { RxWidth, RxPadding, RxSpaceBetweenHorizontally} from "react-icons/rx";
import { Spinner  } from '@wordpress/components';
import { VerifyKey } from '../../vayu-sites/template/verifykey';
import Sidebar from './sidebar';
import { IoGridOutline } from "react-icons/io5";
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaRegImage } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { icons } from '@wordpress/icons';
import { Icon } from '@wordpress/components';
import { symbolFilled } from '@wordpress/icons';

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

function MainContent({ activeTab, setActiveTab }) {

    const [navTab, setNavTab] = useState(1);
    const [isLoading, setLoading] = useState(false);

    // let vayuProStatus = '';
    // if(vayublock.vayuProStatus == 'activated'){
    //     vayuProStatus = 'vayu-pro-active';
    // }
    // else{
    //     vayuProStatus = ''; 
    // }
    
    const NavTabClick = (tabNumber) => {
        setNavTab(tabNumber);
    };    


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
   

    // Toggle Switch

    const [toggleSwitches, setToggleSwitches] = useState(vayublock.options);

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [globalData, setGlobalData] = useState({containerWidth:vayublock.options.global.containerWidth,
                                                containerGap:vayublock.options.global.containerGap,
                                                containerPadding:vayublock.options.global.containerPadding,
                                                });

    useEffect(() => {
        const newData = { ...toggleSwitches }; // Copy the object
        delete newData['global']; // Remove the key
        setToggleSwitches(newData); // Update state with the new object
    }, []);

// ajax data update
const optionPanel = (blockData) => {
    return fetch(vayublock.ajaxurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            action: 'vayu_blocks_option_panel',
            security: vayublock.nonce,
            inputData: JSON.stringify(blockData),
        }),
    })
    .then(response => response.json())
    .then(data => {
        setLoading(false);
        return data;
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error;
    });
};


// addons on/off data update
const handleToggleSwitchChange = (key, newValue) => {
    // type 1 is root array
    optionPanel({type:'addons',key:key,value:newValue});
}


// global data change
const handleGlobalDataChange = (e) => {
    const { name, value } = e.target;
    setGlobalData({ ...globalData, [name]: value });
    setBtnDisabled(false);
}

// global data update
const handleToggleSwitchClick = () => {
    setLoading(true);
    setBtnDisabled(true);
    optionPanel({type:'global',key:'global',value:globalData} );
}

// get all addons data
function getDescription(key,value='') {
            switch (key) {
                case 'container':
                    return {
                        value: value ===''? vayublock.options.container.isActive:value,
                        icon: <RxGroup />,
                        description: __('Container block allows you to create visually consistent and organized sections within your content area.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#container'
                    };
                case 'button':
                    return {
                        value: vayublock.options.button.isActive,
                        icon: <RxButton />,
                        description: __('Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };
                case 'product':
                    return {
                        value: vayublock.options.product.isActive,
                        icon: <SiWoo />,
                        description: __('This enables you to seamlessly integrate your WooCommerce products into your content, in posts or pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#WooCommerce-product'
                    };
                case 'heading':
                    return {
                        value: vayublock.options.heading.isActive,
                        icon: <RxHeading />,
                        description: __('Heading block is a fundamental content block used for creating and styling headings or titles within your posts or pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#Advance-headings'
                    };
                case 'spacer':
                    return {
                        value: vayublock.options.spacer.isActive,
                        icon: <AiOutlineArrowsAlt />,
                        description: __('Spacer block is used to create empty spaces between content blocks, improving visual separation and layout control.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#spacer'
                    };

                    case 'pointer':
                    return {
                        value: vayublock.options.pointer.isActive,
                        icon: <RxButton />,
                        description: __('Pointer Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: '#'
                    };

                    case 'productFilter':
                    return {
                        value: '',
                        icon: <SiWoo />,
                        description: __('Product filter Easily design attractive buttons with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: '#'
                    };

                    case 'postGrid':
                    return {
                        value: vayublock.options.postGrid.isActive,
                        icon: < IoGridOutline  />,
                        description: __('A custom block to display filtered posts with options for tags and categories.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };

                    case 'AdvanceSlider':
                    return {
                        value: vayublock.options.advanceSlider.isActive,
                        icon: <TfiLayoutSlider />,
                        description: __('A custom Loader to display block with options for dots and aerrow.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };

                    case 'FlipBox':
                    return {
                        value: vayublock.options.flipBox.isActive,
                        icon: <Icon icon={symbolFilled} />,
                        description: __('A custom image flip block with animated overlays that appear on hover. Supports flip animations and  customizable overlays.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };

                    case 'image':
                    return {
                        value: vayublock.options.image.isActive,
                        icon: <CiImageOn />,
                        description: __(' A customizable block that adds engaging animations to images, enhancing visual appeal and user interaction on web pages.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };

                    case 'megaMenu':
                    return {
                        value: vayublock.options.imageFlip.isActive,
                        icon: <RxButton />,
                        description: __('', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };

                    case 'advanceQueryLoop':
                    return {
                        value: vayublock.options.advanceQueryLoop.isActive,
                        icon: <RxButton />,
                        description: __('Easily design attractive Query Loop with Vayu Blocks advanced customizations.', 'vayu-blocks'),
                        link1: '#',
                        link2: 'https://themehunk.com/docs/vayu-blocks/#button'
                    };
                default:
                    return '';
            }
        }
    // Upgrade 
       const verifyKeyCheck = VerifyKey();

    return (<div className="th-content">
<div className="th-conatiner">
{activeTab === 'welcome' && (
    <div className="th-content-wrap th-welcome">
        <div className="th-main">
            <div className="th-main-wrap">
                <h2>{__('Welcome to Vayu Blocks', 'vayu-blocks')}</h2>
                <p>{__('Enhance your Block Editor with custom Vayu Blocks, crafting dynamic, visually appealing content layouts for a seamless and beautiful user experience.', 'vayu-blocks')}</p>
            </div>

            <div className={`sw-wrapprer`}>


            {isLoading ? (<Spinner/>) : (<> {Object.entries(toggleSwitches).map(([key, value]) => (
            <div className={`sw-box ${key}`} key={key}>
                <div className='th-sw-right'>
                    <div>
                    <label className='block-label'>{getDescription(key).icon}{key}</label>
                    {/* <ToggleSwitch initialValue={getDescription(key).value} onChange={newValue => handleToggleSwitchChange(key, newValue)} proStatus={value.pro} verifyLicense={verifyKeyCheck} /> */}

                    <ToggleSwitch onChange={(newValue) => handleToggleSwitchChange(key, newValue)}   verifyLicense={verifyKeyCheck} initialValue={getDescription(key).value}  />

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
         </div> {/* Welcome Data Close  */}

{/* Welcome page sidebar  */}
    <Sidebar />
    </div>
)}


{/* Setting Page  */}
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
                        name="containerWidth"
                        min="1"
                        max="2100"
                        value={globalData.containerWidth}
                        onChange={handleGlobalDataChange}
                    />
                <span className='unit'>{__('px','vayu-blocks')}</span>
                </div>

                <div className='option-wrapper'>
                <RxPadding /><p>{__('Padding', 'vayu-blocks')}</p>
                    <input
                        type='number'
                        id="padding"
                        name="containerPadding"
                        min="1"
                        max="1600"
                        value={globalData.containerPadding}
                        onChange={handleGlobalDataChange}
                    />
                    <span className='unit'>{__('px','vayu-blocks')}</span>
                </div>

                <div className='option-wrapper'>
                <RxSpaceBetweenHorizontally /><p>{__('Container Gap', 'vayu-blocks')} </p>
                    <input
                        type='number'
                        id="maxwidth"
                        name="containerGap"
                        min="1"
                        max="2100"
                        value={globalData.containerGap}
                        onChange={handleGlobalDataChange}
                    />
                    <span className='unit'>{__('px','vayu-blocks')}</span>
                </div>
                    <div className='option-submit'>
                        <button  onClick={()=>handleToggleSwitchClick(globalData)} disabled = {btnDisabled && 'disabled'}>  {/*onClick={handleSave} */}
                        {isLoading ? <Spinner style={{ height: 'calc(4px * 3)',width: 'calc(4px * 3)'}}/> : __('Save', 'vayu-blocks')}

                        
                        </button>
                    </div>

            </div>
            )}
        </div>
    </div>
</div> 
)}
{activeTab === 'sites' && window.location.assign( window.location.pathname+"?page=vayu-sites") }
</div>    
</div>
 );
}

export default MainContent;