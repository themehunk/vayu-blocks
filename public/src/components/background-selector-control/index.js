/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientControl as ColorGradientControl,
	MediaPlaceholder
} from '@wordpress/block-editor';

import {
	Button,
	ButtonGroup,
	FocalPointPicker,
	Icon,
	PanelRow,
	SelectControl,
	GradientPicker
} from '@wordpress/components';

import { useInstanceId } from '@wordpress/compose';

import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Bgclr, BgGraclr, BgImg} from '../../helpers/icon.js';
import ControlPanelControl from '../control-panel-control/index.js';

const BackgroundSelectorControl = ({
	backgroundType,
	backgroundColor,
	image,
	gradient,
	backgroundAttachment,
	backgroundRepeat,
	backgroundSize,
	focalPoint,
	changeImage,
	changeColor,
	removeImage,
	changeBackgroundType,
	changeGradient,
	changeBackgroundAttachment,
	changeBackgroundRepeat,
	changeBackgroundSize,
	changeFocalPoint
}) => {

	// console.log(gradient,'gradient');
	const instanceId = useInstanceId( BackgroundSelectorControl );

	const id = `inspector-background-selector-control-${ instanceId }`;

	const gradientnew = [
		{
		  gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
		  name: 'Vivid cyan blue to vivid purple',
		  slug: 'vivid-cyan-blue-to-vivid-purple'
		},
		{
		  gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
		  name: 'Light green cyan to vivid green cyan',
		  slug: 'light-green-cyan-to-vivid-green-cyan'
		},
		{
		  gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
		  name: 'Luminous vivid amber to luminous vivid orange',
		  slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
		},
		{
		  gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
		  name: 'Luminous vivid orange to vivid red',
		  slug: 'luminous-vivid-orange-to-vivid-red'
		},
		{
		  gradient: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
		  name: 'Very light gray to cyan bluish gray',
		  slug: 'very-light-gray-to-cyan-bluish-gray'
		},
		{
		  gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
		  name: 'Cool to warm spectrum',
		  slug: 'cool-to-warm-spectrum'
		},
		{
		  gradient: 'linear-gradient(to right, #C90100 0%, #FF7B00 25%, #00D4E7 75%, #009DFF 100%)',
		  name: 'Red to blue gradient',
		  slug: 'red-to-blue-gradient'
		},
		{
		  gradient: 'linear-gradient(45deg, #09009f, #00ff95 80%)',
		  name: 'Blue to green gradient',
		  slug: 'blue-to-green-gradient'
		},
		{
		  gradient: 'linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4))',
		  name: 'Purple to red gradient',
		  slug: 'purple-to-red-gradient'
		},
		{
		  gradient: 'linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)',
		  name: 'Multicolor gradient',
		  slug: 'multicolor-gradient'
		}
	];

	return (
		<div id={ id } className="components-base-control th-background-selector-control">
			<div className="components-base-control__field">
				<div className="components-base-control__title">
					<label className="components-base-control__label">{ __( 'Background Type', 'vayu-blocks' ) }</label>
					<ButtonGroup className="linking-controls">
						<Button
							icon={ () => <Icon icon={ Bgclr } /> }
							label={ __( 'Color', 'vayu-blocks' ) }
							showTooltip={ true }
							isPrimary={ 'color' === backgroundType }
							onClick={ () => changeBackgroundType( 'color' ) }
						/>

						<Button
							icon={ () => <Icon icon={ BgImg } /> }
							label={ __( 'Image', 'vayu-blocks' ) }
							showTooltip={ true }
							isPrimary={ 'image' === backgroundType }
							onClick={ () => changeBackgroundType( 'image' ) }
						/>

						<Button
							icon={ () => <Icon icon={ BgGraclr } /> }
							label={ __( 'Gradient', 'vayu-blocks' ) }
							showTooltip={ true }
							isPrimary={ 'gradient' === backgroundType }
							onClick={ () => changeBackgroundType( 'gradient' ) }
						/>
					</ButtonGroup>
				</div>
			</div>

			{
				( 'color' === backgroundType || undefined === backgroundType ) && (
					<ColorGradientControl
						label={ __( 'Background Color', 'vayu-blocks' ) }
						colorValue={ backgroundColor }
						onColorChange={ changeColor }
						enableAlpha={true} 
					/>
				)
			}
			{
				'image' === backgroundType && (
					image?.url ? (
						<Fragment>
							<FocalPointPicker
								label={ __( 'Focal point picker', 'vayu-blocks' ) }
								url={ image.url }
								value={ focalPoint }
								onDragStart={ changeFocalPoint }
								onDrag={ changeFocalPoint }
								onChange={ changeFocalPoint }
							/>

							<ControlPanelControl
								label={ __( 'Background Settings', 'vayu-blocks' ) }
							>
								<SelectControl
									label={ __( 'Background Attachment', 'vayu-blocks' ) }
									value={ backgroundAttachment }
									options={ [
										{ label: __( 'Scroll', 'vayu-blocks' ), value: 'scroll' },
										{ label: __( 'Fixed', 'vayu-blocks' ), value: 'fixed' },
										{ label: __( 'Local', 'vayu-blocks' ), value: 'local' }
									] }
									onChange={ changeBackgroundAttachment }
								/>

								<SelectControl
									label={ __( 'Background Repeat', 'vayu-blocks' ) }
									value={ backgroundRepeat }
									options={ [
										{ label: __( 'Repeat', 'vayu-blocks' ), value: 'repeat' },
										{ label: __( 'No-repeat', 'vayu-blocks' ), value: 'no-repeat' }
									] }
									onChange={ changeBackgroundRepeat }
								/>

								<SelectControl
									label={ __( 'Background Size', 'vayu-blocks' ) }
									value={ backgroundSize }
									options={ [
										{ label: __( 'Auto', 'vayu-blocks' ), value: 'auto' },
										{ label: __( 'Cover', 'vayu-blocks' ), value: 'cover' },
										{ label: __( 'Contain', 'vayu-blocks' ), value: 'contain' }
									] }
									onChange={ changeBackgroundSize }
								/>
							</ControlPanelControl>

							<PanelRow>
								<Button
									isSmall
									isSecondary
									onClick={ removeImage }
								>
									{ __( 'Clear Image', 'vayu-blocks' ) }
								</Button>
							</PanelRow>
						</Fragment>
					) : (
						<MediaPlaceholder
							icon="format-image"
							labels={ {
								title: __( 'Background Image', 'vayu-blocks' ),
								name: __( 'an image', 'vayu-blocks' )
							} }
							value={ image?.id }
							onSelect={ changeImage }
							accept="image/*"
							allowedTypes={ [ 'image' ] }
						/>
					)
				)
			}
			{
				'gradient' === backgroundType && (
					<GradientPicker
						label={ __( 'Background Gradient', 'vayu-blocks' ) }
						value={ gradient }
						disableCustomColors={ true }
						onChange={ changeGradient }
						gradients={ gradientnew }
						clearable={ false }
					/>
				)
			}
		</div>
	);
};

export default BackgroundSelectorControl;