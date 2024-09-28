import { __ } from '@wordpress/i18n';
import { __experimentalBlockVariationPicker as BlockVariationPicker, useBlockProps } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { RxGroup as icons } from "react-icons/rx";
import { TfiLayoutColumn2Alt as icon2 } from "react-icons/tfi";
import { TfiLayoutColumn3Alt as icon3 } from "react-icons/tfi";

export const variations = [
    {
		name: 'one-column',
        icon: icons,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'vayu-blocks/advance-container', { direction: "row", } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
        icon: icon2,
		attributes: {
			variationSelected: true,
			direction: "row",
		},
		isDefault: true,
		innerBlocks: [
			[ 'vayu-blocks/advance-container', { direction: "row", } ],
			[ 'vayu-blocks/advance-container', { direction: "row", } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
        icon: icon3,
		attributes: {
			variationSelected: true,
			 direction: "row",
		},
		innerBlocks: [
			[ 'vayu-blocks/advance-container', { direction: "row", } ],
			[ 'vayu-blocks/advance-container', { direction: "row", } ],
			[ 'vayu-blocks/advance-container', { direction: "row", } ],
		],
		scope: [ 'block' ],
	},
];

export const VariationPicker = ( { clientId, setAttributes, defaultVariation } ) => {
	// const { clientId, setAttributes, defaultVariation } = props;
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	return (
		<div {...useBlockProps()} className="uagb-container-variation-picker">
			<BlockVariationPicker
				icon='columns'
				label={ __( 'Container', 'vayu-blocks' ) }
				instructions={
					__(
						'Select a container layout to start with.',
						'vayu-blocks'
					)
				}
				variations={ variations }
				onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
			/>
		</div>
	);
};
