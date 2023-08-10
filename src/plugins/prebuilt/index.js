import { registerPlugin } from '@wordpress/plugins';
import { render } from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element'; // Import useState here
import { useDispatch, subscribe } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, Popover } from '@wordpress/components';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

import templatesData from './templates.json'; 

Modal.setAppElement('#wpwrap');

function ToolbarLibrary() {
    const [isModalOpen, setModalOpen] = useState(false); // Use useState within the functional component
    const { dispatch } = useDispatch(blockEditorStore);
    const [activeTab, setActiveTab] = useState('page'); 

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const LibraryButton = () => (
        <Button
            className="th-toolbar-design-button"
            isPrimary
            onClick={openModal}
        >
            {__('Design Library', 'themehunk-blocks')}
        </Button>
    );

    const TabContent = ({ tab }) => {


        const homeUrl = ThBlockData.homeUrl;

        const [templates, setTemplates] = useState([]);

        useEffect(() => {
            // Set the fetched data from the imported JSON
            setTemplates(templatesData);
        }, []);

        switch (tab) {
            case 'page':
                return (
                   <div className="th-block-templates-sites">
                    {templates.map((template, index) => (
                        <div className="item single-site" key={index}>
                            <div className="inner">
                                <span className="grid-item-badge">{template.badge}</span>
                                <div
                                    className="screenshot"
                                    style={{
                                        backgroundImage: `url("${template.image}")`
                                    }}
                                ></div>
                                <div className="heading-wrap">
                                    <h3 className="title">{template.title}</h3>
                                    <div className="sub-title">{template.subTitle}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                );
            case 'pattern':
                return <div>Pattern Content</div>;
            case 'wireframe':
                return <div>WireFrame Content</div>;
            default:
                return null;
        }
    };
    

    const modalContent = (
        <div className="th-design-template-modal">
           
            <div className="th-design-template-modal-wrap">
            <div className="th-inner-wrap">
            <div className="th-header">
                <div className="th-logo-wrap">
                  <h2>{__('Themehunk-Kit', 'themehunk-blocks')}</h2>
                </div>
                 <div className="th-menu-wrap">
                 <div
                    className={`th-menu-item ${activeTab === 'page' ? 'active' : ''}`}
                    onClick={() => setActiveTab('page')}
                >
                    {__('Page', 'themehunk-blocks')}
                </div>
                <div
                    className={`th-menu-item ${activeTab === 'pattern' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pattern')}
                >
                    {__('Pattern', 'themehunk-blocks')}
                </div>
                <div
                    className={`th-menu-item ${activeTab === 'wireframe' ? 'active' : ''}`}
                    onClick={() => setActiveTab('wireframe')}
                >
                    {__('WireFrame', 'themehunk-blocks')}
                </div>
                 </div>
                 <div className="th-close-wrap">
                 <Button onClick={closeModal}><FaTimes /> {__('Close', 'themehunk-blocks')}</Button>
                 </div>
            </div>
            <div className="th-template-block-wrap">
            <TabContent tab={activeTab} />
            </div>
            </div>
            </div>
            
        </div>
    );

    const renderButton = (selector) => {
        const patternButton = document.createElement('div');
        patternButton.classList.add('themehunk-toolbar-design-library');
        selector.appendChild(patternButton);
        render(<LibraryButton />, patternButton);
    };

    // Watch for the toolbar to be visible and the design library button to be missing.
    let unsubscribe = subscribe(() => {
        const editToolbar = document.querySelector('.edit-post-header-toolbar');
        if (!editToolbar) {
            return;
        }
        if (!editToolbar.querySelector('.themehunk-toolbar-design-library')) {
            renderButton(editToolbar);
        }
    });

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName="th-design-template-modal-overlay"
                className="th-design-template-modal-popover"
            >
                {modalContent}
            </Modal>
        </>
    );
}

registerPlugin('themehunk-toolbar-library', {
    render: ToolbarLibrary,
});
