import React, { Fragment } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    RangeControl,
    Button,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    ToggleControl,
    TextareaControl,
    TextControl,
    __experimentalToolsPanel as ToolsPanel,
    FocalPointPicker,
    DuotonePicker,
    PanelRow
} from '@wordpress/components';

import {
    ToogleGroupControl,
    ResponsiveControl,
    HoverControl
} from '../../components/index.js';

import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';

import { Vayu_Block_Border_Control } from '../advance-slider/Components/BorderControl/Vayu_Blocks_Border_control';
import ColorPanel from '../advance-slider/Components/ColorPanel/ColorPanel';
import { useSelect } from '@wordpress/data';

import {MediaPlaceholder } from '@wordpress/block-editor';
import ControlPanelControl from '../../components/control-panel-control/index.js';

import Vayu_Block_Toggle from '../advance-slider/Components/ToggleGroupControl/Vayu_Block_Toggle';
import DuotonePanel from '../../components/wp-default-compoents/Duotone/DuotonePanel';


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

    const vayu_blocks_overlay_function = (value) => {
        setAttributes({overlay:value});
        setAttributes({showPreview:false});
        if(value===true){
            setAttributes({imagehvreffect:'none'})
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


    //default duotone
    const vayu_blocks_DUOTONE_PALETTE = [
        { colors: ['#ff8c00', '#ff4500'], name: 'Orange and Red', slug: 'orange-red', id: '#duotone-orange-red' },
        { colors: ['#ff0000', '#00ff00'], name: 'Red and Green', slug: 'red-green', id: '#duotone-red-green' },
        { colors: ['#000000', '#ffffff'], name: 'Black and White', slug: 'black-white', id: '#duotone-black-white' },
        { colors: ['#000097', '#ff4747'], name: 'Blue and Red', slug: 'blue-red', id: '#duotone-blue-red' },
        { colors: ['#8c00b7', '#fcff41'], name: 'Purple and Yellow', slug: 'purple-yellow', id: '#duotone-purple-yellow' },
        { colors: ['#ffa500', '#008080'], name: 'Orange and Teal', slug: 'orange-teal', id: '#duotone-orange-teal' },
        { colors: ['#ff69b4', '#0000ff'], name: 'Pink and Blue', slug: 'pink-blue', id: '#duotone-pink-blue' },
        { colors: ['#00ffff', '#ff00ff'], name: 'Cyan and Magenta', slug: 'cyan-magenta', id: '#duotone-cyan-magenta' },
        { colors: ['#ffff00', '#000000'], name: 'Yellow and Black', slug: 'yellow-black', id: '#duotone-yellow-black' },
        { colors: ['#add8e6', '#90ee90'], name: 'Light Blue and Light Green', slug: 'lightblue-lightgreen', id: '#duotone-lightblue-lightgreen' },
        { colors: ['#808080', '#ffff00'], name: 'Gray and Yellow', slug: 'gray-yellow', id: '#duotone-gray-yellow' }
    ];

        //duotone change
        const vayu_blocks_duotoneHandlerback = (value) => {
            // Find the filter ID corresponding to the given color array
            if (!Array.isArray(value) || value.length === 0) {
                setAttributes({backduotone:""});
            }
    
            const filter = vayu_blocks_DUOTONE_PALETTE.find(({ colors }) =>
                colors.every((color, i) => color === value[i])
            );
        
            if (filter) {
                const { id } = filter;
                setAttributes({backduotone:id});
            }
        };
    
        //duotone value
        const vayu_blocks_duotonevalueback = () => {
            // Get the ID from the slide's layout duotone
            const id = attributes.backduotone;
        
            // Find the matching filter in the DUOTONE_PALETTE
            const filter = vayu_blocks_DUOTONE_PALETTE.find((filter) => filter.id === id);
        
            // If a match is found, return the colors array
            if (filter) {
                return filter.colors;
            }
            return '';
        };

    //duotone change
    const vayu_blocks_duotoneHandler = (value) => {
        // Find the filter ID corresponding to the given color array
        if (!Array.isArray(value) || value.length === 0) {
            setAttributes({duotone:""});
        }

        const filter = vayu_blocks_DUOTONE_PALETTE.find(({ colors }) =>
            colors.every((color, i) => color === value[i])
        );
    
        if (filter) {
            const { id } = filter;
            setAttributes({duotone:id});
        }
    };

    //duotone value
    const vayu_blocks_duotonevalue = () => {
        // Get the ID from the slide's layout duotone
        const id = attributes.duotone;
    
        // Find the matching filter in the DUOTONE_PALETTE
        const filter = vayu_blocks_DUOTONE_PALETTE.find((filter) => filter.id === id);
    
        // If a match is found, return the colors array
        if (filter) {
            return filter.colors;
        }
        return '';
    };


    const vayu_blocks_handleimageBorderChangeback = (newBorders) => {
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

            setAttributes({ backimageborderRadius: updatedAttributesborderradius });
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
    
        setAttributes({ backimageborder: updatedAttributes });
    };

    const handlecoloroverlayback = (value) => {

        // Check if value.color exists
        if (value.color !== undefined) {
            if (value.color === null || value.color === '') {
                setAttributes({ backoverlaycolor: 'transparent' });
            } else {
                setAttributes({ backoverlaycolor: value.color });
            }
        } else{
            setAttributes({ backoverlaycolor: 'transparent' });
        }
    }

    const vayu_blocks_overlay_functionback = (value) => {
        setAttributes({backoverlay:value});
        setAttributes({backshowPreview:false});
        if(value===true){
            setAttributes({backimagehvreffect:'none'})
        }
    }

    const getoverlayalignmentback = () => {
        if('Desktop' === getView ){
            return attributes.backoverlayalignment
        }
        else if ( 'Tablet' === getView ) {
            return attributes.backoverlayalignmenttablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.backoverlayalignmentmobile
        } 
    }

    const changeoverlayalignmentback = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ backoverlayalignment: value });
        } else if (getView === 'Tablet') {
            setAttributes({ backoverlayalignmenttablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ backoverlayalignmentmobile: value });
        }
    };

    return (
        <>
        
            {/* front box*/}
            <PanelBody title={__('Front Box', 'vayu-blocks')} initialOpen={false}>   
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

             {/* back box*/}
             <PanelBody title={__('Back Box', 'vayu-blocks')} initialOpen={false}>     

             <h4>{__('Background','vayu-blocks')}</h4>  
                <HoverControl
                    value={attributes.backbackgroundoption}
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
                    onChange={(value)=>setAttributes({backbackgroundoption:value})}
                />
                
                {attributes.backbackgroundoption==='image' && (
                    <>

                {attributes.backimage ? (
                    <>         

                        <img 
                            src={attributes.backimage} 
                            alt={attributes.backimageAlt || 'Image'}
                            style={{ width: '100%', height: 'auto' }} 
                        />

                        <Fragment>
                            <ControlPanelControl
                                label={ __( 'Image Settings', 'vayu-blocks' ) }
                            >
                           <SelectControl
                                label={__('Background Size','vayu_blocks')}
                                value={attributes.backimagecover}
                                options={[
                                    { label: __('Auto', 'vayu-blocks'), value: 'auto' }, // No fixed aspect ratio
                                    { label: __('Cover', 'vayu-blocks'), value: 'cover' }, // Original aspect ratio
                                    { label: __('Contain', 'vayu-blocks'), value: 'contain' },
                                ]}                                    
                                onChange={(value) => setAttributes({ backimagecover: value })}
                            />

                            <SelectControl
                                label={__('Background Position','vayu_blocks')}
                                value={attributes.backimageposition}
                                options={[
                                    { label: __('Center', 'vayu-blocks'), value: 'center' }, // No fixed aspect ratio
                                    { label: __('Top', 'vayu-blocks'), value: 'top' }, // Original aspect ratio
                                    { label: __('Left', 'vayu-blocks'), value: 'left' },
                                    { label: __('Right', 'vayu-blocks'), value: 'right' },
                                    { label: __('Bottom', 'vayu-blocks'), value: 'bottom' },
                                ]}                                    
                                onChange={(value) => setAttributes({ backimageposition: value })}
                            />

                        <SelectControl
                                label={__('Background Repeat','vayu_blocks')}
                                value={attributes.backimagerepeat}
                                options={[
                                    { label: __('Repeat', 'vayu-blocks'), value: 'repeat' }, // No fixed aspect ratio
                                    { label: __('Repeat-X', 'vayu-blocks'), value: 'repeat-x' }, // Original aspect ratio
                                    { label: __('Repeat-Y', 'vayu-blocks'), value: 'repeat-y' },
                                    { label: __('No-Repeat', 'vayu-blocks'), value: 'no-repeat' },
                                ]}                                    
                                onChange={(value) => setAttributes({ backimagerepeat: value })}
                            />
                        <br/>
                            </ControlPanelControl>
                        </Fragment>

                        <PanelRow>
                            <Button
                                isSmall
                                isSecondary
                                onClick={() => setAttributes({backimage:""})}
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
                                setAttributes({backimage:media.url})
                            }}                                                                
                            onSelectURL='true'
                            accept="image/*"
                            allowedTypes={['image']}
                        />
                    )}
                    </>
                )}

                {attributes.backbackgroundoption==='color' && (
                    <>
                        <ColorPanel
                    colorTool={[
                        {
                            active: ['gradient'],
                            name: 'Overlay',
                            value: attributes.backoverlaycolor,
                            attribute: 'color',
                        }
                    ]}
                    handelColorPanel={(value) => handlecoloroverlayback(value)}                                          
                    initialTab="color"
                />

                    </>
                )}
              
                    <div className="vayu_block_alignment_main_div_flip">
                        <ResponsiveControl className="vayu_block_alignment_flip" label={__('Alignment', 'vayu-blocks')}>

                            <AlignmentMatrixControl
                                className='vayu_blocks_matrix_control_flip'
                                value={ getoverlayalignmentback() }
                                onChange={(value) => changeoverlayalignmentback(value)}
                            />

                        </ResponsiveControl>
                    <br/>
                    </div>

                
                <Vayu_Block_Border_Control
                    value={{border:{
                        top:{
                            color: attributes.backimageborder.topcolor,
                            width: attributes.backimageborder.topwidth,
                            style: attributes.backimageborder.topstyle,
                        },
                        bottom: {
                            color: attributes.backimageborder.bottomcolor,
                            width: attributes.backimageborder.bottomwidth,
                            style: attributes.backimageborder.bottomstyle,
                        },
                        left: {
                            color: attributes.backimageborder.leftcolor,
                            width: attributes.backimageborder.leftwidth,
                            style: attributes.backimageborder.leftstyle,
                        },
                        right: {
                            color: attributes.backimageborder.rightcolor,
                            width: attributes.backimageborder.rightwidth,
                            style: attributes.backimageborder.rightstyle,
                        }
                    },
                    borderRadius:{
                        top:{
                            width: attributes.backimageborderRadius.top,
                        },
                        bottom:{
                            width: attributes.backimageborderRadius.bottom,
                        },
                        left:{
                            width: attributes.backimageborderRadius.left,
                        },
                        right:{
                            width: attributes.backimageborderRadius.right,
                        }
                    }
                    }}
                    onChange={(value)=>vayu_blocks_handleimageBorderChangeback(value)}
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
