import { __ } from '@wordpress/i18n';
import { __experimentalBlockVariationPicker as BlockVariationPicker, useBlockProps } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { Path, SVG } from '@wordpress/components';
import { RxGroup as icons } from "react-icons/rx";

export const variations = [
    {
		name: 'one-column',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
		},
		isDefault: true,
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			direction: "row",
		},
		isDefault: true,
		innerBlocks: [
			[ 'vayu-blocks/advance-container'],
			[ 'vayu-blocks/advance-container'],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.47c-1.105 0-1.969-.895-1.969-2V10Zm17 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35.469c-1.105 0-1.969-.895-1.969-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			 direction: "row",
		},
		innerBlocks: [
			[ 'vayu-blocks/advance-container'],
			[ 'vayu-blocks/advance-container'],
			[ 'vayu-blocks/advance-container'],
		],
		scope: [ 'block' ],
	},
];

export const VariationPicker = ( { clientId, setAttributes, defaultVariation } ) => {
	
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
		<div {...useBlockProps()} className="vayu-blocks-container-variation-picker">
			<BlockVariationPicker
				icon= {icons}
				label={ __( 'Container', 'vayu-blocks' ) }
				instructions={
					__(
						'Choose a layout of container',
						'vayu-blocks'
					)
				}
				variations={ variations }
				onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
			/>
		</div>
	);
};
