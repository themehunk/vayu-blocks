import { registerPlugin } from '@wordpress/plugins';
import { createRoot } from '@wordpress/element';
import { useState, useEffect, useRef } from '@wordpress/element'; // Import useState here
import { useDispatch, subscribe } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, Popover } from '@wordpress/components';
import Modal from 'react-modal';
import Masonry from 'react-masonry-css';
import { RxFile,RxCross1, RxArrowDown} from "react-icons/rx";
import templatesData from './json/templates.json';
//import patternData from '.json/pattern.json'; 
import { Provider } from 'react-redux';
import store from "../../vayu-sites/store";
import { useSelector} from 'react-redux';
import { Logo, Upgrade,Version } from '../../vayu-sites/aisb';
import { VerifyKey } from '../../vayu-sites/template/verifykey';

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
        > <img src={`${homeUrl}assets/img/menu-logo.png`} />
            {__('Design Library', 'themehunk-blocks')}
        </Button>
    );
    
    const [importLoadingP, setImportLoadingP] = useState(false);
    const [importLoading, setImportLoading] = useState(false);

    const ImportButton = ({ patternCode }) => {
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
                {importLoading ? 'Importing...' : 'Import'}<RxArrowDown></RxArrowDown>
            </button>
        );
    };


    // import page template

    const ImportPage = ({ templateCode, templateName, templateStatus }) => {
        const importPage = async () => {
          try {
            setImportLoadingP(true);
            const { insertBlocks } = wp.data.dispatch('core/block-editor');
            const parsedBlocks = wp.blocks.parse(templateCode);
            await insertBlocks(parsedBlocks);
          } catch (error) {
            console.error('Error importing template:', error);
          } finally {
            setImportLoadingP(false);
            setModalOpen(false);
          }
        };
        
        const license = useSelector((state)=>state.licenseActivate);
        const verifyKeyCheck = VerifyKey();
        const btnStyle= { color:"#fff", 
          background:"var(--aisb-bg-color)" 
        }
        if (license.status) {
          templateStatus = true;
        }
        return (
          templateStatus ? (
            <div className="th-button th-import" onClick={importPage}>
              {importLoadingP ? __('Importing..', 'themehunk-blocks') : __('Import', 'themehunk-blocks')} "{templateName}" {__('Import', 'themehunk-blocks')}
            </div>
            ) : (
            license.status === false && <Upgrade styles={btnStyle} version={false} />
            )
          );
      };

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
   
        useEffect(() => {
              setTemplates(templatesData);
              //setPattern(patternData);
          }, []);

        const ContentPage = ({ template, onBack }) => {

            const [selectedItemIndex, setSelectedItemIndex] = useState(0);
            const screenshotRef = useRef(null);
            const handleItemClickPre = (index) => {
              setSelectedItemIndex(index);
              screenshotRef.current.scrollTo(0, 0); // Scroll to top of element
            };
            
            return (
              <div className="th-single-site-content">
                <div className="th-single-site-content-wrap">
                  <div className="th-single-site-content-preview" >
                    <h3>{template.title}</h3>
                    <div className="screenshot" ref={screenshotRef}>
                      <img
                        src={template.templates[selectedItemIndex].image}
                        alt={template.templates[selectedItemIndex].title}
                      />
                    </div>
                    <div className="th-single-site-content-footer-wrap">
                      <div className="th-single-site-content-footer-left">
                        <div className="th-button th-go-back" onClick={onBack}>
                          {__('Go Back','themehunk-blocks')}
                        </div>
                        <div className="th-button th-preview">
                         <a href={template.templates[selectedItemIndex].plink} target="_blank"> {__('Preview','themehunk-blocks')}</a>
                        </div>
                      </div>
                      <div className="th-single-site-content-footer-right">
                      <ImportPage templateCode={template.templates[selectedItemIndex].content} templateName={template.templates[selectedItemIndex].title} templateStatus={template.activate} />
                      </div>
                    </div>
                  </div>
                  <div className="th-single-site-content-page-template">
                    <p>{__('Page Templates', 'themehunk-blocks')}</p>
                    <div className="th-single-site-content-page-grid">
                      {template.templates.map((pageTemplate, index) => (
                        <div
                          className={`item single-site ${index === selectedItemIndex ? 'selected' : ''}`}
                          onClick={() => handleItemClickPre(index)}
                          key={index}
                        >
                          <div className="inner">
                            <div
                              className="screenshot"
                              style={{
                                backgroundImage: `url("${pageTemplate.image}")`,
                              }}
                            ></div>
                            <div className="heading-wrap">
                              <h3 className="title">{pageTemplate.title} </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          

          const [selectedItem, setSelectedItem] = useState(null);

          const handleItemClick = (index) => {
            setSelectedItem(templates[index]);
          };
        
          const handleBack = () => {
            setSelectedItem(null);
          };
        
        switch (tab) {
            case 'page':
                return (
                    <div className="th-block-templates-sites">
                    { selectedItem ? (
                        <ContentPage template={selectedItem} onBack={handleBack} />
                    ) : (
                        templates.map((template, index) => (
                        <div
                            className="item single-site"
                            onClick={() => handleItemClick(index)}
                            key={index}
                        >
                            <div className="inner">
                            <span className={`grid-item-badge ${template.badge}`}>{template.badge}</span>
                            <div
                                className="screenshot"
                                style={{
                                backgroundImage: `url("${template.image}")`,
                                }}
                            ></div>
                            <div className="heading-wrap">
                                <h3 className="title">{template.title}</h3>
                                <p className="total_temp">{template.total_temp} {__('Templates', 'themehunk-blocks')}</p>
                            </div>
                            
                            </div>
                        </div>
                        ))
                    )}
                    </div>

                );
            // case 'pattern':
            //     const filteredPatternData =
            //         activePatternCategory === 'all'
            //         ? pattern
            //         : pattern.filter((item) => item.cat === activePatternCategory);
    
            //     return (
            //         <div className="th-block-templates-pattern">
            //             <>
            //             <div className="pattern-tabs-filter">
            //                 <h3 className="filter-name">{__('Category', 'themehunk-blocks')}</h3>
            //                <div className="pattern-tabs-filter-wrap">
            //                 <button
            //                     className={`pattern-tab-button ${activePatternCategory === 'all' ? 'active' : ''}`}
            //                     onClick={() => handlePatternCategoryChange('all')}
            //                 >
            //                     {__('All', 'themehunk-blocks')}
            //                 </button>
            //                 <button
            //                     className={`pattern-tab-button ${activePatternCategory === 'header' ? 'active' : ''}`}
            //                     onClick={() => handlePatternCategoryChange('header')}
            //                 >
            //                     {__('header', 'themehunk-blocks')}
            //                 </button>
            //                 <button
            //                     className={`pattern-tab-button ${activePatternCategory === 'featured' ? 'active' : ''}`}
            //                     onClick={() => handlePatternCategoryChange('featured')}
            //                 >
            //                     {__('featured', 'themehunk-blocks')}
            //                 </button>
            //                 <button
            //                     className={`pattern-tab-button ${activePatternCategory === 'call-to-action' ? 'active' : ''}`}
            //                     onClick={() => handlePatternCategoryChange('call-to-action')}
            //                 >
            //                     {__('call-to-action', 'themehunk-blocks')}
            //                 </button>
                            
            //                 </div>
            //             </div>
            //             <div className="pattern-tab-content">
            //                 <div className="th-block-templates-sites">
                            
            //                 <Masonry breakpointCols={breakpointColumnsObj}
            //                 className="masonry-grid"
            //                 columnClassName="masonry-grid_column">
            //                     {filteredPatternData.map((patternItem, index) => (
            //                         <div className="item single-site" key={index}>
            //                             <div className="inner">
            //                             <div className="thumbnail">
            //                                 <img src={patternItem.image}></img>
            //                             </div>
            //                                 <ImportButton patternCode={patternItem.content} />
            //                             </div>
            //                         </div>
            //                     ))}
            //                 </Masonry>
            //                 </div>
            //             </div>
            //             </>
                       
            //         </div>
            //     );
            default:
                return null;
        }
    };
    
    const homeUrl = vayublock.homeUrl;

    const modalContent = (
        <div className="th-design-template-modal">
           
            <div className="th-design-template-modal-wrap">
            <div className="th-inner-wrap">
                
            <div className="th-header">
                <div className="th-logo-wrap">
                <img src={`${homeUrl}assets/img/logo-vayu.png`} />
                  <h2>{__('Blocks', 'themehunk-blocks')}</h2>
                </div>
                 <div className="th-menu-wrap">
                 <div
                    className={`th-menu-item ${activeTab === 'page' ? 'active' : ''}`}
                    onClick={() => setActiveTab('page')}
                >
                    <RxFile></RxFile>{__('Page', 'themehunk-blocks')}
                </div>
                {/* <div
                    className={`th-menu-item ${activeTab === 'pattern' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pattern')}
                >
                    <RxStack></RxStack>{__('Pattern', 'themehunk-blocks')}
                </div> */}
                 </div>
                 <div className="th-close-wrap">
                 <Button onClick={closeModal}><RxCross1></RxCross1></Button>
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
      
        // Use createRoot to create a root instance and then render the component
        const root = createRoot(patternButton);
        root.render(<LibraryButton />);
      };

    // Watch for the toolbar to be visible and the design library button to be missing.
    let unsubscribe = subscribe(() => {
        const editToolbar = document.querySelector('.edit-post-header__center');
        if (!editToolbar) {
            return;
        }
        if (!editToolbar.querySelector('.themehunk-toolbar-design-library')) {
            renderButton(editToolbar);
        }
    });

    return (
        <>
           <Provider store={store}> <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName="th-design-template-modal-overlay"
                className="th-design-template-modal-popover"
            >
                {modalContent}
            </Modal></Provider>
        </>
    );
}

registerPlugin('themehunk-toolbar-library', {
    render: ToolbarLibrary,
});