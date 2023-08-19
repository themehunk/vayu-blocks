import { registerPlugin } from '@wordpress/plugins';
import { render } from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element'; // Import useState here
import { useDispatch, subscribe } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, Popover } from '@wordpress/components';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import Masonry from 'react-masonry-css';


import templatesData from './templates.json';
import patternData from './pattern.json'; 

Modal.setAppElement('#wpwrap');

function ToolbarLibrary() {
    const [isModalOpen, setModalOpen] = useState(false); // Use useState within the functional component
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

        const [templates, setTemplates] = useState([]);
        const [pattern, setPattern] = useState([]);
        const [activePatternCategory, setActivePatternCategory] = useState('all');
        const handlePatternCategoryChange = (category) => {
          setActivePatternCategory(category);
        };
        const breakpointColumnsObj = {
            default:3,
            1100: 3,
            700: 2,
            500: 2
          };
        const [isLoading, setIsLoading] = useState(true);
    
        useEffect(() => {
            // Simulating a brief loading period using setTimeout
            setTimeout(() => {
              setTemplates(templatesData);
              setPattern(patternData);
              setIsLoading(false);
            }, 1000); // Simulating 1 second loading time
          }, []);

        const ImportButton = ({ patternCode }) => {

            const [importLoading, setImportLoading] = useState(false);
        
            const importPattern = async () => {
                try {
                    console.log('Setting importLoading to true');
                    setImportLoading(true);
                    const { insertBlocks } = wp.data.dispatch('core/block-editor');
                    const parsedBlocks = wp.blocks.parse(patternCode);
                    insertBlocks(parsedBlocks);
                } catch (error) {
                    console.error('Error importing pattern:', error);
                } finally {
                    console.log('Setting importLoading to false');
                    setImportLoading(false);
                    setModalOpen(false);
                }
            };
        
            return (
                <button className="import button-primary" onClick={importPattern}>
                    {importLoading ? 'Importing...' : 'Import'}
                </button>
            );
        };

        switch (tab) {
            case 'page':
                return (
                    <div className="th-block-templates-sites">
                         
                    {isLoading ? (
                        <div className="loading-wrap">
                        <div className="loading-icon"></div>
                        </div>
                    ) : (
                        templates.map((template, index) => (
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
                            </div>
                            <button className="import import-template button-primary">
                                {__('Import', 'themehunk-blocks')}
                            </button>
                            </div>
                        </div>
                        ))
                    )}
                    </div>

                );
            case 'pattern':
                const filteredPatternData =
                    activePatternCategory === 'all'
                    ? pattern
                    : pattern.filter((item) => item.cat === activePatternCategory);
    
                return (
                    <div className="th-block-templates-pattern">
                        
                        {isLoading ? (
                         <div className="loading-wrap">
                         <div className="loading-icon"></div>
                         </div>
                       ) : (
                        <>
                        <div className="pattern-tabs-filter">
                            <h3 className="filter-name">{__('Category', 'themehunk-blocks')}</h3>
                           <div className="pattern-tabs-filter-wrap">
                            <button
                                className={`pattern-tab-button ${activePatternCategory === 'all' ? 'active' : ''}`}
                                onClick={() => handlePatternCategoryChange('all')}
                            >
                                {__('All', 'themehunk-blocks')}
                            </button>
                            <button
                                className={`pattern-tab-button ${activePatternCategory === 'header' ? 'active' : ''}`}
                                onClick={() => handlePatternCategoryChange('header')}
                            >
                                {__('header', 'themehunk-blocks')}
                            </button>
                            <button
                                className={`pattern-tab-button ${activePatternCategory === 'featured' ? 'active' : ''}`}
                                onClick={() => handlePatternCategoryChange('featured')}
                            >
                                {__('featured', 'themehunk-blocks')}
                            </button>
                            <button
                                className={`pattern-tab-button ${activePatternCategory === 'call-to-action' ? 'active' : ''}`}
                                onClick={() => handlePatternCategoryChange('call-to-action')}
                            >
                                {__('call-to-action', 'themehunk-blocks')}
                            </button>
                            
                            </div>
                        </div>
                        <div className="pattern-tab-content">
                            <div className="th-block-templates-sites">
                            
                            <Masonry breakpointCols={breakpointColumnsObj}
                            className="masonry-grid"
                            columnClassName="masonry-grid_column">
                                {filteredPatternData.map((patternItem, index) => (
                                    <div className="item single-site" key={index}>
                                        <div className="inner">
                                        <div className="thumbnail">
                                            <img src={patternItem.image}></img>
                                        </div>
                                            <ImportButton patternCode={patternItem.content} />
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
                            </div>
                        </div>
                        </>
                       )}
                    </div>
                );
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
