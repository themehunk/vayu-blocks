/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {AlignmentToolbar, __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';

import {
    PanelBody,
    RangeControl,
    SelectControl,
    Placeholder,
    Spinner,
    ToggleControl,
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';

import {
    Fragment,
    useState,
    Suspense
} from '@wordpress/element';

import { pick } from 'lodash';
/**
* Internal dependencies
*/
import InsSettingHeader from '../../../src/components/ins-setting-header/index.js';
import ResponsiveControl from '../../../src/components/responsive-control/index.js';
import SizingControl from '../../../src/components/sizing-control/index.js';
import HoverControl from '../../../src/components/hover-tab/index.js';
import ControlPanelControl from '../../../src/components/control-panel-control/index.js';
import BackgroundSelectorControl from '../../../src/components/background-selector-control/index.js'; 
import UnitChooser from '../../../src/components/unit-picker/index.js';
import ToogleGroupControl from '../../../src/components/toogle-group-control/index.js';
import { alignBottom, alignCenter, alignTop, Start, Center , End, Strech, OrderStart, OrderEnd, Custom, None, Shrink, Grow, HorizontalLeft, HorizontalRight, VerticalTop, VerticalBottom} from '../../../src/helpers/icon.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {
         const getView = useSelect( select => {

		const { getView } = select( 'themehunk-blocks/data' );

		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

    const [ tab, setTab ] = useState( 'layout' );
	const [ hover, setHover ] = useState( 'normal' );
	
    //boxed width
    const getBoxedcontentWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.boxedcontentWidth;
		case 'Tablet':
			return attributes.boxedcontentWidthTablet;
		case 'Mobile':
			return attributes.boxedcontentWidthMobile;
		default:
			return undefined;
		}
	};

	const changeBoxedcontentWidth = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ boxedcontentWidth: value, boxedcontentWidthTablet: value, boxedcontentWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ boxedcontentWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ boxedcontentWidthMobile: value });
		}
	};

    const customTooltipBoxedcontentWidth = value => `${value}${attributes.boxedcontentWidthUnit}`;
    
     //full width width
     const getFullcontentWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.fullcontentWidth;
		case 'Tablet':
			return attributes.fullcontentWidthTablet;
		case 'Mobile':
			return attributes.fullcontentWidthMobile;
		default:
			return undefined;
		}
	};

	const changeFullcontentWidth = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ fullcontentWidth: value, fullcontentWidthTablet: value, fullcontentWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ fullcontentWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ fullcontentWidthMobile: value });
		}
	};

    const customTooltipFullcontentWidth = value => `${value}${attributes.fullcontentWidthUnit}`;
    // MIN HEIGHT
    const getContentMinHgt = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.contentMinHgt;
		case 'Tablet':
			return attributes.contentMinHgtTablet;
		case 'Mobile':
			return attributes.contentMinHgtMobile;
		default:
			return undefined;
		}
	};

	const changeContentMinHgt = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ contentMinHgt: value, contentMinHgtTablet: value, contentMinHgtMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ contentMinHgtTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ contentMinHgtMobile: value });
		}
	};

    const customTooltipContentMinHgt = value => `${value}${attributes.contentMinHgtUnit}`;

    // direction property
	const getDirection = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.direction;
		case 'Tablet':
			return attributes.directionTablet;
		case 'Mobile':
			return attributes.directionMobile;
		default:
			return undefined;
		}
	};
    const changeDirection = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ direction: value, directionTablet: value, directionMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ directionTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ directionMobile: value });
		}
	};

     // Justify property
	const getJustify = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.Justify;
		case 'Tablet':
			return attributes.JustifyTablet;
		case 'Mobile':
			return attributes.JustifyMobile;
		default:
			return undefined;
		}
	};

    const changeJustify = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ Justify: value, JustifyTablet: value, JustifyMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ JustifyTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ JustifyMobile: value });
		}
	};
    // AlignItem property
	const getAlignItem = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.AlignItem;
		case 'Tablet':
			return attributes.AlignItemyTablet;
		case 'Mobile':
			return attributes.AlignItemMobile;
		default:
			return undefined;
		}
	};

    const changeAlignItem = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ AlignItem: value, AlignItemTablet: value, AlignItemMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ AlignItemTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ AlignItemMobile: value });
		}
	};
    // wrap property
	const getWrap = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.Wrap;
		case 'Tablet':
			return attributes.WrapTablet;
		case 'Mobile':
			return attributes.WrapMobile;
		default:
			return undefined;
		}
	};

    const changeWrap = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ Wrap: value, WrapTablet: value, WrapMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ WrapTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ WrapMobile: value });
		}
	};

    // aligncontent property
	const getAlignContent = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.AlignContent;
		case 'Tablet':
			return attributes.AlignContentTablet;
		case 'Mobile':
			return attributes.AlignContentMobile;
		default:
			return undefined;
		}
	};

    const changeAlignContent = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({AlignContent: value, AlignContentTablet: value, AlignContentMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ AlignContentTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ AlignContentMobile: value });
		}
	};


    return (
        <Fragment>
        <InspectorControls>
        <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Layout', 'themehunk-block' ),
							value: 'layout'
						},
						{
							label: __( 'Style', 'themehunk-block' ),
							value: 'style'
						},
						{
							label: __( 'Advanced', 'themehunk-block' ),
							value: 'advanced'
						}
					]}
					onChange={ setTab }
            />

        {'layout' === tab && (

        <Fragment>
        <PanelBody title={ __( 'Container', 'themehunk-block' ) } className="th-container-panel" initialOpen={ true }>
                      <SelectControl
								label={ __( 'Content Width', 'themehunk-block' ) }
								value={ attributes.contentWidthType }
								options={ [
									{ label:  __( 'Boxed', 'themehunk-block' ), value: 'boxed' },
									{ label: __( 'Full Width', 'themehunk-block' ), value: 'fullwidth' },
									
								] }
								onChange={ e => setAttributes({ contentWidthType: e }) }
					/>

                   { 'boxed' == attributes.contentWidthType && (
                        <ResponsiveControl
                        label={ __( 'Width', 'themehunk-block' ) }
                        >	
                        <UnitChooser
                        value={ attributes.boxedcontentWidthUnit }
                        onClick={ boxedcontentWidthUnit => setAttributes({ boxedcontentWidthUnit }) }
                        units={ [ 'px', 'em', '%' ] }
                        />
                        <RangeControl
                            renderTooltipContent={ customTooltipBoxedcontentWidth }
                            value={ getBoxedcontentWidth() || '' }
                            onChange={ changeBoxedcontentWidth }
                            step={ 1 }
                            min={ 1 }
                            max={ 1000 }
                            allowReset={ true }
                        />
                        </ResponsiveControl>
                   )}

                   { 'fullwidth' == attributes.contentWidthType && (
                        <ResponsiveControl
                        label={ __( 'Width', 'themehunk-block' ) }
                        >	
                        <UnitChooser
                        value={ attributes.fullcontentWidthUnit }
                        onClick={ fullcontentWidthUnit => setAttributes({ fullcontentWidthUnit }) }
                        units={ [ 'px', 'em', '%' ] }
                        />
                        <RangeControl
                            renderTooltipContent={ customTooltipFullcontentWidth }
                            value={ getFullcontentWidth() || '' }
                            onChange={ changeFullcontentWidth }
                            step={ 1 }
                            min={ 1 }
                            max={ 1000 }
                            allowReset={ true }
                        />
                        </ResponsiveControl>
                        )}
                        <ResponsiveControl
                        label={ __( 'Min Height', 'themehunk-block' ) }
                        >	
                        <UnitChooser
                        value={ attributes.contentMinHgtUnit }
                        onClick={ contentMinHgtUnit => setAttributes({ contentMinHgtUnit }) }
                        units={ [ 'px', 'em', '%' ] }
                        />
                        <RangeControl
                            renderTooltipContent={ customTooltipContentMinHgt }
                            value={ getContentMinHgt() || '' }
                            onChange={ changeContentMinHgt }
                            step={ 1 }
                            min={ 1 }
                            max={ 1000 }
                            allowReset={ true }
                        />
                        </ResponsiveControl>

                        <div className='th-component-group-label'>
                            <ResponsiveControl
                            label={ __( 'Direction', 'themehunk-block' ) }
                            >
                             <ToogleGroupControl
                                        value={ getDirection() }
                                        onChange={ changeDirection }
										options={[
											{
												icon: HorizontalLeft,
												label: __( 'row-horizontal', 'themehunk-blocks' ),
												value: 'row'
											},
											{
												icon: HorizontalRight,
												label: __( 'column-vertical', 'themehunk-block' ),
												value: 'column'
											},
                                            {
												icon: HorizontalRight,
												label: __( 'row-reversed', 'themehunk-block' ),
												value: 'row-reverse'
											},
                                            {
												icon: HorizontalRight,
												label: __( 'column-reversed', 'themehunk-block' ),
												value: 'column-reverse'
											}
										]}
										
										hasIcon
									/>
                                    </ResponsiveControl>
						</div>

                            <ResponsiveControl
                            label={ __( 'Justify Content', 'themehunk-block' ) }
                            >
                             <ToogleGroupControl

										value={ getJustify() }
										onChange={ changeJustify }
										options={[
											{
												icon: HorizontalLeft,
												label: __( 'start', 'themehunk-blocks' ),
												value: 'flex-start'
											},
											{
												icon: HorizontalRight,
												label: __( 'center', 'themehunk-block' ),
												value: 'center'
											},
                                            {
												icon: HorizontalRight,
												label: __( 'end', 'themehunk-block' ),
												value: 'flex-end'
											},
                                            {
												icon: HorizontalRight,
												label: __( 'space-between', 'themehunk-block' ),
												value: 'space-between'
											},
                                            {
												icon: HorizontalRight,
												label: __( 'space-around', 'themehunk-block' ),
												value: 'space-around'
											},
                                            {
												icon: HorizontalRight,
												label: __( 'space-evenly', 'themehunk-block' ),
												value: 'space-evenly'
											}
										]}
										
										hasIcon
									/>
                                </ResponsiveControl>

                                <div className='th-component-group-label'>
                                <ResponsiveControl
                                label={ __( 'Align Item', 'themehunk-block' ) }
                                >
                                <ToogleGroupControl
                                            value={getAlignItem()}
                                            onChange={changeAlignItem}
                                            options={[
                                                {
                                                    icon: HorizontalLeft,
                                                    label: __( 'start', 'themehunk-blocks' ),
                                                    value: 'flex-start'
                                                },
                                                {
                                                    icon: HorizontalRight,
                                                    label: __( 'center', 'themehunk-block' ),
                                                    value: 'center'
                                                },
                                                {
                                                    icon: HorizontalRight,
                                                    label: __( 'end', 'themehunk-block' ),
                                                    value: 'flex-end'
                                                },
                                                {
                                                    icon: HorizontalRight,
                                                    label: __( 'baseline', 'themehunk-block' ),
                                                    value: 'baseline'
                                                },
                                                {
                                                    icon: HorizontalRight,
                                                    label: __( 'stretch', 'themehunk-block' ),
                                                    value: 'stretch'
                                                }
                                            ]}
                                            
                                            hasIcon
                                        />
                                        </ResponsiveControl>
                                </div>

                                <div className='th-component-group-label'>
                                <ResponsiveControl
                                label={ __( 'Wrap', 'themehunk-block' ) }
                                >
                                <ToogleGroupControl
                                            value={getWrap()}
                                            onChange={changeWrap}
                                            options={[
                                                {
                                                    icon: HorizontalLeft,
                                                    label: __( 'no-wrap', 'themehunk-blocks' ),
                                                    value: 'nowrap'
                                                },
                                                {
                                                    icon: HorizontalRight,
                                                    label: __( 'wrap', 'themehunk-block' ),
                                                    value: 'wrap'
                                                }
                                            ]}
                                            
                                            hasIcon
                                        />
                                        </ResponsiveControl>
                                </div>
								{ 'wrap' == attributes.Wrap && (
                                <ResponsiveControl
                                label={ __( 'Align Content', 'themehunk-block' ) }
                                >
                                <SelectControl
								value={getAlignContent()}
                                onChange={changeAlignContent}
								options={ [
									{ label:  __( 'default', 'themehunk-block' ), value: 'default' },
									{ label: __( 'center', 'themehunk-block' ), value: 'center' },
									{ label: __( 'flex-start', 'themehunk-block' ), value: 'flex-start' },
                                    { label: __( 'flex-end', 'themehunk-block' ), value: 'flex-end' },
                                    { label: __( 'space-between', 'themehunk-block' ), value: 'space-between' },
                                    { label: __( 'space-around', 'themehunk-block' ), value: 'space-around' },
                                    { label: __( 'space-evenly', 'themehunk-block' ), value: 'space-evenly' },
								] }
				             	/>
                              </ResponsiveControl>
							)}
                
        </PanelBody>
        </Fragment>

        )}

		{'style' === tab && (

						<PanelBody
						title={ __( 'Background', 'themehunk-block' ) }
						initialOpen={ false }
						> 

						<HoverControl value={ hover }
						options={[
							{
								label: __( 'Normal', 'themehunk-block' ),
								value: 'normal'
							},
							{
								label: __( 'Hover', 'themehunk-block' ),
								value: 'hover'
							}
						]}
						onChange={ setHover } />

						{ 'normal' ===  hover &&  (

						<BackgroundSelectorControl
								backgroundType={ attributes.backgroundType }
								backgroundColor={ attributes.backgroundColor }
								image={ attributes.backgroundImage }
								gradient={ attributes.backgroundGradient }
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

						) || 'hover' ===  hover && (
						<>
						<BackgroundSelectorControl
						backgroundType={ attributes.backgroundTypeHvr }
						backgroundColor={ attributes.backgroundColorHvr }
						image={ attributes.backgroundImageHvr }
						gradient={ attributes.backgroundGradientHvr }
						focalPoint={ attributes.backgroundPositionHvr }
						backgroundAttachment={ attributes.backgroundAttachmentHvr }
						backgroundRepeat={ attributes.backgroundRepeatHvr }
						backgroundSize={ attributes.backgroundSizeHvr }
						changeBackgroundType={ value => setAttributes({ backgroundTypeHvr: value }) }
						changeImage={ media => {
							setAttributes({
								backgroundImageHvr: pick( media, [ 'id', 'url' ])
							});
						}}
						removeImage={ () => setAttributes({ backgroundImageHvr: undefined })}
						changeColor={ value => setAttributes({ backgroundColorHvr: value })}
						changeGradient={ value => setAttributes({ backgroundGradientHvr: value }) }
						changeBackgroundAttachment={ value => setAttributes({ backgroundAttachmentHvr: value })}
						changeBackgroundRepeat={ value => setAttributes({ backgroundRepeatHvr: value })}
						changeFocalPoint={ value => setAttributes({ backgroundPositionHvr: value }) }
						changeBackgroundSize={ value => setAttributes({ backgroundSizeHvr: value }) }
						/>

						</>

						)}	

						</PanelBody>
		)}

        </InspectorControls>
        </Fragment>
    );

}
export default InsSettings;