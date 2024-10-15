import React, { useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {AlignmentToolbar, __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';
import {
    PanelBody,
    ButtonGroup,
    Button,
    Icon,
    GradientPicker,
    __experimentalBoxControl as BoxControl,
    SelectControl,
    RangeControl,
} from '@wordpress/components';
import { Bgclr, BgGraclr, BgImg} from '../../helpers/icon.js';
import {MediaPlaceholder} from '@wordpress/block-editor';
import { FcUndo,FcRedo  } from "react-icons/fc";
import { FaRegImage } from "react-icons/fa";
import {
	HoverControl,
	BackgroundSelectorControl,
    ControlPanelControl,
} from '../../components/index.js';
import Vayu_Block_ToggleGroupControl from '../../components/wp-default-compoents/ToggleGroupControl/Vayu_Block_Toggle';
import { dispatch, select, useSelect } from '@wordpress/data';
import { Vayu_Block_Border_Control } from '../../components/wp-default-compoents/BorderControl/Vayu_Blocks_Border_control.js';

const SlideSettings = ({ attributes, setAttributes }) => {

    const [ hover, setHover ] = useState( 'normal' );

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
                if (value === 'flip' && parentBlock.name === 'vayu-blocks/flip-box') {
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
        { value: 'flip', label: (
            <span className='vayu_blocks_undo_front_image'>
               <FaRegImage style={{color:'#00BCD4'}} />
            </span>
        ) 
    },
    ];

    // Conditionally add options based on the className attribute
    if (attributes.className === 'vayu_blocks_flip-box-back ') {
        options.push({ value: 'front', label: (
            <span className='vayu_blocks_undo_front_image'>
               <FcUndo />
            </span>
        )
     });
    }

    if (attributes.className === 'vayu_blocks_flip-box-front ') {
        options.push({ value: 'back', label: (
            <span className='vayu_blocks_undo_front_image'>
               <FcRedo/>
            </span>
        ) });
    }

    const pick = (object, keys) => {
		if (!object || typeof object !== 'object') {
		  throw new Error('Input must be an object');
		}
	  
		return keys.reduce((acc, key) => {
		  if (object.hasOwnProperty(key)) {
			acc[key] = object[key];
		  }
		  return acc;
		}, {});
	};

    const vayu_blocks_handleadvanceBorderChange = (newBorders) => {
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

            setAttributes({ advanceRadius: updatedAttributesborderradius });
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
    
        setAttributes({ advanceborder: updatedAttributes });
    };

    const setadvancebordergradeintwidth = (value) =>{
        if(value.top){
            setAttributes({advancegradienttop:value.top});
        }
        if(value.bottom){
            setAttributes({advancegradientbottom:value.bottom});
        }
        if(value.left){
            setAttributes({advancegradientleft:value.left});
        }
        if(value.right){
            setAttributes({advancegradientright:value.right});
        }
    }

    const setadvanceborderimagewidth = (value) =>{
        if(value.top){
            setAttributes({advanceimagetop:value.top});
        }
        if(value.bottom){
            setAttributes({advanceimagebottom:value.bottom});
        }
        if(value.left){
            setAttributes({advanceimageleft:value.left});
        }
        if(value.right){
            setAttributes({advanceimageright:value.right});
        }
    }

    const vayu_blocks_box_shadow_color_handler = (e) => {
		if(e){
			setAttributes({ boxShadowColor: e })
		}else{
			setAttributes({ boxShadowColor: 'transparent' })
		}
	}


    return (

        <>

        {attributes.parentBlock === 'vayu-blocks/flip-box' && (
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

        <PanelBody title={ __( 'Background', 'vayu-blocks' ) }
                        initialOpen={ true }
                        className="th-button-panel"
                    >      
            <BackgroundSelectorControl
                backgroundType={ attributes.backgroundType }
                backgroundColor={ attributes.backgroundColor }
                image={ attributes.backgroundImage }
            //	gradient={ attributes.backgroundGradient }
                focalPoint={ attributes.backgroundPosition }
                backgroundAttachment={ attributes.backgroundAttachment }
                backgroundRepeat={ attributes.backgroundRepeat }
                backgroundSize={ attributes.backgroundSize }
                changeBackgroundType={ value => setAttributes({ backgroundType: value }) }
                changeImage={ media => {
                    setAttributes({
                        backgroundImage: pick( media, [ 'id', 'url' ])
                    });
                }}
                removeImage={ () => setAttributes({ backgroundImage: undefined })}
                changeColor={ value => setAttributes({ backgroundColor: value })}
                changeGradient={ value => setAttributes({ backgroundGradient: value }) }
                changeBackgroundAttachment={ value => setAttributes({ backgroundAttachment: value })}
                changeBackgroundRepeat={ value => setAttributes({ backgroundRepeat: value })}
                changeFocalPoint={ value => setAttributes({ backgroundPosition: value }) }
                changeBackgroundSize={ value => setAttributes({ backgroundSize: value }) }
            />
                    
        </PanelBody>

        <PanelBody title={__('Advance Border & Box Shadow','vayu-blocks')} initialOpen={false}>
                
                <div className="components-base-control__field_image">
                    <div className="components-base-control__title_image">
                        <label className="components-base-control__label_image">{ __( 'Border Type', 'vayu-blocks' ) }</label>
                        <ButtonGroup className="linking-controls_image">
                            <Button
                                icon={ () => <Icon icon={ Bgclr } /> }
                                label={ __( 'Color', 'vayu-blocks' ) }
                                showTooltip={ true }
                                isPrimary={ 'color' === attributes.advancebordertype }
                                onClick={ () => setAttributes({advancebordertype:'color'}) }
                            />

                            <Button
                                icon={ () => <Icon icon={ BgImg } /> }
                                label={ __( 'Image', 'vayu-blocks' ) }
                                showTooltip={ true }
                                isPrimary={ 'image' === attributes.advancebordertype }
                                onClick={ () => setAttributes({advancebordertype:'image'}) }
                            />

                            <Button
                                icon={ () => <Icon icon={ BgGraclr } /> }
                                label={ __( 'Gradient', 'vayu-blocks' ) }
                                showTooltip={ true }
                                isPrimary={ 'gradient' === attributes.advancebordertype }
                                onClick={ () => setAttributes({advancebordertype:'gradient'}) }
                            />
                        </ButtonGroup>

                    </div>
                </div>
         
                {attributes.advancebordertype === 'color' && (
                
                    <div>
                        <Vayu_Block_Border_Control
                                    value={{border:{
                                        top:{
                                            color: attributes.advanceborder.topcolor,
                                            width: attributes.advanceborder.topwidth,
                                            style: attributes.advanceborder.topstyle,
                                        },
                                        bottom: {
                                            color: attributes.advanceborder.bottomcolor,
                                            width: attributes.advanceborder.bottomwidth,
                                            style: attributes.advanceborder.bottomstyle,
                                        },
                                        left: {
                                            color: attributes.advanceborder.leftcolor,
                                            width: attributes.advanceborder.leftwidth,
                                            style: attributes.advanceborder.leftstyle,
                                        },
                                        right: {
                                            color: attributes.advanceborder.rightcolor,
                                            width: attributes.advanceborder.rightwidth,
                                            style: attributes.advanceborder.rightstyle,
                                        }
                                    },
                                    borderRadius:{
                                        top:{
                                            width: attributes.advanceRadius.top,
                                        },
                                        bottom:{
                                            width: attributes.advanceRadius.bottom,
                                        },
                                        left:{
                                            width: attributes.advanceRadius.left,
                                        },
                                        right:{
                                            width: attributes.advanceRadius.right,
                                        }
                                    }
                                    }}
                                    onChange={(value)=>vayu_blocks_handleadvanceBorderChange(value)}
                                    includeBorder={true}
                                    includeBorderRadius={true}
                                    para=""
                                /> 
                    </div>
                    
                )}

                 {attributes.advancebordertype === 'gradient' && (
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
                        onChange={(selectedGradient) => setAttributes({ advancebordergradient: selectedGradient })}
                        value={attributes.advancebordergradient}
                        />

                    <br/>
                        <div className='vayu_blocks_box_control_image'>
                        <BoxControl
                            label={__('Width', 'vayu-blocks')}
                            values={{ top:attributes.advancegradienttop,bottom:attributes.advancegradientbottom,left:attributes.advancegradientleft,right:attributes.advancegradientright }}
                            onChange={ ( nextValues ) => setadvancebordergradeintwidth( nextValues ) }
                        />
                        </div>
                        <br/>
                        <RangeControl
                            __nextHasNoMarginBottom
                            label="Border Place"
                            max={50}
                            min={0}
                            value={attributes.advancegradientborderimageoutset}
                            onChange={(value)=>setAttributes({advancegradientborderimageoutset:value})}
                        />

                        <br/>

                    </>
                )}

                {attributes.advancebordertype === 'image' && (
                    <>
                        
                        <SelectControl
                            label={__('Image', 'vayu-blocks')}
                            __nextHasNoMarginBottom
                            value={attributes.advanceborderimagetype}
                            options={[
                                { label: __('None', 'vayu-blocks'), value: 'none' },
                                { label: __('Image 1', 'vayu-blocks'), value: 'image1' },
                                { label: __('Image 2', 'vayu-blocks'), value: 'image2' },
                                { label: __('Image 3', 'vayu-blocks'), value: 'image3' },
                                { label: __('Image 4', 'vayu-blocks'), value: 'image4' },
                                { label: __('Custom', 'vayu-blocks'), value: 'custom' },
                            ]}
                            onChange={(value) => setAttributes({ advanceborderimagetype: value })}
                        />

                        {attributes.advanceborderimagetype != 'none' && (
                            <>

                                {attributes.advanceborderimagetype === 'custom' && (
                                <>
                                <h4>{__('Image','vayu-blocks')}</h4>
                                {attributes.advanceborderimage ? (
                                    <>        
                                        <div class="vayu-blocks-image-container">
                                            <img src={attributes.advanceborderimage} alt="slideimage" />
                                            <button class="vayu-blocks-change-button" onClick={() => setAttributes({advanceborderimage:''})}>Change</button>
                                        </div>

                                        <Button style={{color:'blue',marginBottom:'20px'}} onClick={() => setAttributes({advanceborderimage:''})}>
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
                                                setAttributes({advanceborderimage:media.url})
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
                                        values={{ top:attributes.advanceimagetop,bottom:attributes.advanceimagebottom,left:attributes.advanceimageleft,right:attributes.advanceimageright }}
                                        onChange={ ( nextValues ) => setadvanceborderimagewidth( nextValues ) }
                                    />
                                </div>

                                <br/>

                                <SelectControl
                                    label={__('Image', 'vayu-blocks')}
                                    __nextHasNoMarginBottom
                                    value={attributes.advancespace}
                                    options={[
                                        { label: __('Space', 'vayu-blocks'), value: 'space' },
                                        { label: __('Stretch', 'vayu-blocks'), value: 'stretch' },
                                        { label: __('Repeat', 'vayu-blocks'), value: 'repeat' },
                                        { label: __('Round', 'vayu-blocks'), value: 'round' },
                                    ]}
                                    onChange={(value) => setAttributes({ advancespace: value })}
                                />

                                <RangeControl
                                    __nextHasNoMarginBottom
                                    label="Image Size"
                                    max={100}
                                    min={0}
                                    value={attributes.advanceborderimagesize}
                                    onChange={(value)=>setAttributes({advanceborderimagesize:value})}
                                />

                                <RangeControl
                                __nextHasNoMarginBottom
                                label="Border Place"
                                max={50}
                                min={0}
                                value={attributes.advanceborderimageoutset}
                                onChange={(value)=>setAttributes({advanceborderimageoutset:value})}
                                />
                    </>
                        )}

                    </>
                )} 

                <ControlPanelControl
                    label={ __( 'Box Shadow', 'vayu-blocks' ) }
                    attributes={ attributes }
                    setAttributes={ setAttributes }
                    resetValues={ {
                        boxShadow: false,
                        boxShadowColor: undefined,
                        boxShadowColorOpacity: 50,
                        boxShadowBlur: 5,
                        boxShadowSpread: 1,
                        boxShadowHorizontal: 0,
                        boxShadowVertical: 0
                    } }
                    onClick={ () => setAttributes({ boxShadow: true }) }
                >
                
                    <ColorGradientControl
                        label={ __( 'Shadow Color', 'vayu-blocks' ) }
                        colorValue={ attributes.boxShadowColor }
                        onColorChange={ e => vayu_blocks_box_shadow_color_handler(e) }
                        enableAlpha={true} 
                    />

                    <RangeControl
                        label={ __( 'Opacity', 'vayu-blocks' ) }
                        value={ attributes.boxShadowColorOpacity }
                        onChange={ e => setAttributes({ boxShadowColorOpacity: e }) }
                        min={ 0 }
                        max={ 100 }
                    />

                    <RangeControl
                        label={ __( 'Blur', 'vayu-blocks' ) }
                        value={ attributes.boxShadowBlur }
                        onChange={ e => setAttributes({ boxShadowBlur: e }) }
                        min={ 0 }
                        max={ 100 }
                    />

                    <RangeControl
                        label={ __( 'Spread', 'vayu-blocks' ) }
                        value={ attributes.boxShadowSpread }
                        onChange={ e => setAttributes({ boxShadowSpread: e }) }
                        min={ -100 }
                        max={ 100 }
                    />

                    <RangeControl
                        label={ __( 'Horizontal', 'vayu-blocks' ) }
                        value={ attributes.boxShadowHorizontal }
                        onChange={ e => setAttributes({ boxShadowHorizontal: e }) }
                        min={ -100 }
                        max={ 100 }
                    />

                    <RangeControl
                        label={ __( 'Vertical', 'vayu-blocks' ) }
                        value={ attributes.boxShadowVertical }
                        onChange={ e => setAttributes({ boxShadowVertical: e }) }
                        min={ -100 }
                        max={ 100 }
                    />
                </ControlPanelControl>

        </PanelBody>

        </>
    );
};

export default SlideSettings;
