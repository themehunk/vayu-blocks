import { createRoot, useState,useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { Provider } from 'react-redux';
import store from "../../vayu-sites/store";
import { VerifyKey } from '../../vayu-sites/template/verifykey';
import Header from './header';
import MainContent from './mainContent';


function MyPluginContent(){

// Upgrade 
    const verifyKeyCheck = VerifyKey();

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

// return data
    return (
        <>
        <div className="th-inner-wrap">    
        <Header activeTab={activeTab} handleTabClick={handleTabClick} />
        <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />  
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