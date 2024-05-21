import { useEffect,useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { Icon, styles } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';

import { useSelector} from 'react-redux';
import { VerifyKey } from './verifykey';
import {PluginStatusChecker} from './PluginStatusChecker';
import { Logo, Upgrade,Version } from '../aisb';


export default function UpgradeButton(props){
    const [load, setLoad] = useState(false);
    const [activeBtn, setActiveBtn] = useState(null);


    const pluginStatus =  PluginStatusChecker('vayu-blocks-pro/vayu-blocks-pro');
    const license = useSelector((state)=>state.licenseActivate);


    useEffect(() => {
       
        console.log(pluginStatus,'status');

        if(pluginStatus.isInstalled && pluginStatus.isInstalled !==null){

            if(pluginStatus.isActive){
                setActiveBtn(3);
                setLoad(true);
            }else if (pluginStatus.isActive === false){
                setActiveBtn(2)
                setLoad(true);

                // return (<>{props.btn && <a href={AISB.upgrade} target='_blank'>
                // <Button variant="primary" className='aisb-upgrade-btn' style={props.styles}>
                // <Icon icon={<svg  viewBox="0 0 1024 1024" class="icon"  version={Version}><path d="M57 438.312l109.536 488.72h697.336l109.536-488.72-259.176 156.816-187.856-333.088-205.352 333.088z" fill="#EC9312" /><path d="M629.048 211.888c0 58.912-47.752 106.656-106.672 106.656-58.92 0-106.664-47.744-106.664-106.656 0-58.976 47.744-106.656 106.664-106.656s106.672 47.688 106.672 106.656z" fill="#CB1B5B" /><path d="M522.376 105.232c-58.92 0-106.664 47.68-106.664 106.656 0 58.912 47.744 106.656 106.664 106.656V105.232z" fill="#E5226B" /><path d="M57 438.312l109.536 488.72h697.336z" fill="#F4A832" /><path d="M973.408 438.312l-109.536 488.72H166.536z" fill="#F4A832" /><path d="M166.536 927.032h697.336L515.2 715.832z" fill="#F5B617" /><path d="M1017.856 409.44a55.2 55.2 0 0 1-55.264 55.208 55.184 55.184 0 0 1-55.216-55.208 55.2 55.2 0 0 1 55.216-55.264 55.2 55.2 0 0 1 55.264 55.264z" fill="#0472AF" /><path d="M962.592 354.176a55.2 55.2 0 0 0-55.216 55.264 55.184 55.184 0 0 0 55.216 55.208V354.176z" fill="#1A8DCC" /><path d="M116.656 409.44a55.216 55.216 0 0 1-55.272 55.208A55.208 55.208 0 0 1 6.144 409.44a55.208 55.208 0 0 1 55.24-55.264 55.224 55.224 0 0 1 55.272 55.264z" fill="#0472AF" /><path d="M61.384 354.176A55.216 55.216 0 0 0 6.144 409.44a55.2 55.2 0 0 0 55.24 55.208V354.176z" fill="#0092D2" /></svg>} />
                // {__('UPGRADE TO PRO', 'vayu-blocks') }</Button> 
                // </a>} {props.version && Version()}</>)
              }


            
        }else if(pluginStatus.isInstalled !==null){
            setActiveBtn(1);
            setLoad(true);
        }
        
        }, [pluginStatus]);

        const upgrade = () => {
            return (<> <a href={AISB.upgrade} target='_blank'>
            <Button variant="primary" className='aisb-upgrade-btn'>
            <Icon icon={<svg  viewBox="0 0 1024 1024" class="icon"  version={Version}><path d="M57 438.312l109.536 488.72h697.336l109.536-488.72-259.176 156.816-187.856-333.088-205.352 333.088z" fill="#EC9312" /><path d="M629.048 211.888c0 58.912-47.752 106.656-106.672 106.656-58.92 0-106.664-47.744-106.664-106.656 0-58.976 47.744-106.656 106.664-106.656s106.672 47.688 106.672 106.656z" fill="#CB1B5B" /><path d="M522.376 105.232c-58.92 0-106.664 47.68-106.664 106.656 0 58.912 47.744 106.656 106.664 106.656V105.232z" fill="#E5226B" /><path d="M57 438.312l109.536 488.72h697.336z" fill="#F4A832" /><path d="M973.408 438.312l-109.536 488.72H166.536z" fill="#F4A832" /><path d="M166.536 927.032h697.336L515.2 715.832z" fill="#F5B617" /><path d="M1017.856 409.44a55.2 55.2 0 0 1-55.264 55.208 55.184 55.184 0 0 1-55.216-55.208 55.2 55.2 0 0 1 55.216-55.264 55.2 55.2 0 0 1 55.264 55.264z" fill="#0472AF" /><path d="M962.592 354.176a55.2 55.2 0 0 0-55.216 55.264 55.184 55.184 0 0 0 55.216 55.208V354.176z" fill="#1A8DCC" /><path d="M116.656 409.44a55.216 55.216 0 0 1-55.272 55.208A55.208 55.208 0 0 1 6.144 409.44a55.208 55.208 0 0 1 55.24-55.264 55.224 55.224 0 0 1 55.272 55.264z" fill="#0472AF" /><path d="M61.384 354.176A55.216 55.216 0 0 0 6.144 409.44a55.2 55.2 0 0 0 55.24 55.208V354.176z" fill="#0092D2" /></svg>} />
            {__('UPGRADE TO PRO', 'vayu-blocks') }</Button> 
            </a> {Version()}</>);

        }


        const isNotActivePlugin = () => {
            return (<> <a href={AISB.upgrade} target='_blank'>
            <Button variant="primary" className='aisb-upgrade-btn'>
            <Icon icon={<svg  viewBox="0 0 1024 1024" class="icon"  version={Version}><path d="M57 438.312l109.536 488.72h697.336l109.536-488.72-259.176 156.816-187.856-333.088-205.352 333.088z" fill="#EC9312" /><path d="M629.048 211.888c0 58.912-47.752 106.656-106.672 106.656-58.92 0-106.664-47.744-106.664-106.656 0-58.976 47.744-106.656 106.664-106.656s106.672 47.688 106.672 106.656z" fill="#CB1B5B" /><path d="M522.376 105.232c-58.92 0-106.664 47.68-106.664 106.656 0 58.912 47.744 106.656 106.664 106.656V105.232z" fill="#E5226B" /><path d="M57 438.312l109.536 488.72h697.336z" fill="#F4A832" /><path d="M973.408 438.312l-109.536 488.72H166.536z" fill="#F4A832" /><path d="M166.536 927.032h697.336L515.2 715.832z" fill="#F5B617" /><path d="M1017.856 409.44a55.2 55.2 0 0 1-55.264 55.208 55.184 55.184 0 0 1-55.216-55.208 55.2 55.2 0 0 1 55.216-55.264 55.2 55.2 0 0 1 55.264 55.264z" fill="#0472AF" /><path d="M962.592 354.176a55.2 55.2 0 0 0-55.216 55.264 55.184 55.184 0 0 0 55.216 55.208V354.176z" fill="#1A8DCC" /><path d="M116.656 409.44a55.216 55.216 0 0 1-55.272 55.208A55.208 55.208 0 0 1 6.144 409.44a55.208 55.208 0 0 1 55.24-55.264 55.224 55.224 0 0 1 55.272 55.264z" fill="#0472AF" /><path d="M61.384 354.176A55.216 55.216 0 0 0 6.144 409.44a55.2 55.2 0 0 0 55.24 55.208V354.176z" fill="#0092D2" /></svg>} />
            {__('Activate Plugin', 'vayu-blocks') }</Button> 
            </a> {Version()}</>);
        }

        const isActive = () => {
            const licenseURL = addQueryArgs( window.location.href, { page: 'vayu-blocks-license-key' } );
                if(license.status){
                return(<div className='aisb-verifybtn'><span className='active'>&#9673; PRO</span></div>);
                } else {
                return(<div className='aisb-verifybtn'><span className='inactive'>&#9673; INACTIVE</span>
                <a href={licenseURL} className='activate-now'>Activate now</a>
                </div>
                );
                }



        }


        console.log(activeBtn);


return (<>
{activeBtn ===1 && upgrade()}
{activeBtn ===2 && isNotActivePlugin()}
{activeBtn ===3 && isActive()}

</>);

}

