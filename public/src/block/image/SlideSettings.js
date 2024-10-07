import React, { Fragment, useState } from 'react';
import { dispatch, useSelect,select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import _ from 'lodash'; // If you are using lodash

import {
    PanelBody,
    ToggleControl,
    Button,
    TextControl,
    SelectControl,
    __experimentalUnitControl as UnitControl,
    FocalPointPicker,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    PanelRow,
} from '@wordpress/components';
import {MediaPlaceholder } from '@wordpress/block-editor';

import {Vayu_blocks_typographycontrol} from '../../components/wp-default-compoents/Typography/Vayu_blocks_typographycontrol';
import ColorPanel from '../../components/wp-default-compoents/ColorPanel/ColorPanel';
import DuotonePanel from '../../components/wp-default-compoents/Duotone/DuotonePanel.js';
import Vayu_Block_ToggleGroupControl from '../../components/wp-default-compoents/ToggleGroupControl/Vayu_Block_Toggle';
import './editor.scss';

import {
    HoverControl,
    ToogleGroupControl,
    ResponsiveControl,
} from '../../components/index.js';
import ControlPanelControl from '../../components/control-panel-control/index.js';

import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';


const SlideSettings = ({ attributes, setAttributes }) => {

    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

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
    const vayu_blocks_duotoneHandler = (value) => {

        // Find the filter ID corresponding to the given color array
        if (!Array.isArray(value) || value.length === 0 || value=== undefined) {
            setAttributes({duotone:""});
        }
         // Declare the filter variable outside of the if block
        let filter = null;

        if(Array.isArray(value)){
             filter = vayu_blocks_DUOTONE_PALETTE.find(({ colors }) =>
                colors.every((color, i) => color === value[i])
            );
        }else{
            setAttributes({ duotone: "" });
        }
        
    if (filter) {
        const { id } = filter;
        setAttributes({ duotone: id });
    } else {
        setAttributes({ duotone: "" }); // Reset duotone if no match is found
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
    
    const vayu_blocks_sub_heading_sizes = [
        {
            name: 'Small',
            size: 12,
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: 16,
            slug: 'meadium'
        },
        {
            name: 'extraMeadium',
            size: 20,
            slug: 'extrameadium'
        },
        {
            name: 'Big',
            size: 24,
            slug: 'big'
        }
    ];

    const handleTypographyChange = (newValues) => {

        if(newValues.size){
            setAttributes({captionsize:newValues.size})
        }
        if(newValues.appearance){
            setAttributes({captionfontweight:newValues.appearance})
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

    const getimageaspectratio = () => {
        if('Desktop' === getView ){
            return attributes.imageaspectratio
        }
        else if ( 'Tablet' === getView ) {
            return attributes.imageaspectratiotablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.imageaspectratiomobile
        } 
    }

    const changeImageaspectratio = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ imageaspectratio: value });
        } else if (getView === 'Tablet') {
            setAttributes({ imageaspectratiotablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ imageaspectratiomobile: value });
        }
    };

    const handleimageurl = (value) => {
        setAttributes({image:value.url});
    }
    
    const handleimage = (value) => {
        setAttributes({image:value});
    }

    const getimagealignment = () => {
        if('Desktop' === getView ){
            return attributes.imagealignment
        }
        else if ( 'Tablet' === getView ) {
            return attributes.imagealignmenttablet
        }
        else if ( 'Mobile' === getView ) {
            return attributes.imagealignmentmobile
        } 
    }

    const changeimagealignment = (value) => {
        if (getView === 'Desktop') {
            setAttributes({ imagealignment: value });
        } else if (getView === 'Tablet') {
            setAttributes({ imagealignmenttablet: value });
        } else if (getView === 'Mobile') {
            setAttributes({ imagealignmentmobile: value });
        }
    };

    const handlehoveranimation = (value) => {

        if(value=== 'vayu_block_styling-effect5' || value=== 'vayu_block_styling-effect6' || value=== 'vayu_block_styling-effect8' ){
            setAttributes({
                overlaywrapper: value,
                wrapperanimation: 'none',
                imagehvreffect: 'none',
            });
        }

        else if (value.startsWith('vayu_block_styling')) {
            // If it's a wrapper animation, set the wrapperanimation attribute and reset the hover effect
            setAttributes({
                overlaywrapper:'none',
                wrapperanimation: value,
                imagehvreffect: 'none',
            });
        } else {
            // If it's a hover effect, set the imagehvreffect attribute and reset the wrapper animation
            setAttributes({
                overlaywrapper:'none',
                wrapperanimation: 'none',
                imagehvreffect: value,
            });
        }
    };
    
    const [blockValue, setBlockValue] = useState(''); // To manage the toggle state (front/back)

    // Get the currently selected block
    const selectedBlock = useSelect((select) => {
        return select('core/block-editor').getSelectedBlock();
    });

    // Handle the toggle change event
    const handleToggleChange = (value) => {
        setBlockValue(value);

        if (selectedBlock) {

            // Get all blocks
            const allBlocks = select('core/block-editor').getBlocks();

            // Find the parent block that contains the selected block
            const parentBlock = allBlocks.find(block => {
                return block.innerBlocks.some(innerBlock => innerBlock.clientId === selectedBlock.clientId);
            });

            if (parentBlock) {

                // If toggle value is 'flip', move to the parent flip block
                if (value === 'flip' && parentBlock.name === 'vayu-blocks/image-flip') {
                    dispatch('core/block-editor').selectBlock(parentBlock.clientId);
                } 
                // If toggle value is 'back', move to the second inner block
                else if (value === 'back') {
                    const backBlock = parentBlock.innerBlocks[1]; // Get second inner block
                    if (backBlock) {
                        dispatch('core/block-editor').selectBlock(backBlock.clientId);
                    }
                }
                // If toggle value is 'back', move to the second inner block
                else if (value === 'front') {
                    const backBlock = parentBlock.innerBlocks[0]; // Get second inner block
                    if (backBlock) {
                        dispatch('core/block-editor').selectBlock(backBlock.clientId);
                    }
                }
            }
        }
    };

    // Assuming you're inside your functional component
    const options = [
        { value: 'flip', label: 'Flip Block' },
    ];

    // Conditionally add options based on the className attribute
    if (attributes.className === 'vayu_blocks_flip-box-back ') {
        options.push({ value: 'front', label: 'Front Block' });
    }

    if (attributes.className === 'vayu_blocks_flip-box-front ') {
        options.push({ value: 'back', label: 'Back Block' });
    }

    const animationoptions = [
        { label: __('None', 'vayu-blocks'), value: 'none' },
        { label: __('Blur', 'vayu-blocks'), value: 'blur' },
        { label: __('Sepia', 'vayu-blocks'), value: 'sepia' },
        { label: __('GrayScale', 'vayu-blocks'), value: 'grayScale' },
        { label: __('GrayScale Reverse', 'vayu-blocks'), value: 'grayScalereverse' },
        { label: __('Zoom In', 'vayu-blocks'), value: 'zoom-in' },
        { label: __('Zoom Out', 'vayu-blocks'), value: 'zoom-out' },
        { label: __('Slide Up', 'vayu-blocks'), value: 'slide-up' },
        { label: __('Slide Down', 'vayu-blocks'), value: 'slide-down' },
        { label: __('Slide Left', 'vayu-blocks'), value: 'slide-left' },
        { label: __('Slide Right', 'vayu-blocks'), value: 'slide-right' },
        { label: __('Rotate', 'vayu-blocks'), value: 'rotate' },
        { label: __('Effect 1 (3D Tilt Left)', 'vayu-blocks'), value: 'vayu_block_styling-left' },
        { label: __('Effect 2 (3D Tilt Right)', 'vayu-blocks'), value: 'vayu_block_styling-right' },
        { label: __('Effect 3 (Depth Shift)', 'vayu-blocks'), value: 'vayu_block_styling-effect3' },
        { label: __('Effect 4 (3D Clip-Path Left)', 'vayu-blocks'), value: 'vayu_block_styling-effect4-left' },
        { label: __('Effect 5 (3D Clip-Path Right)', 'vayu-blocks'), value: 'vayu_block_styling-effect4-right' },
        { label: __('Effect 6 (3D Draft Bit)', 'vayu-blocks'), value: 'vayu_block_styling-effect10' },
        { label: __('Effect 7 (Tilt Effect)', 'vayu-blocks'), value: 'vayu_block_styling-effect7' },
    ];
    
    // Conditionally add overlay options based on the overlayshow attribute
    if (attributes.overlayshow) {
        animationoptions.push(
            { label: __('Overlay Effect 8 (Masking Effect)', 'vayu-blocks'), value: 'vayu_block_styling-effect5' },
            { label: __('Overlay Effect 9 (Conic Gradient)', 'vayu-blocks'), value: 'vayu_block_styling-effect6' },
            { label: __('Overlay Effect 10 (Radial Reveal)', 'vayu-blocks'), value: 'vayu_block_styling-effect8' }
        );
    }

    return (
        
            <div class="vayu_blocks_image-flip-settings_main vayu_blocks_image-settings_main">

                {attributes.parentBlock === 'vayu-blocks/image-flip' && (
                    <div class="togglegroupcontrol_vayu_block">
                    <Vayu_Block_ToggleGroupControl
                        label={__('Show Block', 'vayu-blocks')}
                        onChange={handleToggleChange}
                        isBlock={true}
                        value={blockValue}
                        __nextHasNoMarginBottom={true}
                        options={options}
                    />
        
                    </div> 
                )}

                {/* Background Image */}
                <PanelBody title={__('Image','vayu-blocks')} initialOpen={true}>
                    <h4>{__('Background','vayu-blocks')}</h4>
                    {attributes.image ? (
                        <>        
                            <FocalPointPicker
                                className='vayu_blocks_focal_point_picker'
                                __nextHasNoMarginBottom
                                url={ attributes.image }
                                value={ attributes.focalPoint }
                                onDragStart={ (value)=> setAttributes({focalPoint:value})}
                                onDrag={ (value)=> setAttributes({focalPoint:value}) }
                                onChange={ (value)=> setAttributes({focalPoint:value}) }
                            />
                               <PanelRow>
                                    <Button
                                        isSmall
                                        isSecondary
                                        onClick={() => setAttributes({image:""})}
                                    >
                                        { __( 'Clear Image', 'vayu-blocks' ) }
                                    </Button>
                                </PanelRow>

                            <div className='vayu_block_width_height_control'>

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
                                    units={'px'} 
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

                            </div>

                            <Fragment>
                                <ControlPanelControl
                                    label={ __( 'Image Settings', 'vayu-blocks' ) }
                                >

                                    <TextControl
                                        className="imagealttextrichcontrol"
                                        label="Alt text"
                                        __nextHasNoMarginBottom
                                        placeholder='Alt Text...'
                                        onChange={(value)=>setAttributes({imagealttext:value})}
                                        value={attributes.imagealttext}
                                    />

                                    <ResponsiveControl label="Aspect Ratio">
                                        <SelectControl
                                            __nextHasNoMarginBottom
                                            value={getimageaspectratio()}
                                            options={[
                                                { label: __('None', 'vayu-blocks'), value: 'none' }, // No fixed aspect ratio
                                                { label: __('Original', 'vayu-blocks'), value: 'original' }, // Original aspect ratio
                                                { label: __('1:1 (Square)', 'vayu-blocks'), value: '1/1' },
                                                { label: __('16:9 (Widescreen)', 'vayu-blocks'), value: '16/9' },
                                                { label: __('4:3 (Standard)', 'vayu-blocks'), value: '4/3' },
                                                { label: __('3:2 (Photography)', 'vayu-blocks'), value: '3/2' },
                                                { label: __('21:9 (Cinematic)', 'vayu-blocks'), value: '21/9' }
                                            ]}                                    
                                            onChange={(value) => changeImageaspectratio(value)}
                                        />
                                    </ResponsiveControl>

                                    <SelectControl
                                        label={ __( 'Object Fit', 'vayu-blocks' ) }
                                        value={ attributes.imagebackgroundSize }
                                        options={ [
                                            { label: __( 'None', 'vayu-blocks' ), value: 'none' },
                                            { label: __( 'Fill', 'vayu-blocks' ), value: 'fill' },
                                            { label: __( 'Cover', 'vayu-blocks' ), value: 'cover' },
                                            { label: __( 'Contain', 'vayu-blocks' ), value: 'contain' }
                                        ] }
                                        onChange={(value)=> setAttributes({imagebackgroundSize:value})}
                                    />
                                </ControlPanelControl>

                            </Fragment>

                            <div>
                                <ResponsiveControl label={__('Alignment', 'vayu-blocks')}>
                                    <ToogleGroupControl
                                        label={__('Alignment', 'vayu-blocks')}
                                        value={ getimagealignment()}
                                        onChange={(value) => changeimagealignment(value)}
                                        options={[
                                            {
                                                icon: HorizontalLeft,
                                                label: __( 'Left', 'vayu-blocks' ),
                                                value: 'left'
                                            },
                                            {
                                                icon: Center,
                                                label: __( 'Center', 'vayu-blocks' ),
                                                value: 'center'
                                            },
                                            {
                                                icon: HorizontalRight,
                                                label: __( 'Right', 'vayu-blocks' ),
                                                value: 'right'
                                            },
                                        ]}
                                        
                                        hasIcon
                                    />
                                </ResponsiveControl>
                            <br/>
                            </div>

                        <DuotonePanel
                            duotoneValue={vayu_blocks_duotonevalue()}
                            onDuotoneChange={(value) => vayu_blocks_duotoneHandler(value)}
                            duotonePalette={vayu_blocks_DUOTONE_PALETTE}
                        />

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
                                    handleimageurl(media)
                                }} 
                                onSelectURL={(value) => handleimage(value)}                                                            
                                accept="image/*"
                                allowedTypes={['image']}
                            />
                            <br/>
                            </>
                        )}
                        
                </PanelBody >
                
                {/* Overlay and animation effect  */}
                <PanelBody title={__('Advance Animation & Mask','vayu-blocks')} initialOpen={false}>

                    <SelectControl
                        label={__('Hover Effect', 'vayu-blocks')}
                        value={
                                attributes.overlaywrapper !== 'none'
                                    ? attributes.overlaywrapper
                                    : attributes.wrapperanimation !== 'none'
                                    ? attributes.wrapperanimation
                                    : attributes.imagehvreffect
                            }                        
                            options={animationoptions}
                        onChange={(value) => handlehoveranimation(value)}
                    />


                    {/* {(attributes.wrapperanimation === 'vayu_block_styling' || attributes.wrapperanimation === 'vayu_block_styling-effect4') && (
                        <>
                            <SelectControl
                                label={__('Animation Side', 'vayu-blocks')}
                                value={attributes.animatingside}
                                options={[
                                    { label: __('Left', 'vayu-blocks'), value: 'left' },
                                    { label: __('Right', 'vayu-blocks'), value: 'right' }
                                ]}
                                onChange={(value) => handleanimationside(value)}
                            />
                        </>
                    )} */}


                    <SelectControl
                        label={__('Image Animation', 'vayu-blocks')}
                        value={attributes.imagehvranimation}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Infinite rotate', 'vayu-blocks'), value: 'rotate-image' },
                            { label: __('Clip Animation', 'vayu-blocks'), value: 'clip-animation' },
                            { label: __('Diagonal Expand', 'vayu-blocks'), value: 'clip-diagonal-expand' },
                            { label: __('Starbust', 'vayu-blocks'), value: 'clip-starburst' },
                            { label: __('Diamond', 'vayu-blocks'), value: 'clip-diamond' },
                            { label: __('Diagonal slide', 'vayu-blocks'), value: 'clip-diagonal-slide' },
                            { label: __('Hex Pulse', 'vayu-blocks'), value: 'clip-hex-pulse' },
                            { label: __('Triangle Expand', 'vayu-blocks'), value: 'clip-triangle-expand' },
                            { label: __('Circle Burst', 'vayu-blocks'), value: 'clip-circle-burst' },
                            { label: __('Zigzag', 'vayu-blocks'), value: 'clip-zigzag' },
                            { label: __('Diamond Expand', 'vayu-blocks'), value: ' clip-diamond-expand' },
                        ]}
                        onChange={(value) => setAttributes({ imagehvranimation: value })}
                    />

                    {attributes.imagehvranimation != 'none' && (
                        <SelectControl
                            label={__('Animation Settings', 'vayu-blocks')}
                            value={attributes.animationsettings}
                            options={[
                                { label: __('One Time', 'vayu-blocks'), value: 'one-time' },
                                { label: __('With Hover', 'vayu-blocks'), value: 'with-hvr' },
                                { label: __('Without Hover', 'vayu-blocks'), value: 'without-hvr' },
                            ]}
                            onChange={(value) => setAttributes({ animationsettings: value })}
                        />
                    )}

                    <SelectControl
                        label={__('Mask shape', 'vayu-blocks')}
                        __nextHasNoMarginBottom
                        value={attributes.maskshape}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Circle', 'vayu-blocks'), value: 'circle' },
                            { label: __('Diamond', 'vayu-blocks'), value: 'diamond' },
                            { label: __('Hexagone', 'vayu-blocks'), value: 'hexagone' },
                            { label: __('Rounded', 'vayu-blocks'), value: 'rounded' },
                            { label: __('Mask 1', 'vayu-blocks'), value: 'bob1' },
                            { label: __('Mask 2', 'vayu-blocks'), value: 'bob2' },
                            { label: __('Mask 3', 'vayu-blocks'), value: 'bob3' },
                            { label: __('Mask 4', 'vayu-blocks'), value: 'bob4' },
                        ]}
                        onChange={(value) => setAttributes({ maskshape: value })}
                    />

                {attributes.maskshape!=='none' && (
                    <Fragment>
                        <ControlPanelControl
                            label={ __( 'Mask Settings', 'vayu-blocks' ) }
                        >
                            <SelectControl
                                label={__('Mask size', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={attributes.masksize}
                                variant="minimal"
                                options={[
                                    { label: __('Auto', 'vayu-blocks'), value: 'auto' },
                                    { label: __('Contain', 'vayu-blocks'), value: 'contain' },
                                    { label: __('Cover', 'vayu-blocks'), value: 'cover' },
                                ]}
                                onChange={(value) => setAttributes({ masksize: value })}
                            />
                            <br/>
                            <SelectControl
                                label={__('Mask Position', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={attributes.maskposition}
                                options={[
                                    { label: __('Center Top', 'vayu-blocks'), value: 'center top' },
                                    { label: __('Center Center', 'vayu-blocks'), value: 'center center' },
                                    { label: __('Center Bottom', 'vayu-blocks'), value: 'center bottom' },
                                    { label: __('Left Top', 'vayu-blocks'), value: 'left top' },
                                    { label: __('Left Center', 'vayu-blocks'), value: 'left center' },
                                    { label: __('Left Right', 'vayu-blocks'), value: 'left right' },
                                    { label: __('Right Top', 'vayu-blocks'), value: 'right top' },
                                    { label: __('Right Center', 'vayu-blocks'), value: 'right center' },
                                    { label: __('Right Right', 'vayu-blocks'), value: 'right right' },
                                ]}
                                onChange={(value) => setAttributes({ maskposition: value })}
                            />
                            <br/>
                            <SelectControl
                                label={__('Mask Repeat', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={attributes.maskrepeat}
                                options={[
                                    { label: __('No Repeat', 'vayu-blocks'), value: 'no-repeat' },
                                    { label: __('Repeat', 'vayu-blocks'), value: 'repeat' },
                                    { label: __('Repeat-X', 'vayu-blocks'), value: 'repeat-x' },
                                    { label: __('Repeat-Y', 'vayu-blocks'), value: 'repeat-y' },
                                ]}
                                onChange={(value) => setAttributes({ maskrepeat: value })}
                            />

                        </ControlPanelControl>
                    </Fragment>
                    
                )}

                </PanelBody>

                {/* Caption */}
                <PanelBody title={__('Caption','vayu-blocks')} initialOpen={false}>
                    <ToggleControl
                        className='vayu_blocks_togglecontrol'
                        label={__('Caption', 'vayu-blocks')}
                        checked={attributes.caption}
                        onChange={(value) =>  setAttributes({caption:value})}
                    />
                    {attributes.caption &&(
                        <>
                            <TextControl
                                className="imagealttextrichcontrol"
                                label="Text"
                                __nextHasNoMarginBottom
                                onChange={(value)=>setAttributes({captiontext:value})}
                                value={attributes.captiontext}
                            />

                            <ToogleGroupControl
                                label={__('Alignment', 'vayu-blocks')}
                                value={ attributes.captionalignment}
                                onChange={(value) => setAttributes({captionalignment:value})}
                                options={[
                                    {
                                        icon: HorizontalLeft,
                                        label: __( 'Left', 'vayu-blocks' ),
                                        value: 'left'
                                    },
                                    {
                                        icon: Center,
                                        label: __( 'Center', 'vayu-blocks' ),
                                        value: 'center'
                                    },
                                    {
                                        icon: HorizontalRight,
                                        label: __( 'Right', 'vayu-blocks' ),
                                        value: 'right'
                                    },
                                ]}
                                
                                hasIcon
                            />

                                <ColorPanel
                                colorTool={[
                                    {
                                        active: ['color'],
                                        name: 'Text',
                                        value: attributes.captioncolor,
                                        attribute: 'color',
                                    }
                                ]}
                                handelColorPanel={(value)=>setAttributes({captioncolor:value.color})}
                                initialTab="color"
                            />


                            <div className="vayu_blocks_heading_unitcontrol_slides">
                                <Vayu_blocks_typographycontrol
                                    onChange={(value)=> handleTypographyChange(value)}
                                    includeSize={true}
                                    value={{size:attributes.captionsize,
                                        appearance: attributes.captionfontweight
                                    }}
                                    includeAppearance={true}
                                    vayu_blocks_sizes={vayu_blocks_sub_heading_sizes}
                                    appearanceOptions= {[
                                        { label: __('Normal', 'text-domain'), value: 'normal' },
                                        { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                        { label: __('Bold', 'text-domain'), value: 'bold' },
                                        { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                    ]}
                                    para=""
                                />
                            </div>

                        </>
                    )}
                </PanelBody>

            </div>

    );
};

export default SlideSettings;
