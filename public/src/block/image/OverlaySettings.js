import React, {Fragment, useEffect, useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    Button,
    SelectControl,
    __experimentalBoxControl as BoxControl,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    __experimentalUnitControl as UnitControl,
    GradientPicker,
	ButtonGroup,
	Icon,
} from '@wordpress/components';
import {MediaPlaceholder} from '@wordpress/block-editor';


import ColorPanel from '../../components/wp-default-compoents/ColorPanel/ColorPanel';
import {Vayu_Block_Border_Control} from '../../components/wp-default-compoents/BorderControl/Vayu_Blocks_Border_control.js';
import ControlPanelControl from '../../components/control-panel-control/index.js';

import {
    HoverControl,
    ToogleGroupControl,
    ResponsiveControl,
} from '../../components/index.js';

import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';
import { useSelect } from '@wordpress/data';
import { Bgclr, BgGraclr, BgImg} from '../../helpers/icon.js';


const SlideSettings = ({ attributes, setAttributes }) => {

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
        // Handle overlay color, only if 'color' is defined in the value object
        if ('color' in value) {
            setAttributes({ overlaycolor: value.color !== undefined ? value.color : '' });
        }
    
        // Handle hover color, only if 'colorhvr' is defined in the value object
        if ('colorhvr' in value) {
            setAttributes({ overlayhvrcolor: value.colorhvr !== undefined ? value.colorhvr : '' });
        }
    };
    
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

    const setoverlaybordergradeintwidth = (value) =>{
        if(value.top){
            setAttributes({overlaygradienttop:value.top});
        }
        if(value.bottom){
            setAttributes({overlaygradientbottom:value.bottom});
        }
        if(value.left){
            setAttributes({overlaygradientleft:value.left});
        }
        if(value.right){
            setAttributes({overlaygradientright:value.right});
        }
    }

    const setoverlayborderimagewidth = (value) =>{
        if(value.top){
            setAttributes({overlayimagetop:value.top});
        }
        if(value.bottom){
            setAttributes({overlayimagebottom:value.bottom});
        }
        if(value.left){
            setAttributes({overlayimageleft:value.left});
        }
        if(value.right){
            setAttributes({overlayimageright:value.right});
        }
    }

    const getoverlaywidth = () => {
        if('Desktop' === getView ){
            return attributes.overlaywidth
        }
        else if ( 'Tablet' === getView ) {
            return attributes.overlaywidthtablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.overlaywidthmobile
        } 
    };

    const getoverlayheight = () => {
        if('Desktop' === getView ){
            return attributes.overlayheight
        }
        else if ( 'Tablet' === getView ) {
            return attributes.overlayheighttablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.overlayheightmobile
        } 
    };

    const changeoverlayWidth = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ overlaywidth: value });
        } else if (getView === 'Tablet') {
            setAttributes({ overlaywidthtablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ overlaywidthmobile: value });
        }
    };

    const changeoverlayHeight = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ overlayheight: value });
        } else if (getView === 'Tablet') {
            setAttributes({ overlayheighttablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ overlayheightmobile: value });
        }
    };

    const getoverlaytop = () => {
        if('Desktop' === getView ){
            return attributes.overlaytop
        }
        else if ( 'Tablet' === getView ) {
            return attributes.overlaytoptablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.overlaytopmobile
        } 
    };

    const getoverlayleft = () => {
        if('Desktop' === getView ){
            return attributes.overlayleft
        }
        else if ( 'Tablet' === getView ) {
            return attributes.overlaylefttablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.overlayleftmobile
        } 
    };

    const changeoverlaytop = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ overlaytop: value });
        } else if (getView === 'Tablet') {
            setAttributes({ overlaytoptablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ overlaytopmobile: value });
        }
    };

    const changeoverlayleft = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ overlayleft: value });
        } else if (getView === 'Tablet') {
            setAttributes({ overlaylefttablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ overlayleftmobile: value });
        }
    };

    useEffect(() => {
        // If imagewidth is less than 200, hide the overlay
        if (parseInt(attributes.imagewidth) < 200) {
            setAttributes({ overlayshow: false });
        } 
        // If imagewidth is an empty string and defaultImageWidth is less than 200, hide the overlay
        else if (attributes.imagewidth === '' && attributes.defaultImageWidth < 200) {
            setAttributes({ overlayshow: false });
        }
    }, [attributes.imagewidth, attributes.defaultImageWidth]);


    return (
        
            <div class="vayu_blocks_image-flip-settings_main vayu_blocks_image-settings_main">
                {/* Background Image */}
                <PanelBody title={__('Overlay','vayu-blocks')} initialOpen={false}>
                {
                    parseInt(attributes.imagewidth) > 200  ? (
                        <ToggleControl
                            className='vayu_blocks_togglecontrol'
                            label={__('Overlay', 'vayu-blocks')}
                            checked={attributes.overlayshow}
                            onChange={(value) => setAttributes({ overlayshow: value })}
                        />
                    ) : (attributes.imagewidth==='' &&  attributes.defaultImageWidth > 200) ? (
                        <ToggleControl
                            className='vayu_blocks_togglecontrol'
                            label={__('Overlay', 'vayu-blocks')}
                            checked={attributes.overlayshow}
                            onChange={(value) => setAttributes({ overlayshow: value })}
                        />
                    ) : (
                        <p>Image width is less than 200px, so the overlay cannot be used.</p>
                    )
                }
                    
                    
                    {attributes.overlayshow && (<>
                        <div className="vayu_block_alignment_main_div">
                            <ResponsiveControl className="vayu_block_alignment" label={__('Alignment', 'vayu-blocks')}>

                                <AlignmentMatrixControl
                                    className='vayu_blocks_matrix_control'
                                    value={ getoverlayalignment() }
                                    onChange={(value) => changeoverlayalignment(value)}
                                />

                            </ResponsiveControl>
                        <br/>
                        </div>
                        
                        <ColorPanel
                            colorTool={[
                                {
                                    active: ['gradient'],
                                    name: 'Overlay',
                                    value: attributes.overlaycolor,
                                    attribute: 'color',
                                },
                                {
                                    active: ['gradient'],
                                    name: 'Hover',
                                    value: attributes.overlayhvrcolor,
                                    attribute: 'colorhvr',
                                }
                            ]}
                            handelColorPanel={(value) => handlecoloroverlay(value)}                                          
                            initialTab="color"
                        />

                    </>
                    )}
                
                </PanelBody >

                <PanelBody title={__('Image Frame','vayu-blocks')} initialOpen={false}>
                
                    <div className="components-base-control__field_image">
                        <div className="components-base-control__title_image">
                            <label className="components-base-control__label_image">{ __( 'Border Type', 'vayu-blocks' ) }</label>
                            <ButtonGroup className="linking-controls_image">
                                <Button
                                    icon={ () => <Icon icon={ Bgclr } /> }
                                    label={ __( 'Color', 'vayu-blocks' ) }
                                    showTooltip={ true }
                                    isPrimary={ 'color' === attributes.overlaybordertype }
                                    onClick={ () => setAttributes({overlaybordertype:'color'}) }
                                />

                                <Button
                                    icon={ () => <Icon icon={ BgImg } /> }
                                    label={ __( 'Image', 'vayu-blocks' ) }
                                    showTooltip={ true }
                                    isPrimary={ 'image' === attributes.overlaybordertype }
                                    onClick={ () => setAttributes({overlaybordertype:'image'}) }
                                />

                                <Button
                                    icon={ () => <Icon icon={ BgGraclr } /> }
                                    label={ __( 'Gradient', 'vayu-blocks' ) }
                                    showTooltip={ true }
                                    isPrimary={ 'gradient' === attributes.overlaybordertype }
                                    onClick={ () => setAttributes({overlaybordertype:'gradient'}) }
                                />
                            </ButtonGroup>

                        </div>
                    </div>
            
                    {attributes.overlaybordertype === 'color' && (
                    
                        <div>
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
                        </div>
                        
                    )}

                    {attributes.overlaybordertype === 'gradient' && (
                        <>
                            <GradientPicker
                            className='vayu_block_gradientcontrol'
                            gradients = {[
                                {
                                    gradient: 'linear-gradient(90deg, rgb(74, 234, 220) 0%, rgb(102, 37, 224) 20%, rgb(0, 0, 0) 40%, rgb(238, 44, 130) 60%, rgb(97, 250, 198) 80%, rgb(237, 0, 0) 100%)',
                                    name: 'Vivid cyan blue to vivid purple',
                                    slug: 'vivid-cyan-blue-to-vivid-purple'
                                },
                                {
                                    gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
                                    name: 'Light green cyan to vivid green cyan',
                                    slug: 'light-green-cyan-to-vivid-green-cyan'
                                },
                                {
                                    gradient: 'linear-gradient(135deg, rgb(255,200,200) 0%, rgb(255,150,150) 20%, rgb(255,100,100) 40%, rgb(255,50,50) 60%, rgb(255,0,0) 80%)',
                                    name: 'Luminous vivid amber to luminous vivid orange',
                                    slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
                                },
                                {
                                    gradient: 'linear-gradient(135deg, rgb(0,150,255) 0%, rgb(0,200,255) 20%, rgb(0,250,200) 40%, rgb(50,255,150) 60%, rgb(100,255,100) 80%)',
                                    name: 'Luminous vivid orange to vivid red',
                                    slug: 'luminous-vivid-orange-to-vivid-red'
                                },
                                {
                                    gradient: 'linear-gradient(135deg, rgb(128,0,128) 0%, rgb(186,85,211) 20%, rgb(238,130,238) 40%, rgb(255,165,0) 60%, rgb(255,255,0) 80%)',
                                    name: 'Very light gray to cyan bluish gray',
                                    slug: 'very-light-gray-to-cyan-bluish-gray'
                                },
                                {
                                    gradient: 'linear-gradient(135deg, rgb(255,99,71) 0%, rgb(255,140,0) 20%, rgb(255,215,0) 40%, rgb(0,128,128) 60%, rgb(0,255,255) 80%)',
                                    name: 'Cool to warm spectrum',
                                    slug: 'cool-to-warm-spectrum'
                                }
                            ]}
                            onChange={(selectedGradient) => setAttributes({ overlaybordergradient: selectedGradient })}
                            value={attributes.overlaybordergradient}
                            />

                            <div className='vayu_blocks_box_control_image'>
                            <BoxControl
                                label={__('Width', 'vayu-blocks')}
                                values={{ top:attributes.overlaygradienttop,bottom:attributes.overlaygradientbottom,left:attributes.overlaygradientleft,right:attributes.overlaygradientright }}
                                onChange={ ( nextValues ) => setoverlaybordergradeintwidth( nextValues ) }
                            />
                            </div>

                            <br/>

                        </>
                    )}

                    {attributes.overlaybordertype === 'image' && (
                        <>
                            
                            <SelectControl
                                label={__('Image', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={attributes.overlayborderimagetype}
                                options={[
                                    { label: __('None', 'vayu-blocks'), value: 'none' },
                                    { label: __('Image 1', 'vayu-blocks'), value: 'image1' },
                                    { label: __('Image 2', 'vayu-blocks'), value: 'image2' },
                                    { label: __('Image 3', 'vayu-blocks'), value: 'image3' },
                                    { label: __('Image 4', 'vayu-blocks'), value: 'image4' },
                                    { label: __('Custom', 'vayu-blocks'), value: 'custom' },
                                ]}
                                onChange={(value) => setAttributes({ overlayborderimagetype: value })}
                            />

                            {attributes.overlayborderimagetype != 'none' && (
                                <>

                                    {attributes.overlayborderimagetype === 'custom' && (
                                    <>
                                    <h4>{__('Image','vayu-blocks')}</h4>
                                    {attributes.overlayborderimage ? (
                                        <>        
                                            <div class="vayu-blocks-image-container">
                                                <img src={attributes.overlayborderimage} alt="slideimage" />
                                                <button class="vayu-blocks-change-button" onClick={() => setAttributes({overlayborderimage:''})}>Change</button>
                                            </div>

                                            <Button style={{color:'blue',marginBottom:'20px'}} onClick={() => setAttributes({overlayborderimage:''})}>
                                                {__('Clear', 'vayu-blocks')}
                                            </Button>

                                        </>
                                        ) : (
                                            <>
                                            <MediaPlaceholder
                                                icon="format-image"
                                                labels={{
                                                    title: __('Background Image', 'vayu-blocks'),
                                                    name: __('an image', 'vayu-blocks')
                                                }}
                                                onSelect={(media) => {
                                                    setAttributes({overlayborderimage:media.url})
                                                }}                                                          
                                                onSelectURL='true'
                                                accept="image/*"
                                                allowedTypes={['image']}
                                            />
                                            <br/>
                                            </>
                                        )}
                                </>
                                    )}


                                    <div className='vayu_blocks_box_control_image'>
                                        <BoxControl
                                            label={__('Width', 'vayu-blocks')}
                                            values={{ top:attributes.overlayimagetop,bottom:attributes.overlayimagebottom,left:attributes.overlayimageleft,right:attributes.overlayimageright }}
                                            onChange={ ( nextValues ) => setoverlayborderimagewidth( nextValues ) }
                                        />
                                    </div>

                                    <br/>

                                    <SelectControl
                                        label={__('Image', 'vayu-blocks')}
                                        __nextHasNoMarginBottom
                                        value={attributes.overlayspace}
                                        options={[
                                            { label: __('Space', 'vayu-blocks'), value: 'space' },
                                            { label: __('Stretch', 'vayu-blocks'), value: 'stretch' },
                                            { label: __('Repeat', 'vayu-blocks'), value: 'repeat' },
                                            { label: __('Round', 'vayu-blocks'), value: 'round' },
                                        ]}
                                        onChange={(value) => setAttributes({ overlayspace: value })}
                                    />

                                    <RangeControl
                                        __nextHasNoMarginBottom
                                        label="Image Size"
                                        max={100}
                                        min={0}
                                        value={attributes.borderimagesize}
                                        onChange={(value)=>setAttributes({borderimagesize:value})}
                                    />

                                    <RangeControl
                                    __nextHasNoMarginBottom
                                    label="Border Place"
                                    max={50}
                                    min={0}
                                    value={attributes.borderimageoutset}
                                    onChange={(value)=>setAttributes({borderimageoutset:value})}
                                    />
                        </>
                            )}

                        </>
                    )}

                    <Fragment>
                        <ControlPanelControl
                            label={ __( 'Overlay advance Settings', 'vayu-blocks' ) }
                        >
                            <div className='vayu_block_width_height_control_overlay'>

                            <ResponsiveControl label={__('Width', 'vayu_blocks')}>
                                <UnitControl
                                    placeholder={ __( 'Auto' ) }
                                    labelPosition="top"
                                    size="__unstable-large"
                                    className="vayu_block_unit_width_control"
                                    onChange={(value) =>changeoverlayWidth(value)}
                                    value={getoverlaywidth()}
                                    max={100} // Maximum width
                                    min={2} // Minimum width
                                    units={[
                                        {
                                          a11yLabel: 'Percentage (%)',
                                          label: '%',
                                          step: 1,
                                          value: '%'
                                        }
                                      ]}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl label={__('Height', 'vayu_blocks')}>
                                <UnitControl
                                    placeholder={ __( 'Auto' ) }
                                    labelPosition="top"
                                    size="__unstable-large"
                                    className="vayu_block_unit_width_control"
                                    onChange={(value) => changeoverlayHeight(value)}
                                    value={getoverlayheight()}
                                    max={100} // Maximum width
                                    min={2} // Minimum width
                                    units={[
                                        {
                                          a11yLabel: 'Percentage (%)',
                                          label: '%',
                                          step: 1,
                                          value: '%'
                                        }
                                      ]}
                                />
                            </ResponsiveControl>


                            </div>

                            <div className='vayu_block_width_height_control_overlay'>

                                <ResponsiveControl label={__('Left', 'vayu_blocks')}>
                                    <UnitControl
                                        placeholder={ __( 'Auto' ) }
                                        labelPosition="top"
                                        size="__unstable-large"
                                        className="vayu_block_unit_width_control"
                                        onChange={(value) =>changeoverlayleft(value)}
                                        value={getoverlayleft()}
                                        max={1500} // Maximum width
                                        min={0} // Minimum width
                                        units={[
                                            {
                                                a11yLabel: 'Percentage (px)',
                                                label: 'px',
                                                step: 1,
                                                value: 'px'
                                            }
                                        ]}
                                    />
                                </ResponsiveControl>

                                <ResponsiveControl label={__('Top', 'vayu_blocks')}>
                                    <UnitControl
                                        placeholder={ __( 'Auto' ) }
                                        labelPosition="top"
                                        size="__unstable-large"
                                        className="vayu_block_unit_width_control"
                                        onChange={(value) => changeoverlaytop(value)}
                                        value={getoverlaytop()}
                                        max={1500} // Maximum width
                                        min={0} // Minimum width
                                        units={[
                                            {
                                            a11yLabel: 'Percentage (px)',
                                            label: 'px',
                                            step: 1,
                                            value: 'px'
                                            }
                                        ]}
                                    />
                                </ResponsiveControl>
                            </div>

                        </ControlPanelControl>
                    </Fragment>

                </PanelBody>

            </div>

    );
};

export default SlideSettings;