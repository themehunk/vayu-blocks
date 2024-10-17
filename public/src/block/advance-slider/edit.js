/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import {
	useBlockProps,
	useInnerBlocksProps,
	useBlockEditContext,
	store as blockEditorStore,
	BlockControls,
	ButtonBlockAppender,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useRefEffect } from '@wordpress/compose';
import { useSelect, useDispatch, select, subscribe } from '@wordpress/data';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import { SwiperInit } from './swiper-init';
import './editor.scss';


//block and innerblocks with default settings
const ALLOWED_BLOCKS = [ 'vayu-blocks/flip-wrapper' ];
const DEFAULT_BLOCK = 'vayu-blocks/flip-wrapper';
const DEFAULT_BLOCK_ATTRIBUTES = {
	className: 'swiper-slide',
};

/**
 * Slider Toolbar - '+ Add a Slide'
 *
 * @param {string} clientId Block's clientsId.
 *
 * @return {Element} Returns ToolbarGroup.
 */
const SliderToolbar = ( { clientId } ) => {
	const { insertBlock, selectBlock } = useDispatch( blockEditorStore );
	const innerBlocks = useSelect(
		(
			select // eslint-disable-line no-shadow
		) => select( blockEditorStore ).getBlock( clientId ).innerBlocks
	);

	// Create a Slide block and insert it.
	const addSlide = () => {
		const block = createBlock( DEFAULT_BLOCK, {
			...DEFAULT_BLOCK_ATTRIBUTES,
		} );
		insertBlock( block, innerBlocks.length, clientId, false );
		selectBlock( block.clientId );
	};

	return (
		<ToolbarGroup>
			<ToolbarButton icon="plus" onClick={ addSlide }>
				{ __( 'Add Slide', 'wpe' ) }
			</ToolbarButton>
		</ToolbarGroup>
	);
};

/**
 * Slider component.
 */
const Slider = memo( ( { clientId, attributes, innerBlocksProps } ) => {
	const sliderRef = useRefEffect( ( element ) => {
		const options = {
			...attributes,
		};

		// Initialize slider.
		let slider = SwiperInit( element, options );

		// Store the current slide order to detect changes, such as adding, removing, or reordering slides.
		let slideOrder = select( blockEditorStore ).getBlockOrder( clientId );

		// Subscribe slider update events like adding, removing, or reordering slides.
		const unsubscribeSliderUpdateListener = subscribe( () => {
			const currentSlidesOrder =
				select( blockEditorStore ).getBlockOrder( clientId );

			// Check if the slider has been changed.
			if ( currentSlidesOrder.toString() !== slideOrder.toString() ) {
				const selectedBlock =
					select( blockEditorStore ).getSelectedBlock();
				const slideAdded =
					currentSlidesOrder.length > slideOrder.length;
				const slideRemoved =
					currentSlidesOrder.length < slideOrder.length;
				const slideMoved =
					currentSlidesOrder.length === slideOrder.length;
				const activeIndex = slider.activeIndex;

				// Store the current slide order before destroying the slider instance.
				slideOrder = currentSlidesOrder;
				slider.destroy();

				window.requestAnimationFrame( () => {
					// Initialize slider.
					slider = SwiperInit( element, options );

					// Determine where the slider should go.
					let slideToIndex = activeIndex;
					if ( slideAdded ) {
						slideToIndex = slideOrder.length;
					} else if ( slideRemoved ) {
						slideToIndex = activeIndex - 1;
					} else if ( slideMoved ) {
						slideToIndex = slideOrder.findIndex(
							( clientId ) => clientId === selectedBlock.clientId // eslint-disable-line no-shadow
						);
					}

					if ( slideToIndex < 0 ) {
						slideToIndex = 0;
					}

					slider.slideTo( slideToIndex, 0 );
				} );
			}
		} );

		return () => {
			unsubscribeSliderUpdateListener();
			slider.destroy();
		};
	} );

	return (
		<>
			<BlockControls>
				<SliderToolbar clientId={ clientId } />
			</BlockControls>

			<div className="swiper" ref={ sliderRef }>
				<div { ...innerBlocksProps } />
			</div>

			<ButtonBlockAppender
				className="slider-appender has-icon"
				rootClientId={ clientId }
			/>
		</>
	);
} );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { autoplay, navigation, pagination } = attributes;
	const { clientId } = useBlockEditContext();
	const blockProps = useBlockProps();
	// Our nested innerblocks that will be inserted by default.
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'swiper-wrapper vayu_blocks_advance_slider' },
		{
			allowedBlocks: ALLOWED_BLOCKS,
			defaultBlock: {
				name: DEFAULT_BLOCK,
				attributes: {
					...DEFAULT_BLOCK_ATTRIBUTES,
				},
			},
			directInsert: true,
			orientation: 'horizontal',
			template: [
				[
					DEFAULT_BLOCK,
					{
						...DEFAULT_BLOCK_ATTRIBUTES,
					},
				],
				[
					DEFAULT_BLOCK,
					{
						...DEFAULT_BLOCK_ATTRIBUTES,
					},
				],
			],
			renderAppender: false,
		}
	);

	return (
		<>
  <PanelSettings attributes={attributes} setAttributes={setAttributes} />
  <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
			<div >
				<Slider
					clientId={ clientId }
					attributes={ attributes }
					innerBlocksProps={ innerBlocksProps }
				/>
			</div>
			</AdvanceSettings>
		</>
	);
}
