import { __ } from '@wordpress/i18n';
import { __experimentalBlockVariationPicker as BlockVariationPicker, useBlockProps } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
// import { Path, SVG } from '@wordpress/components';
import { RxGroup as icons } from "react-icons/rx";

import {
	Defs,
	G,
	Path,
	Rect,
	SVG,
	clipPath
} from '@wordpress/primitives';

const columnWidth = 9;  // Width of each column
const columnSpacing = 5;  // Space between columns
const columns = 4;  // Number of columns

// Calculate total width
const totalWidth = columns * columnWidth + (columns - 1) * columnSpacing;
export const variations = [
	{
		name: 'one-column-join',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			direction: "row",
		},
		scope: [ 'block' ],
	},
	{
		name: 'two-column-join',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
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
		name: 'three-columns-equal-join',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
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
	{
		name: 'four-column-join',
        icon: ( 
			<SVG
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			viewBox={`0 0 ${totalWidth} 48`}
			>
  {[...Array(columns)].map((_, i) => {
    const xPos = i * (columnWidth + columnSpacing);
    return (
      <Path
        key={i}
        d={`M${xPos} 10a2 2 0 0 1 2-2h${columnWidth - 2}c1.105 0 2 .895 2 2v28c0 1.105-.895 2-2 2H${xPos + 2}a2 2 0 0 1-2-2V10Z`}
      />
    );
  })}
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
			[ 'vayu-blocks/advance-container'],
			[ 'vayu-blocks/advance-container'],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-column-33-66',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm17 0a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			direction: "row",
		},
		isDefault: true,
		innerBlocks: [
			[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 }],
			[ 'vayu-blocks/advance-container' ,{ contentWidthType:"fullwidth",  fullcontentWidth: 66 }],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-column-25-50-25',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h7.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm13.5 0c0-1.105.864-2 1.969-2H32.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H15.47c-1.105 0-1.969-.895-1.969-2V10Zm23 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2h-7.531c-1.105 0-1.969-.895-1.969-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			direction: "row",
		},
		isDefault: true,
		innerBlocks: [
			[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 25 }],
			[ 'vayu-blocks/advance-container' ,{ contentWidthType:"fullwidth",  fullcontentWidth: 50 }],
			[ 'vayu-blocks/advance-container' ,{ contentWidthType:"fullwidth",  fullcontentWidth: 25 }],
		],
		scope: [ 'block' ],
	},
	{
		name: '2*2-column-50-50',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10ZM0 27a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V27Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V27Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			direction: "column",
		},
		isDefault: true,
		innerBlocks: [
			[
				'vayu-blocks/advance-container',
				{ direction: "row",  },
				[
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 50 } ],
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 50 } ],
				],
			],
			[
				'vayu-blocks/advance-container',
				{ direction: "row",  },
				[
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 50 } ],
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 50 } ],
				],
			],
		],
		scope: [ 'block' ],
	},
	{
		name: '2*3-column-33-33-33',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		attributes: {
			variationSelected: true,
			direction: "column",
		},
		isDefault: true,
		innerBlocks: [
			[
				'vayu-blocks/advance-container',
				{ direction: "row",  },
				[
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 } ],
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 } ],
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 } ],
				],
			],
			[
				'vayu-blocks/advance-container',
				{ direction: "row",  },
				[
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 } ],
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 } ],
					[ 'vayu-blocks/advance-container', { contentWidthType: "fullwidth", fullcontentWidth: 33 } ],
				],
			],
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

		if ( nextVariation.innerBlocks && 'one-column-join' !== nextVariation.name ) {
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
