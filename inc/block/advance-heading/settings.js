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
	 Button,
	 ButtonGroup,
 } from '@wordpress/components';
 
 import { useSelect } from '@wordpress/data';
 
 import {
     Fragment,
     useState,
	 Suspense
 } from '@wordpress/element';

/**
 * Internal dependencies
 */
import InsSettingHeader from '../../../src/components/ins-setting-header/index.js';
import ResponsiveControl from '../../../src/components/responsive-control/index.js';
import GoogleFontsControl from '../../../src/components/google-fonts-control/index.js';
import ClearButton from '../../../src/components/clear-button/index.js';
import SizingControl from '../../../src/components/sizing-control/index.js';
import HoverControl from '../../../src/components/hover-tab/index.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {

    const getView = useSelect( select => {
		const { getView } = select( 'themehunk-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);
    const getAlignment = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.align;
		case 'Tablet':
			return attributes.alignTablet;
		case 'Mobile':
			return attributes.alignMobile;
		default:
			return undefined;
		}
	};
    const changeAlignment = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ align: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ alignTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ alignMobile: value });
		}
	};

    
	const getFontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.fontSize;
		case 'Tablet':
			return attributes.fontSizeTablet;
		case 'Mobile':
			return attributes.fontSizeMobile;
		default:
			return undefined;
		}
	};

	const changeFontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ fontSize: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ fontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ fontSizeMobile: value });
		}
	};


	const getlineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.lineHeight;
		case 'Tablet':
			return attributes.lineHeightTablet;
		case 'Mobile':
			return attributes.lineHeightMobile;
		default:
			return undefined;
		}
	};

	const changelineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ lineHeight: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ lineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ lineHeightMobile: value });
		}
	};

 
	const getletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.letterSpacing;
		case 'Tablet':
			return attributes.letterSpacingTablet;
		case 'Mobile':
			return attributes.letterSpacingMobile;
		default:
			return undefined;
		}
	};

	const changeletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ letterSpacing: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ letterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ letterSpacingMobile: value });
		}
	};

	const getPaddingType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.paddingType;
		case 'Tablet':
			return attributes.paddingTypeTablet;
		case 'Mobile':
			return attributes.paddingTypeMobile;
		default:
			return undefined;
		}
	};
	const getMarginType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.marginType;
		case 'Tablet':
			return attributes.marginTypeTablet;
		case 'Mobile':
			return attributes.marginTypeMobile;
		default:
			return undefined;
		}
	};

	const changePaddingType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ paddingType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ paddingTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ paddingTypeMobile: value });
		}
	};
	const changeMarginType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ marginType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ marginTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ marginTypeMobile: value });
		}
	};

	const desktopPaddingType = {
		top: 'paddingTop',
		right: 'paddingRight',
		bottom: 'paddingBottom',
		left: 'paddingLeft'
	};
	const desktopMarginType = {
		top: 'marginTop',
		right: 'marginRight',
		bottom: 'marginBottom',
		left: 'marginLeft'
	};

	const tabletPaddingType = {
		top: 'paddingTopTablet',
		right: 'paddingRightTablet',
		bottom: 'paddingBottomTablet',
		left: 'paddingLeftTablet'
	};
	const tabletMarginType = {
		top: 'marginTopTablet',
		right: 'margingRightTablet',
		bottom: 'marginBottomTablet',
		left: 'marginLeftTablet'
	};

	const mobilePaddingType = {
		top: 'paddingTopMobile',
		right: 'paddingRightMobile',
		bottom: 'paddingBottomMobile',
		left: 'paddingLeftMobile'
	};
	const mobileMarginType = {
		top: 'marginTopMobile',
		right: 'marginRightMobile',
		bottom: 'marginBottomMobile',
		left: 'marginLeftMobile'
	};

	const changePadding = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.paddingType ) {
				setAttributes({ padding: value });
			} else {
				setAttributes({ [desktopPaddingType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.paddingTypeTablet ) {
				setAttributes({ paddingTablet: value });
			} else {
				setAttributes({ [tabletPaddingType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.paddingTypeMobile ) {
				setAttributes({ paddingMobile: value });
			} else {
				setAttributes({ [mobilePaddingType[type]]: value });
			}
			break;
		}
	};

	const changeMargin = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.marginType ) {
				setAttributes({ margin: value });
			} else {
				setAttributes({ [desktopMarginType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.marginTypeTablet ) {
				setAttributes({ marginTablet: value });
			} else {
				setAttributes({ [tabletMarginType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.marginTypeMobile ) {
				setAttributes({ marginMobile: value });
			} else {
				setAttributes({ [mobileMarginType[type]]: value });
			}
			break;
		}
	};

	const getPadding = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingTop;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingTopTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingRight;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingRightTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingBottom;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingLeft;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingLeftMobile;
			}
		}

		return undefined;
	};


	const getMargin = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginTop;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginTopTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginRight;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginRightTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginBottom;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginLeft;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginLeftMobile;
			}
		}

		return undefined;
	};

	const changeFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				fontFamily: value,
				fontVariant: value
			});
		} else {
			setAttributes({
				fontFamily: value,
				fontVariant: 'normal',
				fontStyle: 'normal'
			});
		}
	};

	const getCustomWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.customWidth;
		case 'Tablet':
			return attributes.customWidthTablet;
		case 'Mobile':
			return attributes.customWidthMobile;
		default:
			return undefined;
		}
	};

	const changeCustomWidth = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ customWidth: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ customWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ customWidthMobile: value });
		}
	};

	const getZindex = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.zindex;
		case 'Tablet':
			return attributes.zindexTablet;
		case 'Mobile':
			return attributes.zindexMobile;
		default:
			return undefined;
		}
	};

	const changeZindex = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ zindex: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ zindexTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ zindexMobile: value });
		}
	};
    
	const customTooltipFontsize = value => `${value}px`
	const customTooltiplineHeight = value => `${value}`
	const customTooltipletterSpacing = value => `${value}px`
	const customTooltipCustomWidth = value => `${value}px`
	const customTooltipZindex = value => `${value}px`

	const [ tab, setTab ] = useState( 'style' );
    const [ hover, setHover ] = useState( 'normal' );

    return (
    <Fragment>
        <InspectorControls>
            <InsSettingHeader value={ tab }
					options={[
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

            {'style' === tab && (

                <Fragment>

                 <PanelBody title={ __( 'General', 'themehunk-block' ) }
							className="th-adv-h-panel"
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

						
				<ColorGradientControl
								label={ __( 'Heading Color', 'themehunk-block' ) }
								colorValue={ attributes.headingColor }
								onColorChange={ e => setAttributes({ headingColor: e }) }
							/>	
			 

				) || 'hover' ===  hover && (
			
				<ColorGradientControl
					label={ __( 'Heading Hover Color', 'themehunk-block' ) }
					colorValue={ attributes.headingHvrColor }
					onColorChange={ e => setAttributes({ headingHvrColor: e }) }
				/>
				
	
				) }
			
			
                <ResponsiveControl label={ __( 'Alignment', 'themehunk-block' ) } >
                <AlignmentToolbar
									value={ getAlignment() }
									onChange={ changeAlignment }
									isCollapsed={ false }
								/> 
                </ResponsiveControl>     

                </PanelBody>
				<PanelBody title={ __( 'Typographgy', 'themehunk-block' ) }
							className="th-adv-h-panel"
						>	
						<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.fontFamily }
								onChangeFontFamily={ changeFontFamily }
								valueVariant={ attributes.fontVariant }
								onChangeFontVariant={ fontVariant => setAttributes({ fontVariant }) }
								valueStyle={ attributes.fontStyle }
								onChangeFontStyle={ fontStyle => setAttributes({ fontStyle }) }
								valueTransform={ attributes.textTransform }
								onChangeTextTransform={ textTransform => setAttributes({ textTransform }) }
							/>
						<ClearButton
								values={[ 'fontFamily', 'fontVariant', 'fontStyle', 'textTransform' ]}
								setAttributes={ setAttributes }
							/>	
						<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							>
								<RangeControl
								    renderTooltipContent={ customTooltipFontsize }
									value={ getFontSize() || '' }
									onChange={ changeFontSize }
									step={ 0.1 }
									min={ 1 }
									max={ 500 }
									allowReset={ true }
								/>
						</ResponsiveControl>

						<ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							>
							<RangeControl
							    renderTooltipContent={ customTooltiplineHeight }
								value={ getlineHeight() || '' }
								onChange={ changelineHeight }
								step={ 0.1 }
								min={ 0 }
								max={ 3 }
								allowReset={ true }
							/>
						</ResponsiveControl>

						<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							>
							<RangeControl
							    renderTooltipContent={ customTooltipletterSpacing }
								value={ getletterSpacing() || '' }
								onChange={ changeletterSpacing }
								step={ 0.1 }
								min={ -50 }
								max={ 100 }
								allowReset={ true }
							/>
						</ResponsiveControl>	   

                </PanelBody>

                </Fragment>

            ) || 'advanced' === tab && (

            <Fragment>
				<PanelBody
					title={ __( 'Layout', 'themehunk-block' ) }
					initialOpen={ false }
				>           
				            <SelectControl
								label={ __( 'Width', 'themehunk-block' ) }
								value={ attributes.widthType }
								options={ [
									{ label:  __( 'Default', 'themehunk-block' ), value: 'default' },
									{ label: __( 'Full Width(100%)', 'themehunk-block' ), value: 'fullwidth' },
									{ label: __( 'Inline(Auto)', 'themehunk-block' ), value: 'inlinewidth' },
								    { label: __( 'Custom', 'themehunk-block' ), value: 'customwidth' },
								] }
								onChange={ e => setAttributes({ widthType: e }) }
							/>
							{ 'customwidth' == attributes.widthType && (

								<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
								<ResponsiveControl
								label={ __( 'Custom Width', 'themehunk-block' ) }
							     >	
								<RangeControl
								    renderTooltipContent={ customTooltipCustomWidth }
									value={ getCustomWidth() || '' }
									onChange={ changeCustomWidth }
									step={ 1 }
									min={ 1 }
									max={ 1000 }
									allowReset={ true }
								/>
								</ResponsiveControl>
								</Suspense>

							) }
                            <ResponsiveControl
								label={ __( 'Padding', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getPaddingType() }
									min={ 0 }
									max={ 500 }
									changeType={ changePaddingType }
									onChange={ changePadding }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getPadding( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getPadding( 'left' )
										}
									] }
								/>

							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Margin', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getMarginType() }
									min={ 0 }
									max={ 500 }
									changeType={ changeMarginType }
									onChange={ changeMargin }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getMargin( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getMargin( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getMargin( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getMargin( 'left' )
										}
									] }
								/>

							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Z-index', 'themehunk-block' ) }
							     >	
								<RangeControl
								    renderTooltipContent={ customTooltipZindex }
									value={ getZindex() || '' }
									onChange={ changeZindex }
									step={ 1 }
									min={ -999999 }
									max={ 999999 }
									allowReset={ true }
								/>
							</ResponsiveControl>


				</PanelBody>
		
		     </Fragment>

            )}

        </InspectorControls>
    </Fragment>
    );
};

export default InsSettings;