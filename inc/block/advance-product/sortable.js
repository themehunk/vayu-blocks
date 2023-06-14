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
	// verticalOrientationOffset bottom
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

	const [ title, settitle ] = useState( 'normal' );

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
							<h3>category</h3>
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
							<h3>price</h3>
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