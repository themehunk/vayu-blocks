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
	ToggleControl
} from '@wordpress/components';

import {
	Fragment,
	useState
} from '@wordpress/element';

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
							<h3>title</h3>
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