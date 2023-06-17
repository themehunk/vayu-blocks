/**
 * External dependencies
 */
import classnames from 'classnames';

import {
	SortableContainer,
	SortableElement,
	SortableHandle
} from 'react-sortable-hoc';

/**
 * WordPress dependencies
 */
import {__experimentalColorGradientControl as ColorGradientControl} from '@wordpress/block-editor';
import {
	__,
	sprintf
} from '@wordpress/i18n';

import {
	startCase,
	toLower
} from 'lodash';

import {
	Button,
	TextControl,
	SelectControl,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

import {
	InsSettingHeader,
	ResponsiveControl,
	SizingControl,
	HoverControl,
	ControlPanelControl,
	BackgroundSelectorControl,
	UnitChooser,
	ToogleGroupControl,
	GoogleFontsControl,
 } from '../../../src/components/index.js';

import {
    Fragment,
    useState,
    Suspense
} from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import { applyFilters } from '@wordpress/hooks';

const DragHandle = SortableHandle( () => {
	return (
		<div className="th-sortable-handle" tabIndex="0">
			<span></span>
		</div>
	);
});

const fieldMapping = {
	image: 'displayFeaturedImage',
	category: 'displayCategory',
	title: 'displayTitle',
	price: 'displayPrice',
    rating: 'displayRating',
    button: 'displayButton',
	description: 'displayDescription'
};

export const SortableItem = ({
	attributes,
	setAttributes,
	template,
	disabled
}) => {
	const getView = useSelect( select => {

		const { getView } = select( 'themehunk-blocks/data' );

		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const [ isOpen, setOpen ] = useState( false );

	const isCustomMeta = template?.startsWith( 'custom_' );
	const customMeta = attributes?.customMetas?.filter( ({ id }) =>  id === template )?.pop();

	const templateLookUp = {
		image: attributes.displayFeaturedImage,
		category:attributes.displayCategory,
		title: attributes.displayTitle,
        price: attributes.displayPrice,
        rating:attributes.displayRating,
		button:attributes.displayButton
	};

	const toggleField = fieldName => {
		const field = fieldMapping[ fieldName ] || fieldName;
		setAttributes({ [field]: ! attributes[ field ] });
	};

	const setAttributesCustomMeta = attr => {
		const newMeta = { ...customMeta, ...attr };
		setAttributes({
			customMetas: attributes.customMetas.map( currentMeta => {
				if ( currentMeta.id === customMeta.id ) {
					return newMeta;
				}
				return currentMeta;
			})
		});
	};

	const label = ! isCustomMeta ? startCase( toLower( template ) ) : customMeta;
	const canEdit = templateLookUp[ template ] || customMeta?.display;
	const icon = canEdit ? 'visibility' : 'hidden';

	/* translators: %s Label */
	let message = sprintf( __( 'Display %s', 'themehunk-block' ), label );
	if ( canEdit ) {

		/* translators: %s Label */
		message = sprintf( __( 'Hide %s', 'themehunk-block' ), label );
	}

	// title font family
	const changetitleFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				titlefontFamily: value,
				titlefontVariant: value
			});
		} else {
			setAttributes({
				titlefontFamily: value,
				titlefontVariant: 'normal',
				titlefontStyle: 'normal'
			});
		}
	};
	//title lineheight
	const [titlelineHeightUnit, settitlelineHeightUnit] = useState('px');
	const maxtitlelineHeightUnit = titlelineHeightUnit === 'px' ? 150 : titlelineHeightUnit === 'em' ? 10 : titlelineHeightUnit === '%' ? 100:'';
	const customTooltiptitlelineHeight = value => `${value}${attributes.titlelineHeightUnit}`;
	// verticalOrientationOffset bottom
	const gettitlelineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.titlelineHeight;
		case 'Tablet':
			return attributes.titlelineHeightTablet;
		case 'Mobile':
			return attributes.titlelineHeightMobile;
		default:
			return undefined;
		}
	};

    const changetitlelineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ titlelineHeight: value, titlelineHeightTablet: value, titlelineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ titlelineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ titlelineHeightMobile: value });
		}
	};

	//title fontsize
	const [titlefontSizeUnit, settitlefontSizeUnit] = useState('px');
	const maxtitlefontSizeUnit = titlefontSizeUnit === 'px' ? 150 : titlefontSizeUnit === 'em' ? 10 : titlefontSizeUnit === '%' ? 100:'';
	const customTooltiptitlefontSize = value => `${value}${attributes.titlefontSizeUnit}`;

	const gettitlefontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.titlefontSize;
		case 'Tablet':
			return attributes.titlefontSizeTablet;
		case 'Mobile':
			return attributes.titlefontSizeMobile;
		default:
			return undefined;
		}
	};
    const changetitlefontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ titlefontSize: value, titlefontSizeTablet: value, titlefontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ titlefontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ titlefontSizeMobile: value });
		}
	};

	//title letter spacing
	const [titleletterSpacingUnit, settitleletterSpacingUnit] = useState('px');
	const maxtitleletterSpacingUnit = titleletterSpacingUnit === 'px' ? 150 : titleletterSpacingUnit === 'em' ? 10 : titleletterSpacingUnit === '%' ? 100:'';
	const customTooltiptitleletterSpacing = value => `${value}${attributes.titleletterSpacingUnit}`;
	// verticalOrientationOffset bottom
	const gettitleletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.titleletterSpacing;
		case 'Tablet':
			return attributes.titleletterSpacingTablet;
		case 'Mobile':
			return attributes.titleletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changetitleletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ titleletterSpacing: value, titleletterSpacingTablet: value, titleletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ titleletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ titleletterSpacingMobile: value });
		}
	};

	// cat font family
	const changecatFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				catfontFamily: value,
				catfontVariant: value
			});
		} else {
			setAttributes({
				catfontFamily: value,
				catfontVariant: 'normal',
				catfontStyle: 'normal'
			});
		}
	};
	//cat lineheight
	const [catlineHeightUnit, setcatlineHeightUnit] = useState('px');
	const maxcatlineHeightUnit = catlineHeightUnit === 'px' ? 150 : catlineHeightUnit === 'em' ? 10 : catlineHeightUnit === '%' ? 100:'';
	const customTooltipcatlineHeight = value => `${value}${attributes.catlineHeightUnit}`;

	const getcatlineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.catlineHeight;
		case 'Tablet':
			return attributes.catlineHeightTablet;
		case 'Mobile':
			return attributes.catlineHeightMobile;
		default:
			return undefined;
		}
	};

    const changecatlineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ catlineHeight: value, catlineHeightTablet: value, catlineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ catlineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ catlineHeightMobile: value });
		}
	};

	//title fontsize
	const [catfontSizeUnit, setcatfontSizeUnit] = useState('px');
	const maxcatfontSizeUnit = titlefontSizeUnit === 'px' ? 150 : catfontSizeUnit === 'em' ? 10 : catfontSizeUnit === '%' ? 100:'';
	const customTooltipcatfontSize = value => `${value}${attributes.catfontSizeUnit}`;

	const getcatfontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.catfontSize;
		case 'Tablet':
			return attributes.catfontSizeTablet;
		case 'Mobile':
			return attributes.catfontSizeMobile;
		default:
			return undefined;
		}
	};
    const changecatfontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ catfontSize: value, catfontSizeTablet: value, catfontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ catfontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ catfontSizeMobile: value });
		}
	};

	//title letter spacing
	const [catletterSpacingUnit, setcatletterSpacingUnit] = useState('px');
	const maxcatletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : catletterSpacingUnit === 'em' ? 10 : catletterSpacingUnit === '%' ? 100:'';
	const customTooltipcatletterSpacing = value => `${value}${attributes.catletterSpacingUnit}`;

	const getcatletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.catletterSpacing;
		case 'Tablet':
			return attributes.catletterSpacingTablet;
		case 'Mobile':
			return attributes.catletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changecatletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ catletterSpacing: value, catletterSpacingTablet: value, catletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ catletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ catletterSpacingMobile: value });
		}
	};
    // cat font family
	const changepriceFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				pricefontFamily: value,
				pricefontVariant: value
			});
		} else {
			setAttributes({
				pricefontFamily: value,
				pricefontVariant: 'normal',
				pricefontStyle: 'normal'
			});
		}
	};
	//cat lineheight
	const [pricelineHeightUnit, setpricelineHeightUnit] = useState('px');
	const maxpricelineHeightUnit = pricelineHeightUnit === 'px' ? 150 : pricelineHeightUnit === 'em' ? 10 : pricelineHeightUnit === '%' ? 100:'';
	const customTooltippricelineHeight = value => `${value}${attributes.pricelineHeightUnit}`;

	const getpricelineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.pricelineHeight;
		case 'Tablet':
			return attributes.pricelineHeightTablet;
		case 'Mobile':
			return attributes.pricelineHeightMobile;
		default:
			return undefined;
		}
	};

    const changepricelineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ pricelineHeight: value, pricelineHeightTablet: value, pricelineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ pricelineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ pricelineHeightMobile: value });
		}
	};

	//title fontsize
	const [pricefontSizeUnit, setpricefontSizeUnit] = useState('px');
	const maxpricefontSizeUnit = pricefontSizeUnit === 'px' ? 150 : pricefontSizeUnit === 'em' ? 10 : pricefontSizeUnit === '%' ? 100:'';
	const customTooltippricefontSize = value => `${value}${attributes.pricefontSizeUnit}`;

	const getpricefontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.pricefontSize;
		case 'Tablet':
			return attributes.pricefontSizeTablet;
		case 'Mobile':
			return attributes.pricefontSizeMobile;
		default:
			return undefined;
		}
	};
    const changepricefontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ pricefontSize: value, pricefontSizeTablet: value, pricefontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ pricefontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ pricefontSizeMobile: value });
		}
	};

	//title letter spacing
	const [priceletterSpacingUnit, setpriceletterSpacingUnit] = useState('px');
	const maxpriceletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : priceletterSpacingUnit === 'em' ? 10 : priceletterSpacingUnit === '%' ? 100:'';
	const customTooltippriceletterSpacing = value => `${value}${attributes.priceletterSpacingUnit}`;

	const getpriceletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.priceletterSpacing;
		case 'Tablet':
			return attributes.priceletterSpacingTablet;
		case 'Mobile':
			return attributes.priceletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changepriceletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ priceletterSpacing: value, priceletterSpacingTablet: value, priceletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ priceletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ priceletterSpacingMobile: value });
		}
	};

	const [ title, settitle ] = useState( 'normal' );
    const [ cat, setcat ] = useState( 'normal' );
	
	return (
		<div
			className={ classnames(
				'th-sortable-item-area',
				`th-sortable-item-area-${ template }`
			) }
		>
			<div
				className={ classnames(
					'th-sortable-item',
					{
						'disabled': disabled,
						'hidden': ! canEdit,
						'editable': canEdit
					}
				) }
			>
				{ ! disabled && <DragHandle /> }

				<div className="th-sortable-label">
					{ label }
				</div>

				{ canEdit && (
					<Button
						icon={ isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2' }
						label={ isOpen ? __( 'Close Settings', 'themehunk-block' ) : __( 'Open Settings', 'themehunk-block' ) }
						showTooltip={ true }
						className="th-sortable-button"
						onClick={ () => setOpen( ! isOpen ) }
					/>
				) }

				<Button
					icon={ icon }
					label={ message }
					showTooltip={ true }
					className="th-sortable-button"
					onClick={ () => {
						if ( isCustomMeta ) {
							setAttributesCustomMeta({ display: ! customMeta.display });
						} else {
							toggleField( template );
						}
						setOpen( false );
					} }
				/>
			</div>

			{ canEdit &&  (
				<div
					className={ classnames(
						'th-sortable-control-area',
						{ 'opened': isOpen && canEdit }
					) }
				    >
					{ ( 'image' === template ) && (
						<Fragment >
							<ToggleControl
								label={ __( 'Crop Image to Fit', 'otter-blocks' ) }
								checked={ attributes.cropImage }
								onChange={ cropImage => setAttributes({ cropImage }) }
							/>
						</Fragment>
					) }

                   { ( 'category' === template ) && (
						<Fragment >
							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ catTypography: true }) }
								resetValues={
									{
										catTypography:false,
										catfontFamily:"default",
										catfontVariant:"regular",
										catfontStyle:"regular",
										cattextTransform:"default",
										catfontSize:"",
										catlineHeight:"",
										catletterSpacing:"",
										catfontSizeUnit:"px",
										catlineHeightUnit:"px",
										catletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.catfontFamily }
								onChangeFontFamily={ changecatFontFamily }
								valueVariant={ attributes.catfontVariant }
								onChangeFontVariant={ catfontVariant => setAttributes({ catfontVariant }) }
								valueStyle={ attributes.catfontStyle }
								onChangeFontStyle={ catfontStyle => setAttributes({ catfontStyle }) }
								valueTransform={ attributes.cattextTransform }
								onChangeTextTransform={ cattextTransform => setAttributes({ cattextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.catfontSizeUnit }
								onClick={catfontSizeUnit => {
									setAttributes({ catfontSizeUnit });
									setcatfontSizeUnit(catfontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipcatfontSize }
									value={ getcatfontSize() || '' }
									onChange={ changecatfontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxcatfontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.catlineHeightUnit }
								onClick={catlineHeightUnit => {
									setAttributes({ catlineHeightUnit });
									setcatlineHeightUnit(catlineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipcatlineHeight }
									value={ getcatlineHeight() || '' }
									onChange={ changecatlineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxcatlineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.catletterSpacingUnit }
								onClick={catletterSpacingUnit => {
									setAttributes({catletterSpacingUnit });
									setcatletterSpacingUnit(catletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipcatletterSpacing }
									value={ getcatletterSpacing() || '' }
									onChange={ changecatletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxcatletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ catColor: true }) }
								resetValues={
									{
										catTypography:false,
										catTxtColor:"",
										catTxtColorHvr:"",
										
									}
								}
								
							>
                       <HoverControl value={ cat }
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
						onChange={ setcat } 
						/>
                        { 'normal' ===  cat &&  (
                                <ColorGradientControl
								 label={ __( ' Color', 'themehunk-block' ) }
								 colorValue={ attributes.catTxtColor }
								 onColorChange={ e => setAttributes({ catTxtColor: e }) }
								 enableAlpha={true} 
								 />
						) || 'hover' ===  cat && (
								 <ColorGradientControl
								 label={ __( ' Hover Color ', 'themehunk-block' ) }
								 colorValue={ attributes.catTxtColorHvr }
								 onColorChange={ e => setAttributes({ catTxtColorHvr: e }) }
								 enableAlpha={true} 
								 />
						)}

						</ControlPanelControl>
						</Fragment>
					) }

                    { ( 'title' === template ) && (
						<Fragment >
							<div className='th-component-group-label'>
							<label className='th-label'>{ __( 'Tag', 'themehunk-block' )}</label>
                             <ToogleGroupControl
                                        value={ attributes.prouctTitleTag }
                                        onChange={ prouctTitleTag => setAttributes({ prouctTitleTag })  }
										options={[
											{
												
												label: __( 'H2', 'themehunk-blocks' ),
												value: 'h2'
											},
											{
												
												label: __( 'H3', 'themehunk-block' ),
												value: 'h3'
											},
                                            {
												
												label: __( 'H4', 'themehunk-block' ),
												value: 'h4'
											},
                                            {
												
												label: __( 'H5', 'themehunk-block' ),
												value: 'h5'
											},
                                            {
												
												label: __( 'H6', 'themehunk-block' ),
												value: 'h6'
											}
										]}
										
										
									/>

							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ titleTypography: true }) }
								resetValues={
									{
										titleTypography:false,
										titlefontFamily:"default",
										titlefontVariant:"regular",
										titlefontStyle:"regular",
										titletextTransform:"default",
										titlefontSize:"",
										titlelineHeight:"",
										letterSpacing:"",
										titlefontSizeUnit:"px",
										titlelineHeightUnit:"px",
										titleletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.titlefontFamily }
								onChangeFontFamily={ changetitleFontFamily }
								valueVariant={ attributes.titlefontVariant }
								onChangeFontVariant={ titlefontVariant => setAttributes({ titlefontVariant }) }
								valueStyle={ attributes.titlefontStyle }
								onChangeFontStyle={ titlefontStyle => setAttributes({ titlefontStyle }) }
								valueTransform={ attributes.titletextTransform }
								onChangeTextTransform={ titletextTransform => setAttributes({ titletextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.titlefontSizeUnit }
								onClick={titlefontSizeUnit => {
									setAttributes({ titlefontSizeUnit });
									settitlefontSizeUnit(titlefontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptitlefontSize }
									value={ gettitlefontSize() || '' }
									onChange={ changetitlefontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxtitlefontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.titlelineHeightUnit }
								onClick={titlelineHeightUnit => {
									setAttributes({ titlelineHeightUnit });
									settitlelineHeightUnit(titlelineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptitlelineHeight }
									value={ gettitlelineHeight() || '' }
									onChange={ changetitlelineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxtitlelineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.titleletterSpacingUnit }
								onClick={titleletterSpacingUnit => {
									setAttributes({ titleletterSpacingUnit });
									settitleletterSpacingUnit(titleletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptitleletterSpacing }
									value={ gettitleletterSpacing() || '' }
									onChange={ changetitleletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxtitleletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>

						   <ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ titleColor: true }) }
								resetValues={
									{
										titleTypography:false,
										productTitleColor:"",
										productTitleColorHvr:"",
										
									}
								}
								
							>
                       <HoverControl value={ title }
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
						onChange={ settitle } 
						/>
                        { 'normal' ===  title &&  (
                                <ColorGradientControl
								 label={ __( 'Title Color', 'themehunk-block' ) }
								 colorValue={ attributes.productTitleColor }
								 onColorChange={ e => setAttributes({ productTitleColor: e }) }
								 enableAlpha={true} 
								 />
						) || 'hover' ===  title && (
								 <ColorGradientControl
								 label={ __( 'Title Hover Color ', 'themehunk-block' ) }
								 colorValue={ attributes.productTitleColorHvr }
								 onColorChange={ e => setAttributes({ productTitleColorHvr: e }) }
								 enableAlpha={true} 
								 />
						)}

						</ControlPanelControl>

						  </div>
						</Fragment>
					) }

					{ ( 'price' === template ) && (
						<Fragment>
							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ priceTypography: true }) }
								resetValues={
									{
										priceTypography:false,
										pricefontFamily:"default",
										pricefontVariant:"regular",
										pricefontStyle:"regular",
										pricetextTransform:"default",
										pricefontSize:"",
										pricelineHeight:"",
										priceletterSpacing:"",
										pricefontSizeUnit:"px",
										pricelineHeightUnit:"px",
										priceletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.pricefontFamily }
								onChangeFontFamily={ changepriceFontFamily }
								valueVariant={ attributes.pricefontVariant }
								onChangeFontVariant={ pricefontVariant => setAttributes({ pricefontVariant }) }
								valueStyle={ attributes.pricefontStyle }
								onChangeFontStyle={ pricefontStyle => setAttributes({ pricefontStyle }) }
								valueTransform={ attributes.pricetextTransform }
								onChangeTextTransform={ pricetextTransform => setAttributes({ pricetextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.pricefontSizeUnit }
								onClick={pricefontSizeUnit => {
									setAttributes({ pricefontSizeUnit });
									setpricefontSizeUnit(pricefontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippricefontSize }
									value={ getpricefontSize() || '' }
									onChange={ changepricefontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxpricefontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.pricelineHeightUnit }
								onClick={pricelineHeightUnit => {
									setAttributes({ pricelineHeightUnit });
									setpricelineHeightUnit(pricelineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippricelineHeight }
									value={ getpricelineHeight() || '' }
									onChange={ changepricelineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxpricelineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.priceletterSpacingUnit }
								onClick={priceletterSpacingUnit => {
									setAttributes({priceletterSpacingUnit });
									setpriceletterSpacingUnit(priceletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippriceletterSpacing }
									value={ getpriceletterSpacing() || '' }
									onChange={ changepriceletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxpriceletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ PriceColor: true }) }
								resetValues={
									{
										PriceColor:false,
										priceColor:"",
										priceColorHvr:"",
										
									}
								}
								
							>
                          <ColorGradientControl
								 label={ __( 'Color', 'themehunk-block' ) }
								 colorValue={ attributes.priceColor }
								 onColorChange={ e => setAttributes({ priceColor: e }) }
								 enableAlpha={true} 
								 />
						   <ColorGradientControl
								 label={ __( 'Del Color', 'themehunk-block' ) }
								 colorValue={ attributes.priceDelColor }
								 onColorChange={ e => setAttributes({ priceDelColor: e }) }
								 enableAlpha={true} 
								 />		 

                       
                        
						</ControlPanelControl>
						</Fragment>
					) }

					{ ( 'rating' === template ) && (
						<Fragment >
							<h3>rating</h3>
						</Fragment>
					) }

                    { ( 'button' === template ) && (
						<Fragment >
							<h3>button</h3>
						</Fragment>
					) }

				</div>
			) }
		</div>
	);
};

const SortableItemContainer = SortableElement( ({
	attributes,
	setAttributes,
	template,
	disabled
}) => {
	return (
		<SortableItem
			attributes={ attributes }
			setAttributes={ setAttributes }
			template={ template }
			disabled={ disabled }
		/>
	);
});

export const SortableList = SortableContainer( ({
	attributes,
	setAttributes
}) => {
	return (
		<div>
			{ attributes?.template
				?.filter( template => {
					if ( template?.startsWith( 'custom_' ) && ( window?.acf === undefined ) ) {
						return false;
					}
					return true;
				})
				.map( ( template, index ) => (
					<SortableItemContainer
						key={ `item-${ template }` }
						index={ index }
						attributes={ attributes }
						setAttributes={ setAttributes }
						template={ template }
					/>
				) ) }
		</div>
	);
});