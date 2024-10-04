import React, { Fragment } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    Button,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    __experimentalToolsPanel as ToolsPanel,
    __experimentalUnitControl as UnitControl,
    PanelRow
} from '@wordpress/components';

import {
    ResponsiveControl,
    HoverControl
} from '../../components/index.js';

import { Vayu_Block_Border_Control } from '../advance-slider/Components/BorderControl/Vayu_Blocks_Border_control';
import ColorPanel from '../advance-slider/Components/ColorPanel/ColorPanel';
import { useSelect } from '@wordpress/data';

import {MediaPlaceholder } from '@wordpress/block-editor';
import ControlPanelControl from '../../components/control-panel-control/index.js';


const PostSettings = ({ attributes, setAttributes }) => {

    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

    const vayu_blocks_handleimageBorderChange = (newBorders) => {
        const updatedAttributes = {};
        const updatedAttributesborderradius = {};
    
        // Check if newBorders and newBorders.border are defined
        if (newBorders && newBorders.borderRadius) {
            // Handle specific side settings
            if (newBorders.borderRadius.top || newBorders.borderRadius.bottom || newBorders.borderRadius.left || newBorders.borderRadius.right) {
                
                if (newBorders.borderRadius.top) {
                    
                    updatedAttributesborderradius[`top`] = newBorders.borderRadius.top.width;
                   
                }
                if (newBorders.borderRadius.bottom) {
              
                    updatedAttributesborderradius[`bottom`] = newBorders.borderRadius.bottom.width;
            
                }
                if (newBorders.borderRadius.left) {
          
                    updatedAttributesborderradius[`left`] = newBorders.borderRadius.left.width;
       
                }
                if (newBorders.borderRadius.right) {

                    
                    updatedAttributesborderradius[`right`] = newBorders.borderRadius.right.width;

                }
            } else {
                    updatedAttributesborderradius[`top`] = newBorders.borderRadius.width;
                    updatedAttributesborderradius[`bottom`] = newBorders.borderRadius.width;
                    updatedAttributesborderradius[`left`] = newBorders.borderRadius.width;
                    updatedAttributesborderradius[`right`] = newBorders.borderRadius.width;
            }

            setAttributes({ imageborderRadius: updatedAttributesborderradius });
        } else {
            console.error("Invalid newBorders format:", newBorders);
        }
    
        // Check if newBorders and newBorders.border are defined
        if (newBorders && newBorders.border) {
            // Handle specific side settings
            if (newBorders.border.top || newBorders.border.bottom || newBorders.border.left || newBorders.border.right) {
                if (newBorders.border.top) {
                    updatedAttributes[`topcolor`] = newBorders.border.top.color;
                    updatedAttributes[`topwidth`] = newBorders.border.top.width;
                    updatedAttributes[`topstyle`] = newBorders.border.top.style;
                }
                if (newBorders.border.bottom) {
                    updatedAttributes[`bottomcolor`] = newBorders.border.bottom.color;
                    updatedAttributes[`bottomwidth`] = newBorders.border.bottom.width;
                    updatedAttributes[`bottomstyle`] = newBorders.border.bottom.style;
                }
                if (newBorders.border.left) {
                    updatedAttributes[`leftcolor`] = newBorders.border.left.color;
                    updatedAttributes[`leftwidth`] = newBorders.border.left.width;
                    updatedAttributes[`leftstyle`] = newBorders.border.left.style;
                }
                if (newBorders.border.right) {
                    updatedAttributes[`rightcolor`] = newBorders.border.right.color;
                    updatedAttributes[`rightwidth`] = newBorders.border.right.width;
                    updatedAttributes[`rightstyle`] = newBorders.border.right.style;
                }
            } else {
                // Handle common border settings
                updatedAttributes[`topcolor`] = newBorders.border.color;
                updatedAttributes[`topwidth`] = newBorders.border.width;
                updatedAttributes[`topstyle`] = newBorders.border.style;
            
                updatedAttributes[`bottomcolor`] = newBorders.border.color;
                updatedAttributes[`bottomwidth`] = newBorders.border.width;
                updatedAttributes[`bottomstyle`] = newBorders.border.style;
            
                updatedAttributes[`leftcolor`] = newBorders.border.color;
                updatedAttributes[`leftwidth`] = newBorders.border.width;
                updatedAttributes[`leftstyle`] = newBorders.border.style;
            
                updatedAttributes[`rightcolor`] = newBorders.border.color;
                updatedAttributes[`rightwidth`] = newBorders.border.width;
                updatedAttributes[`rightstyle`] = newBorders.border.style;
            }
        } else {
            console.error("Invalid newBorders format:", newBorders);
        }
    
        setAttributes({ imageborder: updatedAttributes });
    };

    const handlecoloroverlay = (value) => {

        // Check if value.color exists
        if (value.color !== undefined) {
            if (value.color === null || value.color === '') {
                setAttributes({ overlaycolor: 'transparent' });
            } else {
                setAttributes({ overlaycolor: value.color });
            }
        } else{
            setAttributes({ overlaycolor: 'transparent' });
        }
    }

    const getoverlayalignment = () => {
        if('Desktop' === getView ){
            return attributes.overlayalignment
        }
        else if ( 'Tablet' === getView ) {
            return attributes.overlayalignmenttablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.overlayalignmentmobile
        } 
    }

    const changeoverlayalignment = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ overlayalignment: value });
        } else if (getView === 'Tablet') {
            setAttributes({ overlayalignmenttablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ overlayalignmentmobile: value });
        }
    };

    const getimagewidth = () => {
        if('Desktop' === getView ){
            return attributes.imagewidth
        }
        else if ( 'Tablet' === getView ) {
            return attributes.imagewidthtablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.imagewidthmobile
        } 
    };

    const getimageheight = () => {
        if('Desktop' === getView ){
            return attributes.imageheight
        }
        else if ( 'Tablet' === getView ) {
            return attributes.imageheighttablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.imageheightmobile
        } 
    };

    const changeImageWidth = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ imagewidth: value });
        } else if (getView === 'Tablet') {
            setAttributes({ imagewidthtablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ imagewidthmobile: value });
        }
    };

    const changeImageHeight = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ imageheight: value });
        } else if (getView === 'Tablet') {
            setAttributes({ imageheighttablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ imageheightmobile: value });
        }
    };

    const units = [
        { value: '%', label: '%', default: 10 },
        { value: 'px', label: 'px', default: 0 },
    ];


    return (
        <>
        
            {/* front box*/}
            <PanelBody title={__('Front Box', 'vayu-blocks')} initialOpen={false}>   

            <ResponsiveControl label={__('Width', 'vayu_blocks')}>
                <UnitControl
                    placeholder={ __( 'Auto' ) }
                    labelPosition="top"
                    size="__unstable-large"
                    className="vayu_block_unit_width_control"
                    onChange={(value) =>changeImageWidth(value)}
                    value={getimagewidth()}
                    max={1500} // Maximum width
                    min={2} // Minimum width
                    units={units}
                />
            </ResponsiveControl>

            <ResponsiveControl label={__('Height', 'vayu_blocks')}>
                <UnitControl
                    placeholder={ __( 'Auto' ) }
                    labelPosition="top"
                    size="__unstable-large"
                    className="vayu_block_unit_width_control"
                    onChange={(value) => changeImageHeight(value)}
                    value={getimageheight()}
                    max={1500} // Maximum width
                    min={2} // Minimum width
                    units={'px'} 
                />
            </ResponsiveControl>

            <h4>{__('Background','vayu-blocks')}</h4>  
                <HoverControl
                    value={attributes.backgroundoption}
                    options={[
                        {
                            label: __('Image', 'vayu-blocks'),
                            value: 'image',
                        },
                        {
                            label: __('Color', 'vayu-blocks'),
                            value: 'color',
                        },
                    ]}
                    onChange={(value)=>setAttributes({backgroundoption:value})}
                />

                    {attributes.backgroundoption === 'image' && (
                        <>

                    {attributes.image ? (
                    <>         

                    <img 
                        src={attributes.image} 
                        alt={attributes.imageAlt || 'Image'}
                        style={{ width: '100%', height: 'auto' }} 
                    />

                        <Fragment>
                            <ControlPanelControl
                                label={ __( 'Image Settings', 'vayu-blocks' ) }
                            >

                            <SelectControl
                                label={__('Background Size','vayu_blocks')}
                                value={attributes.imagecover}
                                options={[
                                    { label: __('Auto', 'vayu-blocks'), value: 'auto' }, // No fixed aspect ratio
                                    { label: __('Cover', 'vayu-blocks'), value: 'cover' }, // Original aspect ratio
                                    { label: __('Contain', 'vayu-blocks'), value: 'contain' },
                                ]}                                    
                                onChange={(value) => setAttributes({ imagecover: value })}
                            />

                            <SelectControl
                                label={__('Background Position','vayu_blocks')}
                                value={attributes.imageposition}
                                options={[
                                    { label: __('Center', 'vayu-blocks'), value: 'center' }, // No fixed aspect ratio
                                    { label: __('Top', 'vayu-blocks'), value: 'top' }, // Original aspect ratio
                                    { label: __('Left', 'vayu-blocks'), value: 'left' },
                                    { label: __('Right', 'vayu-blocks'), value: 'right' },
                                    { label: __('Bottom', 'vayu-blocks'), value: 'bottom' },
                                ]}                                    
                                onChange={(value) => setAttributes({ imageposition: value })}
                            />

                        <SelectControl
                                label={__('Background Repeat','vayu_blocks')}
                                value={attributes.imagerepeat}
                                options={[
                                    { label: __('Repeat', 'vayu-blocks'), value: 'repeat' }, // No fixed aspect ratio
                                    { label: __('Repeat-X', 'vayu-blocks'), value: 'repeat-x' }, // Original aspect ratio
                                    { label: __('Repeat-Y', 'vayu-blocks'), value: 'repeat-y' },
                                    { label: __('No-Repeat', 'vayu-blocks'), value: 'no-repeat' },
                                ]}                                    
                                onChange={(value) => setAttributes({ imagerepeat: value })}
                            />
                        
                            </ControlPanelControl>
                        </Fragment>

                        <PanelRow>
                            <Button
                                isSmall
                                isSecondary
                                onClick={() => setAttributes({image:""})}
                            >
                                { __( 'Clear Image', 'vayu-blocks' ) }
                            </Button>
                        </PanelRow>
                        <br/>

                    </>
                    ) : (
                        <MediaPlaceholder
                            icon="format-image"
                            labels={{
                                title: __('Background Image', 'vayu-blocks'),
                                name: __('an image', 'vayu-blocks')
                            }}
                            onSelect={(media) => {
                                setAttributes({image:media.url})
                            }}                                                                
                            onSelectURL='true'
                            accept="image/*"
                            allowedTypes={['image']}
                        />
                    )}
                        </>
                    )}


                    {attributes.backgroundoption==='color' && (
                        <>
                        <ColorPanel
                            colorTool={[
                                {
                                    active: ['gradient'],
                                    name: 'Overlay',
                                    value: attributes.overlaycolor,
                                    attribute: 'color',
                                }
                            ]}
                            handelColorPanel={(value) => handlecoloroverlay(value)}                                          
                            initialTab="color"
                        />
                        </>
                    )}
            
                
                    <div className="vayu_block_alignment_main_div_flip">
                        <ResponsiveControl className="vayu_block_alignment_flip" label={__('Overlay Alignment', 'vayu-blocks')}>

                            <AlignmentMatrixControl
                                className='vayu_blocks_matrix_control_flip'
                                value={ getoverlayalignment() }
                                onChange={(value) => changeoverlayalignment(value)}
                            />

                        </ResponsiveControl>
                    <br/>
                    </div>

                

                <Vayu_Block_Border_Control
                    value={{border:{
                        top:{
                            color: attributes.imageborder.topcolor,
                            width: attributes.imageborder.topwidth,
                            style: attributes.imageborder.topstyle,
                        },
                        bottom: {
                            color: attributes.imageborder.bottomcolor,
                            width: attributes.imageborder.bottomwidth,
                            style: attributes.imageborder.bottomstyle,
                        },
                        left: {
                            color: attributes.imageborder.leftcolor,
                            width: attributes.imageborder.leftwidth,
                            style: attributes.imageborder.leftstyle,
                        },
                        right: {
                            color: attributes.imageborder.rightcolor,
                            width: attributes.imageborder.rightwidth,
                            style: attributes.imageborder.rightstyle,
                        }
                    },
                    borderRadius:{
                        top:{
                            width: attributes.imageborderRadius.top,
                        },
                        bottom:{
                            width: attributes.imageborderRadius.bottom,
                        },
                        left:{
                            width: attributes.imageborderRadius.left,
                        },
                        right:{
                            width: attributes.imageborderRadius.right,
                        }
                    }
                    }}
                    onChange={(value)=>vayu_blocks_handleimageBorderChange(value)}
                    includeBorder={true}
                    includeBorderRadius={true}
                    para=""
                    enableAlpha={true}
                />  

            </PanelBody>

        </>

    );
};

export default PostSettings; 
